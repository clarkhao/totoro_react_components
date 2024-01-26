import { z } from "zod";

export type TValidation = {
  value: number | string;
  message: string;
};
type TCheck = {
  kind: string;
  value: unknown;
  message: string;
};
export type TCompare = {
  kind: string;
  value: boolean;
  message: string;
};
export class Validate {
  validation: z.ZodTypeAny;
  key: string;
  constructor(
    raw: {
      [key: string]: string | TValidation | Array<TValidation>;
    },
    key: string,
  ) {
    this.key = key;
    switch (raw.type) {
      case "string":
        this.validation = z.string();
        break;
      default:
        this.validation = z.unknown();
        break;
    }
    for (const key in raw) {
      switch (key) {
        case "min":
          switch (this.validation._def.typeName) {
            case "ZodString":
              this.validation = (this.validation as z.ZodString).min(
                (raw[key] as TValidation).value as number,
                { message: (raw[key] as TValidation).message },
              );
          }
          break;
        case "max":
          switch (this.validation._def.typeName) {
            case "ZodString":
              this.validation = (this.validation as z.ZodString).max(
                (raw[key] as TValidation).value as number,
                { message: (raw[key] as TValidation).message },
              );
          }
          break;
        case "regex":
          switch (this.validation._def.typeName) {
            case "ZodString":
              for (const r of raw[key] as TValidation[]) {
                this.validation = (this.validation as z.ZodString).regex(
                  new RegExp(r.value as string),
                  { message: r.message },
                );
              }
          }
          break;
        default:
          break;
      }
      console.log(this.validation._def);
    }
  }
  public verify(value: unknown) {
    const checks = this.validation.safeParse(value);
    return checks.success ? null : checks.error.issues;
  }
  // compare the json and check result
  // return a map {key1: boolean, key2[0]: boolean, key2[1]: boolean, ...}
  public compare(issues: z.ZodIssue[]) {
    const result: Array<TCompare> = [];
    const messages = issues.map((is) => is.message);
    const checks = this.validation._def.checks;
    for (const c of checks as Array<TCheck>) {
      result.push({
        kind: c.kind,
        value: messages.some((msg) => msg.includes(c.message)),
        message: c.message,
      });
    }
    return result;
  }
}

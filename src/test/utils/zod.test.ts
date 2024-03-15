import { PswValidate, Validate } from "../../utils/zod";
import json from "../../../data/zod.json";

describe("Validate Class test", () => {
  it("construct a ZodString validate instance", () => {
    const raw = json.name;
    const v = new Validate(raw, "name");
    expect(v.validation._def.typeName).toBe("ZodString");
    expect(v.validation.safeParse("okkor").success).toBe(true);
    expect(v.validation.safeParse(new Array(33).fill("a")).success).toBe(false);
    expect(v.validation.safeParse("_abb").success).toBe(false);
    expect(v.validation.safeParse("abb$$").success).toBe(false);
  });
  it("test password validate class", () => {
    const raw = json.password;
    const v1 = new PswValidate(raw, "password", 9);
    const issueA = v1.verify("hH123rr");
    expect(v1.compare(issueA!).pass).toBe(true);
    expect(
      v1.compare(issueA!).result.filter((el) => el.value === undefined).length,
    ).toBe(2);
    /******************************************************/
    const v2 = new PswValidate(raw, "password", 9);
    const issueB = v2.verify("hH12#");
    expect(v2.compare(issueB!).pass).toBe(false);
    expect(
      v2.compare(issueB!).result.filter((el) => el.value === undefined).length,
    ).toBe(1);
  });
});

import { Validate } from "../../utils/zod";
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
});

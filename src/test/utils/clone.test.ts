import { deepClone } from "../../utils";

describe("deepclone", () => {
  it("should deepclone object", () => {
    const mockObj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };
    const copyOne = deepClone(mockObj);
    expect(copyOne).toEqual(mockObj);
    const mockList = [{ a: 1 }, { a: 2, b: [1, 2, 3] }, { b: [2, 3, 4] }];
    const copyTwo = deepClone(mockList);
    expect(copyTwo).toEqual(mockList);
  });
  it("should deepclone list", () => {
    const mockList = [{ a: 1 }, { a: 2, b: [1, 2, 3] }, { b: [2, 3, 4] }];
    const copyTwo = deepClone(mockList);
    expect(copyTwo).toEqual(mockList);
  });
});

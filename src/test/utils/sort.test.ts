import { sortChain } from "../../utils";

describe("sortListWichSortChains", () => {
  const mockList: Array<{ due: string; age: number }> = [
    { due: "2022-01-01", age: 1 },
    { due: "2022-01-03", age: 3 },
    { due: "2022-01-09", age: 3 },
    { due: "2022-01-04", age: 4 },
    { due: "2022-01-05", age: 5 },
    { due: "2022-01-02", age: 2 },
  ];
  const mockSort: Array<{
    type: string;
    order: number;
    fn: ((v: any) => number) | undefined;
  }> = [
    { type: "due", order: 1, fn: (v: string) => new Date(v).getTime() },
    { type: "age", order: 0, fn: (v: string) => +v },
  ];

  it("should sort list which sort chains", () => {
    const query = sortChain(mockSort, mockList);
    expect(query).toEqual([
      { due: "2022-01-01", age: 1 },
      { due: "2022-01-02", age: 2 },
      { due: "2022-01-09", age: 3 },
      { due: "2022-01-03", age: 3 },
      { due: "2022-01-04", age: 4 },
      { due: "2022-01-05", age: 5 },
    ]);
  });
});

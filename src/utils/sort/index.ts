import { deepClone } from "../deepclone";

export function sortChain<T extends { [key: string]: any }>(
  sort: Array<{
    type: string;
    order: number;
    fn: ((v: any) => number) | undefined;
  }>,
  list: Array<T>,
) {
  let result = deepClone(list);
  sort.forEach((el) => {
    result =
      el.order === 0
        ? [...result].sort((a, b) => {
            if (el.fn) {
              return el.fn(a[el.type]) - el.fn(b[el.type]);
            }
            return a[el.type] - b[el.type];
          })
        : [...result].sort((a, b) => {
            if (el.fn) {
              return el.fn(b[el.type]) - el.fn(a[el.type]);
            }
            return b[el.type] - a[el.type];
          });
  });
  return result;
}

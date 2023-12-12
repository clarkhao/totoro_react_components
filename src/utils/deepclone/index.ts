export function deepclone(obj: any) {
  if (typeof obj !== "object" || obj === null) return obj;
  const result: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepclone(obj[key]);
    }
  }
  return result;
}

//another simple one
//JSON.parse(JSON.stringify(obj))

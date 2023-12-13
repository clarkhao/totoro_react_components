export function deepClone<T>(obj: T): T {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const result = obj.map((item) => deepClone(item));
    return result as T;
  }

  const result: Partial<T> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result as T;
}

//another simple one
//JSON.parse(JSON.stringify(obj))

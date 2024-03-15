import { TAuthState } from "../../store/slices/auth";
import { getInitStorage, mergeStorage } from "../../utils";

const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, "sessionStorage", {
  value: localStorageMock,
});

describe("read from storage and extract the value by key needed", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
  });
  it("read auth from storage and return the picked keys", () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");
    window.sessionStorage.setItem(
      "auth",
      JSON.stringify({
        signup: { email: "clarktotoro@163.com", step: 1 },
      }),
    );
    const picked = getInitStorage<TAuthState, "signup">("auth", ["signup"]);
    expect(picked).toEqual({
      signup: { email: "clarktotoro@163.com", step: 1 },
    });
    expect(getItemSpy).toBeCalledWith("auth");
  });
  it("init state merge with storage state with selected keys", () => {
    window.sessionStorage.setItem(
      "auth",
      JSON.stringify({
        fields: { type: "password" },
        signup: { email: "clarktotoro@163.com", step: 1 },
      }),
    );
    const init: TAuthState = {
      fields: { type: "password" },
      signup: { email: "", step: 0 },
    };
    const merged = mergeStorage<TAuthState, "signup">("auth", ["signup"], init);
    expect(merged).toEqual({
      fields: { type: "password" },
      signup: { email: "clarktotoro@163.com", step: 1 },
    });
  });
});

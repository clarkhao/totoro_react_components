import { logger } from "../../utils";

describe("test console", () => {
  it("test console.log", () => {
    const spy = jest.spyOn(logger, "log");
    logger.log("hello");
    expect(spy).toBeCalled();
  });
});

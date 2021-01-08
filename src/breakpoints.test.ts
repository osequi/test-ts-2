import { getBreakpointValue } from "./breakpoints";

it("Loads the breakpoint value.", () => {
  expect(getBreakpointValue("mobile")).toBe(320);
});

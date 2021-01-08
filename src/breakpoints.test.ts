import { getBreakpointValue, getMediaQueryForBreakpoint } from "./breakpoints";

it("Reaturns the media query for a breakpoint.", () => {
  expect(getMediaQueryForBreakpoint("mobile")).toBe("@media(min-width: 320px)");
});

it("Returns the breakpoint value.", () => {
  expect(getBreakpointValue("mobile")).toBe(320);
});

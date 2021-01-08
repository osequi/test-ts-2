export type TBreakpointNames = "mobile" | "tablet" | "laptop" | "desktop";

export interface TBreakpoint {
  name: TBreakpointNames;
  value: number;
}

export const breakpoints: TBreakpoint[] = [
  { name: "mobile", value: 320 },
  { name: "tablet", value: 768 },
  { name: "laptop", value: 1280 },
  { name: "desktop", value: 1600 },
];

export function getBreakpointValue(name: TBreakpointNames): number | undefined {
  const breakpoint = breakpoints.find((item) => item.name === name);
  return breakpoint?.value || undefined;
}

export function getMediaQueryForBreakpoint(
  name: TBreakpointNames
): string | undefined {
  const value = getBreakpointValue(name);
  return value ? `@media(min-width: ${value}px)` : undefined;
}

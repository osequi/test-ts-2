import { getBreakpoint } from "../src/breakpoints";

export default function Home() {
  return <>{getBreakpoint("mobile")}</>;
}

# test-ts-2

Typescript styleguide inspired by Deno.

See:

- https://deno.land/manual@v1.6.3/contributing/style_guide
- https://github.com/microsoft/TypeScript/wiki/Performance

## Prefer interfaces

- https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections
- to avoid `never` on intersections as is in case of `type`

## Use type for enums

```ts
export type TBreakpointNames = "mobile" | "tablet" | "laptop" | "desktop";

export interface TBreakpoint {
  name: TBreakpointNames;
  value: number;
}
```

## Exported functions (API): max 2 args, put the rest into an options object.

- https://deno.land/manual@v1.6.3/contributing/style_guide#exported-functions-max-2-args-put-the-rest-into-an-options-object

## Don't use the arrow syntax

- https://deno.land/manual@v1.6.3/contributing/style_guide#top-level-functions-should-not-use-arrow-syntax

## Use underscores, not dashes in filenames

- https://deno.land/manual@v1.6.3/contributing/style_guide#use-underscores-not-dashes-in-filenames

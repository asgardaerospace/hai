/** Tiny classnames helper — joins truthy values with spaces. */
export function cn(
  ...classes: Array<string | number | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

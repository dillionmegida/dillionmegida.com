export const pluralize = (str: string, count: number) =>
  str + (count === 1 ? "" : "s")

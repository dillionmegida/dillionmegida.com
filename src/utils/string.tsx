export const pluralize = (str: string, count: number) =>
  str + (count === 1 ? "" : "s")

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

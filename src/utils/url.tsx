export const changeWithoutReloading = (
  stateObject: any,
  title: string,
  url: string
) => {
  history.pushState(stateObject, title, url)
}

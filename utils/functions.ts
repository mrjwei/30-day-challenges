export const calcInitNumNavItemsToDisplay = (asPath: string) => {
  if (asPath === "/" || asPath === "/top" || parseInt(asPath.replace("/day", "")) < 6) {
    return 6
  }
  return parseInt(asPath.replace("/day", "")) + 1
}

export const normalizeNavItemText = (id: string, title: string) => {
  if (id === "top") {
    return "Top"
  }
  return `${id.replace("d", "D")}: ${title}`
}

export const isActiveLink = (queryId: string | string[] | undefined, id: string) => {
  if (queryId === id || (queryId === undefined && id === "top")) {
    return true
  }
  return false
}


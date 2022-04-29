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

export const isActiveLink = (query: {id: string | undefined}, id: string) => {
  if (query.id === id || (query.id === undefined && id === "top")) {
    return true
  }
  return false
}


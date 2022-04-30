import {IMeta} from '../types'

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

export const getPrevIdAndTitle = (
  metas: IMeta[],
  activeId: string
  ) => {
  const currentIndex = metas.findIndex(meta => meta.id === activeId)
  if (currentIndex === 0) {
    return [null, null]
  }
  const prevId = metas[currentIndex - 1].id
  const prevTitle = metas[currentIndex - 1].title

  return [prevId, prevTitle]
}


export const getNextIdAndTitle = (
  metas: IMeta[],
  activeId: string
) => {
  const currentIndex = metas.findIndex(meta => meta.id === activeId)
  if (currentIndex === metas.length - 1) {
    return [null, null]
  }
  const nextId = metas[currentIndex + 1].id
  const nextTitle = metas[currentIndex + 1].title

  return [nextId, nextTitle]
}




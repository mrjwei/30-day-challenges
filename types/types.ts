export interface IMarkdownData {
  id: string
  title: string
}

export interface IGroupData {
  dir: string
  markdowns: IMarkdownData[]
}

export interface IParams {
  params: {
    id: string
  }
}
export interface ICategoryData {
  title: string
  items: Array<string> | [] | null
}

export interface ICategoryStructureProps {
  data: Array<ICategoryData>
}

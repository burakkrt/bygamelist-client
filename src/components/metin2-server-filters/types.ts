export type IServerTypes =
  | '1-99 Level'
  | '1-105 Level'
  | '1-120 Level'
  | '55-120 Level'
  | '55-250 Level'

export type IDateSort = 'asc' | 'desc'

export interface IMetin2ServerFilters {
  search: string
  serverTypes: Array<IServerTypes>
  dateSort: IDateSort
  autoHunt: boolean
  legalSale: boolean
}

export interface IMetin2ServerFiltersProps {}

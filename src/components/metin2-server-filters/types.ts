export type IServerTypes =
  | '1-99 Level'
  | '1-105 Level'
  | '1-120 Level'
  | '55-120 Level'
  | '55-250 Level'

export interface IMetin2ServerFilters {
  search: string
  serverTypes: Array<IServerTypes>
}

export interface IMetin2ServerFiltersProps {
  filters: IMetin2ServerFilters
  setFilters: React.Dispatch<React.SetStateAction<IMetin2ServerFilters>>
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  initialValue: IMetin2ServerFilters
}

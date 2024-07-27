export interface IMetin2ServerFilters {
  search: string
}

export interface IMetin2ServerFilterSidebarProps {
  filters: IMetin2ServerFilters
  setFilters: React.Dispatch<React.SetStateAction<IMetin2ServerFilters>>
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

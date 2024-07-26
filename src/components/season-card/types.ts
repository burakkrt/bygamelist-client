export interface ISeasonOption {
  text: string
  isActive?: boolean
}

export interface ISeasonCardProps {
  title: string
  seasonOptions: Array<ISeasonOption>
  activeSeason?: boolean
}

export interface IMetin2CardCountdownProps {
  openingDate: string
  onStatusChange: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ITimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

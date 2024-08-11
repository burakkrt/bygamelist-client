export interface IMetin2ServerCardProps {
  id: string
  name: string
  subName: string
  level: string
  openingDate: string
  autoHunt: boolean
  dropClient: number
  legalSale: boolean
  team: { owners: Array<string> }
}

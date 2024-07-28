import { ICategoryData } from '@/components/category-structure/types'
import { ITeamStructureMapping } from './types'

const teamStructureMapping = (data: ITeamStructureMapping): Array<ICategoryData> => {
  const tagSetter = (
    tag: string,
    values: ICategoryData['items'] | null | undefined
  ): ICategoryData['items'] | [] | null => {
    if (values && values.length > 0) {
      return values.map((value) => `${tag} ${value}`)
    }
    return []
  }

  if (Object.entries(data).length > 0) {
    return Object.entries(data).reduce<Array<ICategoryData>>((acc, [key, value]) => {
      switch (key) {
        case 'owners':
          acc.push({ title: 'Sunucu Sahibi', items: value })
          break
        case 'comas':
          acc.push({ title: 'Community Manager', items: tagSetter('[COMA]', value) })
          break
        case 'teamLeaders':
          acc.push({ title: 'Team Leader', items: tagSetter('[TL]', value) })
          break
        case 'gameAdmins':
          acc.push({ title: 'Game Admin', items: tagSetter('[GA]', value) })
          break
        case 'gameMasters':
          acc.push({ title: 'Game Master', items: tagSetter('[GM]', value) })
          break
        default:
          break
      }

      return acc
    }, [])
  }
  return []
}

export default teamStructureMapping

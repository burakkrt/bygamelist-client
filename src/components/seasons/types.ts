import { IAnchorProps } from '../base/anchor/types'
import { IImageProps } from '../base/image/types'
import { ISeasonCardProps } from '../season-card/types'

export interface ISeasonsProps {
  title?: string
  description?: string
  anchor?: IAnchorProps
  image?: IImageProps
  seasons?: Array<ISeasonCardProps>
}

export type IconTypes =
  | 'icon-search'
  | 'icon-sword'
  | 'icon-twitch'
  | 'icon-sun'
  | 'icon-moon'

export interface IIconProps extends React.HTMLProps<HTMLElement> {
  name: IconTypes
  className?: string
}

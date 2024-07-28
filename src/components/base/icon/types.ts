export type IconTypes =
  | 'icon-search'
  | 'icon-sword'
  | 'icon-twitch'
  | 'icon-sun'
  | 'icon-moon'
  | 'icon-checkmark'
  | 'icon-close'
  | 'icon-chevron-up'
  | 'icon-chevron-down'
  | 'icon-chevron-left'
  | 'icon-chevron-right'

export interface IIconProps extends React.HTMLProps<HTMLElement> {
  name: IconTypes
  className?: string
}

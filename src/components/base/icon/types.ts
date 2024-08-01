export type IconTypes =
  | 'icon-search'
  | 'icon-checkmark'
  | 'icon-clear'
  | 'icon-chevron-up'
  | 'icon-chevron-down'
  | 'icon-chevron-left'
  | 'icon-chevron-right'
  | 'icon-send'

export interface IIconProps extends React.HTMLProps<HTMLElement> {
  name: IconTypes
  className?: string
}

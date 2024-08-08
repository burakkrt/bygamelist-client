export type INavgationLocations = 'header' | 'panel' | 'footer'
export type INavgationPages = 'mainPages' | 'otherPages'

export interface IPageOptions {
  label: string
  href: string
  locations: Array<INavgationLocations>
}

export type INavigationMap = Record<INavgationPages, Array<IPageOptions>>

export interface INavigationPagesProps {
  location: INavgationLocations
  pageType: INavgationPages
  className?: string
}

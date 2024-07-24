import { HTMLAttributeAnchorTarget } from 'react'
import { UrlObject } from 'url'

export interface IAnchorProps {
  children: React.ReactNode
  href: string | UrlObject
  className?: string
  target?: HTMLAttributeAnchorTarget | undefined
  replace?: boolean
  scroll?: boolean
}

export interface IAnchorOptions extends IAnchorProps {}

import React from 'react'
import classNames from 'classnames'
import Anchor from '@/components/base/anchor'
import { INavigationMap, INavigationPagesProps } from './types'

function NavigationPages({ pageType, location, className }: INavigationPagesProps) {
  const navigationMap: INavigationMap = {
    mainPages: [
      {
        label: 'Anasayfa',
        href: '/',
        locations: ['header'],
      },
      {
        label: 'Metin2 PVP Serverleri',
        href: '/',
        locations: ['header', 'panel', 'footer'],
      },
      {
        label: 'Metin2 Yayıncıları',
        href: '/',
        locations: ['header', 'panel', 'footer'],
      },
    ],
    otherPages: [
      {
        label: 'Anasayfa',
        href: '/',
        locations: ['header'],
      },
      {
        label: 'Metin2 PVP Serverleri',
        href: '/',
        locations: ['panel'],
      },
      {
        label: 'Metin2 Yayıncıları',
        href: '/',
        locations: ['panel'],
      },
    ],
  }

  const targetPages = navigationMap[pageType]?.filter((pages) =>
    pages.locations.includes(location)
  )

  if (targetPages && targetPages.length > 0) {
    return (
      <nav
        className={classNames(
          'nav-pages',
          `nav-${pageType}`,
          `nav-${location}`,
          className
        )}
      >
        <ul>
          {targetPages.map((pages) => (
            <li key={pages.label}>
              <Anchor href={pages.href} className="nav-anchor">
                {pages.label}
              </Anchor>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return null
}

export default NavigationPages

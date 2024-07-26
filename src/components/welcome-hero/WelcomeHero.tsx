import React from 'react'
import Image from '@/components/base/image'
import Seasons from '@/components/seasons'
import { IWelcomeHeroProps } from './types'
import { ISeasonsProps } from '../seasons/types'

function WelcomeHero({}: IWelcomeHeroProps) {
  const seasonsValues: ISeasonsProps = {
    title: 'a look into roadmaps seasons',
    anchor: { href: 'https://google.com', children: 'Read More' },
    image: { src: 'https://picsum.photos/900/500', alt: 'Seasons Image' },
    description:
      'With Season 1 Ending with our play and Duis elementum sollicitudin is yaugue euismods Nulla ulla Player-focused updates games from Mobile App and Enjoy. With Season 1 Ending with our play and Duis elementum sollicitudin is yaugue euismods Nulla ulla Player-focused updates games from Mobile App and Enjoy.',
    seasons: [
      {
        title: 'version 1',
        activeSeason: true,
        seasonOptions: [
          {
            text: 'Battle Practice Mode',
            isActive: true,
          },
          {
            text: 'iOS Open Beta',
            isActive: true,
          },
          {
            text: 'Land Creation & Building',
          },
        ],
      },
      {
        title: 'version 2',
        activeSeason: true,
        seasonOptions: [
          {
            text: 'Battle Practice Mode',
          },
          {
            text: 'iOS Open Beta',
          },
          {
            text: 'Land Creation & Building',
          },
        ],
      },
    ],
  }

  return (
    <div className="welcome-hero">
      <Image
        className="welcome-bg-image"
        src="/images/welcome-bg.jpg"
        alt="ByGameList Welcome Hero"
        priority
        objectFit="cover"
      />
      <Seasons {...seasonsValues} />
      <div className="bottom-polygons" />
    </div>
  )
}

export default WelcomeHero

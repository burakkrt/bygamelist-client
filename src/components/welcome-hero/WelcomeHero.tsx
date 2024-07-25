import React from 'react'
import { IWelcomeHeroProps } from './types'
import Image from '../base/image'

function WelcomeHero({}: IWelcomeHeroProps) {
  return (
    <div className="welcome-hero">
      <Image
        className="welcome-bg-image"
        src="/images/welcome-bg.jpg"
        alt="ByGameList Welcome Hero"
        priority
        objectFit="cover"
      />
      <div className="bottom-polygons" />
    </div>
  )
}

export default WelcomeHero

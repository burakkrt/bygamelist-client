import React from 'react'
import Metin2ServerList from '@/components/metin2-server-list'
import { IWelcomeHeroProps } from './types'

function WelcomeHero({}: IWelcomeHeroProps) {
  return (
    <div className="welcome-hero">
      <Metin2ServerList />
    </div>
  )
}

export default WelcomeHero

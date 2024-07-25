import React from 'react'
import Container from '@/components/base/container'
import Metin2ServerCard from '@/components/metin2-server-card'
import SectionTitle from '@/components/section-title'
import { IMetin2ServerListProps } from './types'

function Metin2ServerList({}: IMetin2ServerListProps) {
  return (
    <div className="metin2-server-list">
      <Container size="extended">
        <SectionTitle
          title="Pvp Sunucular"
          subtitle="Metin2"
          description="En kaliteli pvp sunucuları en ince detaylarına kadar tek platformdan inceleyin."
        />
        <div className="servers">
          <Metin2ServerCard />
          <Metin2ServerCard />
          <Metin2ServerCard />
          <Metin2ServerCard />
          <Metin2ServerCard />
          <Metin2ServerCard />
        </div>
      </Container>
    </div>
  )
}

export default Metin2ServerList

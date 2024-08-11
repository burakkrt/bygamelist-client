import React from 'react'
import Container from '@/components/base/container'
import Metin2ServerFilters from '@/components/metin2-server-filters'
import Metin2ServerCard from '@/components/metin2-server-card'
import { IMetin2ServerListProps } from './types'

function Metin2ServerList({}: IMetin2ServerListProps) {
  return (
    <div className="metin2-server-list">
      <Container size="extended">
        <div className="metin2-server-list-in">
          <div className="banner banner-left" />
          <div className="servers">
            <Metin2ServerFilters />
            <div className="servers-list">
              <Metin2ServerCard />
              <Metin2ServerCard />
              <Metin2ServerCard />
              <Metin2ServerCard />
              <Metin2ServerCard isOpen />
              <Metin2ServerCard isOpen />
              <Metin2ServerCard isOpen />
              <Metin2ServerCard isOpen />
              <Metin2ServerCard isOpen />
              <Metin2ServerCard isOpen />
              <Metin2ServerCard isOpen />
            </div>
          </div>
          <div className="banner banner-right" />
        </div>
      </Container>
    </div>
  )
}

export default Metin2ServerList

import React from 'react'
import Container from '@/components/base/container'
import { IMetin2ServerListProps } from './types'
import Metin2ServerCard from '../metin2-server-card'

function Metin2ServerList({}: IMetin2ServerListProps) {
  return (
    <Container size="extended">
      <div className="metin2-server-list">
        <div className="servers">
          <Metin2ServerCard />
          <Metin2ServerCard />
          <Metin2ServerCard />
          <Metin2ServerCard />
          <Metin2ServerCard />
          <Metin2ServerCard />
        </div>
      </div>
    </Container>
  )
}

export default Metin2ServerList

import React from 'react'
import Container from '@/components/base/container'
import Metin2ServerFilters from '@/components/metin2-server-filters'
import Metin2ServerCard from '@/components/metin2-server-card'
import MockData from '../../../mock-data-servers-.json'
import { IMetin2ServerListProps } from './types'

function Metin2ServerList({}: IMetin2ServerListProps) {
  const sortedServers = MockData.data.sort(
    (a: any, b: any) =>
      new Date(b.openingDate).getTime() - new Date(a.openingDate).getTime()
  )

  return (
    <div className="metin2-server-list">
      <Container size="extended">
        <div className="metin2-server-list-in">
          <div className="banner banner-left" />
          <div className="servers">
            <Metin2ServerFilters />
            <div className="servers-list">
              {sortedServers.map((server: any, index: number) => (
                <Metin2ServerCard {...server} key={`${server.id.slice(0, 5) + index}`} />
              ))}
            </div>
          </div>
          <div className="banner banner-right" />
        </div>
      </Container>
    </div>
  )
}

export default Metin2ServerList

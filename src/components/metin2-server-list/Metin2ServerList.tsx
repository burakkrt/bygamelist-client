import React from 'react'
import Container from '@/components/base/container'
import Metin2ServerFilters from '@/components/metin2-server-filters'
import Icon from '@/components/base/icon'
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
              <div className="metin2-server-card">
                <p>lorem</p>
              </div>
            </div>
          </div>
          <div className="banner banner-right" />
        </div>
      </Container>
    </div>
  )
}

export default Metin2ServerList

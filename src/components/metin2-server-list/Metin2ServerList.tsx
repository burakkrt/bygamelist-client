import React from 'react'
import Container from '@/components/base/container'
import Metin2ServerFilters from '@/components/metin2-server-filters'
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a culpa
                corporis, tempore maxime itaque modi qui ipsum aliquid consectetur eum
                veniam quo earum fugit tenetur eveniet deserunt minima expedita?
              </p>
            </div>
          </div>
          <div className="banner banner-right" />
        </div>
      </Container>
    </div>
  )
}

export default Metin2ServerList

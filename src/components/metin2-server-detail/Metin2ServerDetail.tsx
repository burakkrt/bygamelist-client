import React from 'react'
import teamStructureMapping from '@/mappers/teamStructureMapping'
import Container from '../base/container'
import data from '../../../mock-data.json'
import CategoryStructure from '../category-structure'
import { IMetin2ServerDetailProps } from './types'

function Metin2ServerDetail({}: IMetin2ServerDetailProps) {
  console.log(data)

  return (
    <div className="metin2-server-detail">
      <Container size="extended">
        <div className="metin2-server-detail-in">
          <div className="server-detail-start">
            <h1 className="server-name">{data.name}</h1>
          </div>
          <div className="server-detail-middle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus vel,
            delectus sed dignissimos molestias sit aperiam quos beatae. Omnis perspiciatis
            fugit iste, atque veritatis molestiae voluptas fugiat incidunt aut.
          </div>
          <div className="server-detail-end">
            <div className="server-teams">
              <CategoryStructure data={teamStructureMapping(data.team)} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Metin2ServerDetail

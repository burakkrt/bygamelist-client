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
            {data?.name && <h1 className="server-name">{data.name}</h1>}
            {data?.level && <span className="server-level">{data.level}</span>}
            {data?.level && <span className="server-type">{data.type}</span>}
            <div className="detail-section">
              <h3 className="detail-section-title">Açılış tarihi</h3>
              <span className="detail-section-description">28 Temmuz 2024 Cuma </span>
            </div>
            <div className="detail-section">
              <h3 className="detail-section-title">Temel Özellikler</h3>
              <span className="detail-section-description multi-col">
                <span>Oto Av</span>
                <span className="option-y">Evet</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Oto Boss</span>
                <span className="option-n">Hayır</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Legal Satış</span>
                <span className="option-y">Evet</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Drop</span>
                <span>1 Client</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Battlepass</span>
                <span className="option-y">Evet</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Kule Farmı</span>
                <span className="option-y">Evet</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Simya</span>
                <span className="option-n">Hayır</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Efsunlar</span>
                <span>PVM, Farm Hasar</span>
              </span>
            </div>
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

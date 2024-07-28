import React from 'react'
import teamStructureMapping from '@/mappers/teamStructureMapping'
import Container from '../base/container'
import data from '../../../mock-data.json'
import CategoryStructure from '../category-structure'
import { IMetin2ServerDetailProps } from './types'
import Icon from '../base/icon'

function Metin2ServerDetail({}: IMetin2ServerDetailProps) {
  console.log(data)

  return (
    <div className="metin2-server-detail">
      <Container size="extended">
        <div className="metin2-server-detail-in">
          <div className="server-detail-start">
            {data?.name && <h1 className="server-name">{data.name}</h1>}
            {data?.subName && <h2 className="server-subname">{data.subName}</h2>}
            <span className="name-hr" />
            {data?.level && <span className="server-level">{data.level}</span>}
            {data?.type && <span className="server-type">{data.type}</span>}
            <div className="detail-section">
              <h3 className="detail-section-title">
                <Icon name="icon-chevron-right" />
                Açılış tarihi
              </h3>
              <span className="detail-section-description">26 Temmuz 2024 - 21:00</span>
            </div>
            <div className="detail-section">
              <h3 className="detail-section-title">
                <Icon name="icon-chevron-right" />
                Temel Özellikler
              </h3>
              <span className="detail-section-description multi-col">
                <span>Oto Av</span>
                <span className="option-y">Evet</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Yayıncı Sayısı</span>
                <span>+32</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Drop</span>
                <span>1 Client</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Legal Satış</span>
                <span className="option-y">Evet</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Kule Farmı</span>
                <span className="option-y">Evet</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Oto Boss</span>
                <span className="option-n">Hayır</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Battlepass</span>
                <span className="option-y">Evet</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Simya</span>
                <span className="option-n">Hayır</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>PVM Hasar Nesnesi</span>
                <span className="option-y">Evet</span>
              </span>
              <span className="detail-section-description multi-col">
                <span>Farm Hasar Nesnesi</span>
                <span className="option-y">Evet</span>
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

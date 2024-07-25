import React from 'react'
import ServerCardBackgroundSvg from '@/components/server-card-background-svg'
import { IMetin2ServerCardProps } from './types'

function Metin2ServerCard({}: IMetin2ServerCardProps) {
  return (
    <div className="metin2-server-card">
      <ServerCardBackgroundSvg status />
      <div className="card-content">
        <div className="level-status">
          <span className="level">1-105</span>
          <span className="type">Orta Emek</span>
        </div>
        <div className="section-info">
          <span className="subtitle">Sunucu Adı</span>
          <span className="text">ALİSTA2</span>
        </div>
        <div className="section-info">
          <span className="subtitle">Oto Av</span>
          <span className="text">Evet</span>
        </div>
        <div className="section-info">
          <span className="subtitle">Drop</span>
          <span className="text">3 Client</span>
        </div>
        <div className="section-info">
          <span className="subtitle">Legal Satış</span>
          <span className="text">Serbest</span>
        </div>

        <div className="section-info">
          <span className="subtitle">Açılış</span>
          <span className="text">3 gün 2 saat 29 dakika</span>
        </div>
      </div>
    </div>
  )
}

export default Metin2ServerCard

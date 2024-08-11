import React from 'react'
import classNames from 'classnames'
import Icon from '@/components/base/icon'
import { IMetin2ServerCardProps } from './types'

function Metin2ServerCard({ isOpen = false }: IMetin2ServerCardProps) {
  return (
    <div className={classNames('metin2-server-card', isOpen && 'opened')}>
      <div className="category level">
        <span className="title">Level</span>
        <div className="content">
          <span className="text">1 - 105</span>
        </div>
      </div>
      <div className="category sever-name">
        <span className="title">Sunucu İsmi</span>
        <div className="content">
          <span className="text">Start2 Alesta</span>
        </div>
      </div>
      <div className="category owner">
        <span className="title">Sunucu Sahibi</span>
        <div className="content">
          <span className="text">Cixcocuk76</span>
        </div>
      </div>
      <div className="category drop">
        <span className="title">Drop</span>
        <div className="content">
          <span className="text">3 Client</span>
        </div>
      </div>
      <div className="category auto-hunt">
        <span className="title">Oto Av</span>
        <div className="content">
          <Icon name="icon-sword" />
        </div>
      </div>
      <div className="category legal-sell">
        <span className="title">Legal Satış</span>
        <div className="content">
          <Icon name="icon-sell" />
        </div>
      </div>
      <div className="category date">
        <span className="title">12 Ağustos 2024</span>
        <div className="content">
          <span className="text">1 Gün 14 Saat 37 Dakika</span>
        </div>
      </div>
    </div>
  )
}

export default Metin2ServerCard

import React, { useState } from 'react'
import classNames from 'classnames'
import Icon from '@/components/base/icon'
import Metin2CardCountdown from '@/components/metin2-card-countdown'
import { IMetin2ServerCardProps } from './types'

function Metin2ServerCard({
  name,
  subName,
  team,
  autoHunt,
  dropClient,
  legalSale,
  level,
  openingDate,
}: IMetin2ServerCardProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  return (
    <div className={classNames('metin2-server-card', isOpened && 'opened')}>
      <div className="category level">
        <span className="title">Level</span>
        <div className="content">
          <span className="text">{level}</span>
        </div>
      </div>
      <div className="category server-name">
        <span className="title">Sunucu İsmi</span>
        <div className="content">
          <span className="text">{name}</span>
          {subName && <span className="text">{subName}</span>}
        </div>
      </div>
      <div className="category owner">
        <span className="title">Sunucu Sahibi</span>
        <div className="content">
          {team.owners.map((owner) => (
            <span className="text" key={owner}>
              {owner}
            </span>
          ))}
        </div>
      </div>
      <div className="category drop">
        <span className="title">Drop</span>
        <div className="content">
          <span className="text">{dropClient} Client</span>
        </div>
      </div>
      <div className={classNames('category auto-hunt', autoHunt && 'active')}>
        <span className="title">Oto Av</span>
        <div className="content">
          <Icon name="icon-sword" />
        </div>
      </div>
      <div className={classNames('category legal-sale', legalSale && 'active')}>
        <span className="title">Legal Satış</span>
        <div className="content">
          <Icon name="icon-sell" />
        </div>
      </div>
      <div className="category date">
        <div className="content">
          <Metin2CardCountdown openingDate={openingDate} onStatusChange={setIsOpened} />
        </div>
      </div>
    </div>
  )
}

export default Metin2ServerCard

import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/tr'
import { IMetin2CardCountdownProps } from './types'

function Metin2CardCountdown({ openingDate }: IMetin2CardCountdownProps) {
  moment.locale('tr')
  const targetDate = moment.utc(openingDate).local(true)

  const [isOpen, setIsOpen] = useState<boolean>(moment().isAfter(targetDate))

  console.log(targetDate.format('YYYY-MM-DD HH:mm:ss'))

  if (!isOpen) {
    ;<div className="metin2-card-countdown">
      <div className="is-opened">
        <span className="category-title">Açılış Tarihi</span>
        <span className="diff-time">
          {moment(openingDate, 'YYYYMMDD HH:mm:').fromNow()}
        </span>
        <span className="opening-time">{targetDate.format('D MMMM YYYY')}</span>
      </div>
    </div>
  }

  return (
    <div className="metin2-card-countdown">
      <div className="is-opened">
        <span className="category-title">Açılış Tarihi</span>
        <span className="diff-time">
          {moment(openingDate, 'YYYYMMDD HH:mm:').fromNow()}
        </span>
        <span className="opening-time">{targetDate.format('D MMMM YYYY')}</span>
      </div>
    </div>
  )
}

export default Metin2CardCountdown

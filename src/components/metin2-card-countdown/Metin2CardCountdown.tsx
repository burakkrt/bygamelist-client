import React, { useEffect, useState } from 'react'
import moment, { Moment } from 'moment'
import 'moment/locale/tr'

import { IMetin2CardCountdownProps, ITimeLeft } from './types'

const calculateTimeLeft = (targetDate: Moment, currentDateTime: Moment) => {
  const duration = moment.duration(targetDate.diff(currentDateTime))

  return {
    days: Math.floor(duration.asDays()),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  }
}

function Metin2CardCountdown({ openingDate }: IMetin2CardCountdownProps) {
  moment.locale('tr')
  const targetDate = moment.utc(openingDate).local(true)
  const [currentDateTime, setCurrentDateTime] = useState<Moment>(moment())
  const [isOpen, setIsOpen] = useState<boolean>(
    moment(currentDateTime).isAfter(targetDate)
  )
  const [timeLeft, setTimeLeft] = useState<ITimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(moment())
    }

    const timer = setInterval(updateDateTime, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setIsOpen(moment(currentDateTime).isAfter(targetDate))
    }
  }, [currentDateTime, targetDate, isOpen])

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(calculateTimeLeft(targetDate, currentDateTime))
    }
  }, [currentDateTime])

  useEffect(() => {
    console.log(timeLeft)
  }, [timeLeft])

  // console.log(targetDate.format('YYYY-MM-DD HH:mm:ss'))

  if (!isOpen) {
    return (
      <div className="metin2-card-countdown">
        <div className="is-close">
          <span className="opening-time">{targetDate.format('D MMMM YYYY HH:mm')}</span>
          <div className="countdown">
            <div className="time-box">
              <span className="time">{timeLeft.days}</span>
              <span className="text">Gün</span>
            </div>
            <div className="time-box">
              <span className="time">{timeLeft.hours}</span>
              <span className="text">Saat</span>
            </div>
            <div className="time-box">
              <span className="time">{timeLeft.minutes}</span>
              <span className="text">Dakika</span>
            </div>
            <div className="time-box">
              <span className="time">{timeLeft.seconds}</span>
              <span className="text">Saniye</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="metin2-card-countdown">
      <div className="is-opened">
        <span className="category-title">Açılış Tarihi</span>
        <span className="diff-time">
          {moment(targetDate, 'YYYYMMDD HH:mm').fromNow()}
        </span>
        <span className="opening-time">{targetDate.format('D MMMM YYYY')}</span>
      </div>
    </div>
  )
}

export default Metin2CardCountdown

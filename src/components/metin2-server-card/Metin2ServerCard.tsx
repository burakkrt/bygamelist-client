import React from 'react'
import classNames from 'classnames'
import { IMetin2ServerCardProps } from './types'

function Metin2ServerCard({ isOpen = false }: IMetin2ServerCardProps) {
  return (
    <div className={classNames('metin2-server-card', isOpen && 'opened')}>
      <p>lorem</p>
    </div>
  )
}

export default Metin2ServerCard

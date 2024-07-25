import React from 'react'
import classNames from 'classnames'
import { ISectionTitleProps } from './types'

function SectionTitle({
  title,
  description,
  subtitle,
  align = 'center',
  className,
}: ISectionTitleProps) {
  return (
    <div className={classNames('section-title', align, className)}>
      {subtitle && <span className="subtitle">{subtitle}</span>}
      {title && <h2 className="title">{title}</h2>}
      {description && <h2 className="description">{description}</h2>}
    </div>
  )
}

export default SectionTitle

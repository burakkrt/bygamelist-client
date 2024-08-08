import React from 'react'
import classNames from 'classnames'
import Icon from '@/components/base/icon'
import { IPanelBoxProps } from './types'

function PanelBox({
  children,
  className,
  title,
  titleIcon = 'icon-chevron-right',
}: IPanelBoxProps) {
  return (
    <div className={classNames('panel-box', className)}>
      {title && (
        <div className="panel-box-header">
          <Icon name={titleIcon} className="title-icon" />
          <span className="title-text">{title}</span>
        </div>
      )}
      <div className="panel-box-body">{children}</div>
    </div>
  )
}

export default PanelBox

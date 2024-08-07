import React from 'react'
import classNames from 'classnames'
import Image from '@/components/base/image'
import Icon from '@/components/base/icon/'
import { IHeaderPanelProps } from './types'

function HeaderPanel({ isPanel, setIsPanel }: IHeaderPanelProps) {
  const hanleClosePanel = () => {
    if (setIsPanel) {
      setIsPanel(false)
    }
  }

  return (
    <div className={classNames('header-panel', isPanel && 'panel-open')}>
      <div className="panel-header">
        <div className="logo">
          <Image src="/images/site/bygamelist-logo.png" alt="ByGameList logo" />
        </div>
        <button type="button" className="close-panel-btn" onClick={hanleClosePanel}>
          <Icon name="icon-close" className="close" />
        </button>
      </div>
    </div>
  )
}

export default HeaderPanel

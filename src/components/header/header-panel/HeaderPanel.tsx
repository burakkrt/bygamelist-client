import React, { useEffect } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import Image from '@/components/base/image'
import Icon from '@/components/base/icon/'
import JoinDiscord from '@/components/join-discord'
import PanelBox from '@/components/panel-box'
import Anchor from '@/components/base/anchor'
import SocialMedia from '@/components/social-media'
import { IHeaderPanelProps } from './types'

function HeaderPanel({ isPanel, setIsPanel }: IHeaderPanelProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      if (isPanel) {
        setIsPanel(false)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, isPanel, setIsPanel])

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
      <div className="panel-body">
        <PanelBox title="Diğer Sayfalar">
          <nav>
            <ul className="other-pages-nav">
              <li>
                <Anchor className="nav-item" href="/">
                  <Icon name="icon-document" />
                  Hakkımızda
                </Anchor>
              </li>
              <li>
                <Anchor className="nav-item" href="/">
                  <Icon name="icon-document" />
                  Reklam ver
                </Anchor>
              </li>
              <li>
                <Anchor className="nav-item" href="/">
                  <Icon name="icon-document" />
                  İletişim
                </Anchor>
              </li>
            </ul>
          </nav>
        </PanelBox>
        <PanelBox title="Topluluğumuza katılın">
          <SocialMedia />
          <JoinDiscord />
        </PanelBox>
      </div>
    </div>
  )
}

export default HeaderPanel

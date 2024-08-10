import React, { useEffect } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import Image from '@/components/base/image'
import Icon from '@/components/base/icon/'
import JoinDiscord from '@/components/join-discord'
import PanelBox from '@/components/panel-box'
import SocialMedia from '@/components/social-media'
import NavigationPages from '@/components/navigation-pages'
import useBreakpoint from '@/hooks/useBreakpoint'
import { IHeaderPanelProps } from './types'

function HeaderPanel({ isPanel, setIsPanel }: IHeaderPanelProps) {
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      const bodyClassCheck = document.body.classList.contains('overflow-h')
      if (isPanel && window.innerWidth <= 480 && !bodyClassCheck) {
        document.body.classList.add('overflow-h')
      } else if (!isPanel || window.innerWidth > 480) {
        if (bodyClassCheck) {
          document.body.classList.remove('overflow-h')
        }
      }
    }

    const handleRouteChange = () => {
      if (isPanel) {
        setIsPanel(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      window.removeEventListener('resize', handleResize)
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
        <div className="logo-and-close">
          <div className="logo">
            <Image src="/images/site/bygamelist-logo.png" alt="ByGameList logo" />
          </div>
          <button type="button" className="close-panel-btn" onClick={hanleClosePanel}>
            <Icon name="icon-close" className="close" />
          </button>
        </div>
      </div>
      <div className="panel-body">
        {useBreakpoint('md') && (
          <PanelBox title="Sayfalar">
            <NavigationPages pageType="mainPages" location="panel" />
          </PanelBox>
        )}
        <PanelBox title="Diğer Sayfalar">
          <NavigationPages pageType="otherPages" location="panel" />
        </PanelBox>
      </div>
      <div className="panel-footer">
        <div className="socials">
          <SocialMedia />
          <JoinDiscord />
        </div>
      </div>
    </div>
  )
}

export default HeaderPanel

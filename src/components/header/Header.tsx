import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import debounce from '@/functions/debounce'
import Container from '@/components/base/container'
import Image from '@/components/base/image'
import Icon from '@/components/base/icon'
import HeaderPanel from '@/components/header/header-panel'
import NavigationPages from '@/components/navigation-pages'
import { IHeaderProps } from './types'

function Header({}: IHeaderProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isPanel, setIsPanel] = useState<boolean>(false)

  const hanleChancePanel = () => {
    setIsPanel(!isPanel)
  }

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY >= 170 && !isScrolled) {
        setIsScrolled(true)
      } else if (window.scrollY < 170 && isScrolled) {
        setIsScrolled(false)
      }
    }, 30)

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  return (
    <header>
      <div className={classNames('header', isScrolled && 'scrolled')}>
        <Container size="extended">
          <div className="header-in">
            <div className="logo">
              <Image
                src="/images/site/bygamelist-logo.png"
                alt="ByGamelist logo"
                priority
              />
            </div>
            <NavigationPages pageType="mainPages" location="header" />
            <div className="actions">
              <button type="button" className="menu-button" onClick={hanleChancePanel}>
                <Icon name="icon-menu-right" />
              </button>
            </div>
          </div>
        </Container>
      </div>
      <HeaderPanel isPanel={isPanel} setIsPanel={setIsPanel} />
      <button
        type="button"
        className={classNames('panel-overlay', isPanel && 'panel-overlay-show')}
        onClick={hanleChancePanel}
      />
    </header>
  )
}

export default Header

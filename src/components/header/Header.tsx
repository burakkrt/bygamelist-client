import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import debounce from '@/functions/debounce'
import Container from '@/components/base/container'
import Anchor from '@/components/base/anchor'
import Image from '@/components/base/image'
import Icon from '@/components/base/icon'
import { IHeaderProps } from './types'

function Header({}: IHeaderProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isPanel, setIsPanel] = useState<boolean>(false)

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
            <nav className="navigation">
              <ul>
                <li>
                  <Anchor href="/" className="nav-anchor">
                    Anasayfa
                  </Anchor>
                </li>
                <li>
                  <Anchor href="/" className="nav-anchor">
                    Metin2 PVP Serverleri
                  </Anchor>
                </li>
                <li>
                  <Anchor href="/" className="nav-anchor">
                    Metin2 Yayıncıları
                  </Anchor>
                </li>
              </ul>
            </nav>
            <div className="actions">
              <button type="button" className="menu-button">
                <Icon name="icon-menu-right" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header

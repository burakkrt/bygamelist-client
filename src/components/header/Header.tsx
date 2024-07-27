import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import debounce from '@/functions/debounce'
import { IHeaderProps } from './types'
import Container from '../base/container'
import Anchor from '../base/anchor'
import Icon from '../base/icon'
import Image from '../base/image'

function Header({}: IHeaderProps) {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const isStickyRef = useRef(isSticky)

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY >= 170 && !isStickyRef.current) {
        isStickyRef.current = true
        setIsSticky(true)
      } else if (window.scrollY < 170 && isStickyRef.current) {
        isStickyRef.current = false
        setIsSticky(false)
      }
    }, 50)

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={classNames(isSticky ? 'scrolled' : 'still')}>
      <Container size="extended">
        <div className="header-top">
          <ul>
            <li>
              <Anchor href="/">Anasayfa</Anchor>
            </li>
            <li>
              <Anchor href="/">Hakkımızda</Anchor>
            </li>
            <li>
              <Anchor href="/">İletişim</Anchor>
            </li>
          </ul>
        </div>
      </Container>
      <Container size="extended">
        <div className="header-navigation">
          <div className="header-navigation-logo">
            <Image src="/images/bygamelist-logo.png" alt="ByGamelist logo" priority />
          </div>
          <nav className="header-navigation-navigation">
            <ul>
              <li>
                <Anchor href="/servers" className="nav-anchor-item">
                  <Icon name="icon-sword" />
                  <span>Pvp Sunucuları</span>
                </Anchor>
              </li>
              <li>
                <Anchor href="/" className="nav-anchor-item">
                  <Icon name="icon-twitch" />
                  <span>Yayıncılar</span>
                </Anchor>
              </li>
            </ul>
          </nav>
          <div className="header-navigation-actions">{/* <ThemeSwitch /> */}</div>
        </div>
      </Container>
    </header>
  )
}

export default Header

import React from 'react'
import Container from '@/components/base/container'
import Image from '@/components/base/image'
import Anchor from '@/components/base/anchor'
import Icon from '@/components/base/icon'
import JoinDiscord from '@/components/join-discord'
import SocialMedia from '@/components/social-media'
import { IFooterProps } from './types'

function Footer({}: IFooterProps) {
  const hanleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer>
      <div className="footer">
        <Container size="fuild">
          <div className="footer-top">
            <Image
              objectFit="cover"
              src="/images/site/footer-bg.webp"
              alt="ByGameList footer image"
              className="footer-bg"
            />
            <span className="title">
              TOPLULUĞUMUZA KATILIN & ÇEKİLİŞLERDEN YARARLANIN
            </span>
            <span className="title-emo">🤙</span>
            <JoinDiscord />
            <SocialMedia />
          </div>
        </Container>
        <div className="footer-bottom">
          <Container size="extended">
            <div className="footer-bottom-in">
              <div className="logo">
                <Image
                  src="/images/site/bygamelist-logo.png"
                  alt="ByGameList logo"
                  className="bygamelist-logo"
                />
                <span className="copyright">Copyright © 2024 ByGameList</span>
              </div>
              <Icon
                name="icon-chevron-up"
                className="page-up-icon"
                onClick={hanleScrollToTop}
              />
              <div className="footer-navigations">
                <Anchor href="/" className="navigation-item">
                  Anasayfa
                </Anchor>
                <Anchor href="/" className="navigation-item">
                  Metin2 Pvp Serverler
                </Anchor>
                <Anchor href="/" className="navigation-item">
                  Metin2 Yayıncıları
                </Anchor>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  )
}

export default Footer

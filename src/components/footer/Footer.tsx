import React from 'react'
import Container from '@/components/base/container'
import Image from '@/components/base/image'
import Anchor from '@/components/base/anchor'
import Icon from '@/components/base/icon'
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
              src="/images/site/footer-bg.png"
              alt="ByGameList footer image"
              className="footer-bg"
            />
            <span className="title">
              TOPLULUĞUMUZA KATILIN & ÇEKİLİŞLERDEN YARARLANIN
            </span>
            <span className="title-emo">🤙</span>

            <Anchor href="/" target="_blank" className="join-discord">
              <Icon name="icon-discord" />
              <span>DISCORD 'A KATIL</span>
            </Anchor>
            <div className="socials">
              <Anchor href="/" target="_blank" className="socials-item">
                <Icon name="icon-instagram" />
              </Anchor>
              <Anchor href="/" target="_blank" className="socials-item">
                <Icon name="icon-facebook" />
              </Anchor>
              <Anchor href="/" target="_blank" className="socials-item">
                <Icon name="icon-x" />
              </Anchor>
              <Anchor href="/" target="_blank" className="socials-item">
                <Icon name="icon-youtube" />
              </Anchor>
            </div>
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
                <Anchor href="/" target="_blank" className="navigation-item">
                  Anasayfa
                </Anchor>
                <Anchor href="/" target="_blank" className="navigation-item">
                  Metin2 Pvp Serverler
                </Anchor>
                <Anchor href="/" target="_blank" className="navigation-item">
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

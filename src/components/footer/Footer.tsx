import React from 'react'
import Container from '@/components/base/container'
import { IFooterProps } from './types'
import Image from '../base/image'
import Anchor from '../base/anchor'

function Footer({}: IFooterProps) {
  return (
    <footer>
      <div className="footer">
        <Container size="extended">
          <div className="footer-in">
            <div className="bggamelist-info">
              <div className="bggamelist-info-logo">
                <Image src="/images/site/bygamelist-logo.png" alt="ByGameList Logo" />
              </div>
              <p className="bggamelist-info-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in
                praesentium, ut amet nam architecto excepturi totam voluptatibus
                distinctio voluptates odit. Placeat autem at dolorum incidunt non
                voluptates a ut.
              </p>
            </div>
            <div className="footer-pages">
              <span className="list-title">Sayfalar</span>
              <ul className="list-links">
                <li>
                  <Anchor href="/">Pvp Sunucuları</Anchor>
                </li>
                <li>
                  <Anchor href="/">Yayıncılar</Anchor>
                </li>
              </ul>
            </div>
            <div className="footer-pages">
              <span className="list-title">Destek</span>
              <ul className="list-links">
                <li>
                  <Anchor href="/">Hakkımızda</Anchor>
                </li>
                <li>
                  <Anchor href="/">İletişim</Anchor>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="footer-bottom">
          <Container size="extended">
            <div className="footer-bottom-in">
              <span className="copyright">
                Copyright © 2024 - Tüm Hakları <strong>ByGameList</strong> 'e aittir.
              </span>
              <Image
                src="/images/site/ssl-256.png"
                alt="ByGameList 256 Bit SSL Image"
                width={56}
                height={56}
              />
            </div>
          </Container>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import { ISeasonsProps } from './types'
import Container from '../base/container'
import SeasonCard from '../season-card'
import Anchor from '../base/anchor'
import Image from '../base/image'

function Seasons({ title, description, image, anchor, seasons }: ISeasonsProps) {
  return (
    <div className="seasons">
      <Container size="medium">
        <div className="seasons-in">
          <div className="seasons-in-texts">
            {title && <span className="title">{title}</span>}
            {description && <p className="description">{description}</p>}
            {anchor && <Anchor {...anchor} className="seasons-anchor" />}
            {image && (
              <div className="seasons-image">
                <Image {...image} loading="lazy" objectFit="cover" />
              </div>
            )}
          </div>
          <div className="seasons-in-cards">
            <div className="seasons-in-cards-list">
              {seasons &&
                seasons.map((season) => <SeasonCard {...season} key={season.title} />)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Seasons

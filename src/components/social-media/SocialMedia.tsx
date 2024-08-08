import React from 'react'
import Anchor from '@/components/base/anchor'
import Icon from '@/components/base/icon'
import { ISocialMediaProps } from './types'

function SocialMedia({}: ISocialMediaProps) {
  return (
    <div className="social-media">
      <Anchor href="/" target="_blank" className="social-media-item">
        <Icon name="icon-instagram" />
      </Anchor>
      <Anchor href="/" target="_blank" className="social-media-item">
        <Icon name="icon-facebook" />
      </Anchor>
      <Anchor href="/" target="_blank" className="social-media-item">
        <Icon name="icon-x" />
      </Anchor>
      <Anchor href="/" target="_blank" className="social-media-item">
        <Icon name="icon-youtube" />
      </Anchor>
    </div>
  )
}

export default SocialMedia

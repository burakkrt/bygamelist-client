import React from 'react'
import Anchor from '@/components/base/anchor'
import Icon from '@/components/base/icon'
import { IJoinDiscordProps } from './types'

function JoinDiscord({}: IJoinDiscordProps) {
  return (
    <Anchor href="/" target="_blank" className="join-discord">
      <Icon name="icon-discord" />
      <span>DISCORD 'A KATIL</span>
    </Anchor>
  )
}

export default JoinDiscord

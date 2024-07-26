import React from 'react'
import classNames from 'classnames'
import { ISeasonCardProps } from './types'

function SeasonCard({
  title,
  seasonOptions = [],
  activeSeason = false,
}: ISeasonCardProps) {
  return (
    <div className={classNames('season-card', activeSeason && 'active-season')}>
      <span className="season-card-title">{title}</span>
      <ul className="season-card-list">
        {seasonOptions.map((option) => {
          const { text, isActive } = option
          return (
            <li
              key={text}
              className={classNames('season-card-list-item', isActive && 'active')}
            >
              {text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SeasonCard

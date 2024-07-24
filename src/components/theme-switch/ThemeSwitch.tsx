import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Icon from '@/components/base/icon'
import { IThemeSwitchProps } from './types'

function ThemeSwitch({}: IThemeSwitchProps) {
  const [theme, setTheme] = useState<boolean>(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme ? 'dark' : 'light')
  }, [theme])

  return (
    <button
      type="button"
      aria-label="Switch Theme"
      className={classNames('theme-switch', theme && 'dark')}
      onClick={() => setTheme(!theme)}
    >
      <div className="theme-icons">
        <Icon name="icon-moon" />
        <Icon name="icon-sun" />
      </div>
    </button>
  )
}

export default ThemeSwitch

import { useState, useEffect } from 'react'
import debounce from '@/functions/debounce'
import { IReturnBreakpoint } from './types'

const breakpoints = {
  es: 360,
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
  xxl: 1604,
}

const getBreakpoint = (width: number): IReturnBreakpoint => {
  if (width) {
    if (width < breakpoints.es) return 'es'
    if (width < breakpoints.xs) return 'xs'
    if (width < breakpoints.sm) return 'sm'
    if (width < breakpoints.md) return 'md'
    if (width < breakpoints.lg) return 'lg'
    if (width < breakpoints.xl) return 'xl'
    if (width < breakpoints.xxl) return 'xxl'
    return undefined
  }

  return undefined
}
const useBreakpoint = (): IReturnBreakpoint => {
  const [breakpoint, setBreakpoint] = useState<IReturnBreakpoint>(undefined)

  useEffect(() => {
    setBreakpoint(getBreakpoint(window.innerWidth))

    const handleResize = debounce(() => {
      if (typeof window !== 'undefined') {
        setBreakpoint(getBreakpoint(window.innerWidth))
      }
    }, 200)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return breakpoint
}

export default useBreakpoint

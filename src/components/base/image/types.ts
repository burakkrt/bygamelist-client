export interface IImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  loading?: 'eager' | 'lazy'
}

export interface IImageOptions
  extends Pick<
    IImageProps,
    'src' | 'alt' | 'width' | 'height' | 'priority' | 'loading'
  > {
  fill?: boolean
  blurDataURL?: string
  placeholder?: 'blur' | 'empty'
  sizes?: string
}

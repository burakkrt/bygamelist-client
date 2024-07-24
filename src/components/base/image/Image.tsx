import React from 'react'
import NextImage from 'next/image'
import classNames from 'classnames'
import { IImageOptions, IImageProps } from './types'

function Image({
  src,
  alt,
  loading = 'eager',
  height,
  width,
  className,
  priority = false,
}: IImageProps) {
  const imageOptions: IImageOptions = {
    src,
    alt,
    loading,
  }

  if (width && height) {
    imageOptions.width = width
    imageOptions.height = height
  } else {
    imageOptions.fill = true
    imageOptions.sizes = '(max-width: 600px) 90vw,(max-width: 1200px) 50vw, 33vw'
  }

  if (priority) {
    imageOptions.priority = priority
  }

  return (
    <div className={classNames('image-node', className)}>
      <NextImage {...imageOptions} />
    </div>
  )
}

export default Image

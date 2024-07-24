import React from 'react'
import NextImage from 'next/image'
import classNames from 'classnames'
import { IImageOptions, IImageProps } from './types'

async function Image({
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
    imageOptions.loading = 'eager'
  }

  if (loading === 'lazy' && !priority) {
    if (src.startsWith('http')) {
      let imageBlur: string = ''
      try {
        imageBlur = await fetch(src).then(async (res) => {
          return Buffer.from(await res.arrayBuffer()).toString('base64')
        })
      } catch (error) {
        console.log('Base image placeholder blur', error)
      }

      if (imageBlur) {
        imageOptions.blurDataURL = `data:image/png;base64,${imageBlur}`
        imageOptions.placeholder = 'blur'
      }
    } else {
      imageOptions.blurDataURL = src
      imageOptions.placeholder = 'blur'
    }
    imageOptions.loading = loading
  }

  return (
    <div className={classNames('image-node', className)}>
      <NextImage {...imageOptions} />
    </div>
  )
}

export default Image

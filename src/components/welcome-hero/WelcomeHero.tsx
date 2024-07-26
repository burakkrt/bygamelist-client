import React from 'react'
import Image from '@/components/base/image'
import Seasons from '@/components/seasons'
import { IWelcomeHeroProps } from './types'
import { ISeasonsProps } from '../seasons/types'

function WelcomeHero({}: IWelcomeHeroProps) {
  const seasonsValues: ISeasonsProps = {
    title: 'Efsane doğuyor... ilk versiyon yayında !',
    anchor: { href: 'https://google.com', children: 'daha fazla' },
    image: {
      src: '/images/update-seasons.png',
      alt: 'Seasons Image',
      objectFit: 'contain',
      loading: 'eager',
    },
    description:
      "Acaba ne oynasam diye düşünme, detaylı ve kullanışlı tasarımı ile sana uygun sunucuyu bul, vakit kaybetmeden geliş ! Anlık güncellemeler ile trendleri takip et. Hergün güncellenen içerikleri takip ederek rakiplerinden bir adım önde ol. ByGameList 'in ilk versiyonu şimdi yayında.",
    seasons: [
      {
        title: 'version 1',
        activeSeason: true,
        seasonOptions: [
          {
            text: 'Metin2 sunucuları eklenmesi.',
            isActive: true,
          },
          {
            text: 'Metin2 yayıncıları eklenmesi.',
          },
          {
            text: 'İngilizce dil seçeneğinin eklenmesi.',
          },
          {
            text: 'Optimizasyon çalışmaları.',
          },
        ],
      },
      {
        title: 'version 2',
        seasonOptions: [
          {
            text: 'Metin2 haftalık EP çekiliş sisteminin eklenmesi.',
          },
          {
            text: 'Metin2 yayıncı içeriklerinin detaylandırılması.',
          },
          {
            text: 'Optimizasyon çalışmaları.',
          },
        ],
      },
    ],
  }

  return (
    <div className="welcome-hero">
      <Image
        className="welcome-bg-image"
        src="/images/welcome-bg.jpg"
        alt="ByGameList Welcome Hero"
        priority
        objectFit="cover"
      />
      <Seasons {...seasonsValues} />
      <div className="bottom-polygons" />
    </div>
  )
}

export default WelcomeHero

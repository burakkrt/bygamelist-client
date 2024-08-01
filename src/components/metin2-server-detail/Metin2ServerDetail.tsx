import React from 'react'
import Container from '@/components/base/container'
import { IMetin2ServerDetailProps } from './types'

import data from '../../../mock-data.json'

function Metin2ServerDetail({}: IMetin2ServerDetailProps) {
  console.log(data)

  return (
    <div className="metin2-server-detail">
      <Container size="extended">
        <div className="metin2-server-detail-in">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor reiciendis,
            perspiciatis iste inventore earum eum laborum neque, deserunt labore impedit
            quod ducimus provident! Ducimus cum eveniet, facilis quod repudiandae et.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Metin2ServerDetail

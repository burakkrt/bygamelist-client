import React, { useEffect, useState } from 'react'
import Container from '@/components/base/container'
import { IMetin2ServerFilters } from '@/components/metin2-server-filters/types'
import { IMetin2ServerListProps } from './types'

function Metin2ServerList({}: IMetin2ServerListProps) {
  const initialMetin2ServerFilters: IMetin2ServerFilters = {
    search: '',
    serverTypes: [],
    dateSort: 'news',
    autoHunt: false,
    legalSale: false,
  }
  const [filters, setFilters] = useState<IMetin2ServerFilters>(initialMetin2ServerFilters)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('first')
    e.preventDefault()
  }

  useEffect(() => {
    console.log(filters)
  }, [filters])

  return (
    <div className="metin2-server-list">
      <Container size="extended">
        <div className="metin2-server-list-in">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni itaque
            aliquid animi officia suscipit laudantium dolor incidunt, sunt quaerat porro
            eaque blanditiis, soluta natus reiciendis iure obcaecati voluptatem nam?
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Metin2ServerList

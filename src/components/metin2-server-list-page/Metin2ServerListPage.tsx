import React, { useEffect, useState } from 'react'
import Container from '@/components/base/container'
import Metin2ServerCard from '@/components/metin2-server-card'
import { IMetin2ServerFilters } from '@/components/metin2-server-filter-sidebar/types'
import { IMetin2ServerListPageProps } from './types'
import Metin2ServerFilterSidebar from '../metin2-server-filter-sidebar'

function Metin2ServerListPage({}: IMetin2ServerListPageProps) {
  const initialMetin2ServerFilters: IMetin2ServerFilters = {
    search: '',
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
    <div className="metin2-server-list-page">
      <Container size="extended">
        <div className="metin2-server-list-page-in">
          <div className="filters">
            <Metin2ServerFilterSidebar
              filters={filters}
              setFilters={setFilters}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
          <div className="server-list">
            <Metin2ServerCard />
            <Metin2ServerCard />
            <Metin2ServerCard />
            <Metin2ServerCard />
            <Metin2ServerCard />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Metin2ServerListPage

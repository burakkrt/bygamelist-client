import React, { useEffect, useState } from 'react'
import Container from '@/components/base/container'
import Metin2ServerCard from '@/components/metin2-server-card'
import { IMetin2ServerFilters } from '@/components/metin2-server-filters/types'
import Metin2ServerFilters from '@/components/metin2-server-filters'
import { IMetin2ServerListPageProps } from './types'

function Metin2ServerListPage({}: IMetin2ServerListPageProps) {
  const initialMetin2ServerFilters: IMetin2ServerFilters = {
    search: '',
    serverTypes: [],
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
          <div className="slidebar">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis
            odit reiciendis voluptatum tempora, dolor sed ipsum saepe quidem excepturi
            quis porro provident, animi labore cupiditate sint. Inventore, tempore
            quibusdam.
          </div>
          <div className="server-list">
            <div className="server-list-filters">
              <Metin2ServerFilters
                filters={filters}
                setFilters={setFilters}
                handleFormSubmit={handleFormSubmit}
                initialValue={initialMetin2ServerFilters}
              />
              <div className="result-info">
                <span className="text">Toplam 38 veriden 1-15 arası gösteriliyor.</span>
              </div>
            </div>
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

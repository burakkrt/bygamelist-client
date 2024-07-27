import React from 'react'
import { Box, TextField } from '@mui/material'
import { IMetin2ServerFilterSidebarProps } from './types'

function Metin2ServerFilterSidebar({
  filters,
  setFilters,
  handleFormSubmit,
}: IMetin2ServerFilterSidebarProps) {
  const hanleChanceFilter = (value: string) => {
    setFilters((prev) => ({ ...prev, search: value }))
  }

  return (
    <div className="metin2-server-filter-sidebar">
      <div className="result-info">
        <span className="text">Toplam 38 veriden 1-15 arası gösteriliyor.</span>
      </div>
      <div className="filter-search-box">
        <Box component="form" autoComplete="off" onSubmit={handleFormSubmit}>
          <TextField
            type="search"
            label="Sunucu ismi"
            variant="outlined"
            className="search-input"
            value={filters.search}
            onChange={(e) => hanleChanceFilter(e.target.value)}
          />
        </Box>
      </div>
    </div>
  )
}

export default Metin2ServerFilterSidebar

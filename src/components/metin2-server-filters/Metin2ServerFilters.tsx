import React from 'react'
import {
  BaseSelectProps,
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material'
import { IMetin2ServerFiltersProps, IServerTypes } from './types'

function Metin2ServerFilters({
  filters,
  setFilters,
  handleFormSubmit,
}: IMetin2ServerFiltersProps) {
  const { search, serverTypes } = filters
  const MenuProps: BaseSelectProps['MenuProps'] = {
    PaperProps: {
      classes: {
        root: 'gl-select-popup',
      },
    },
  }

  const serverTypeValues: Array<IServerTypes> = [
    '1-99 Level',
    '1-105 Level',
    '1-120 Level',
    '55-120 Level',
    '55-250 Level',
  ]

  const hanleChanceFilter = (key: any, value: any) => {
    switch (key) {
      case 'search':
        setFilters((prev) => ({ ...prev, search: value }))
        break

      case 'serverTypes': {
        const convertValue = typeof value === 'string' ? value.split(',') : value
        setFilters((prev) => ({ ...prev, serverTypes: convertValue }))
        break
      }
      default:
        break
    }
  }

  return (
    <div className="metin2-server-filters">
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleFormSubmit}
        className="filters-form"
      >
        <TextField
          type="search"
          label="Sunucu ara"
          variant="outlined"
          className="gl-input-outline"
          value={search}
          onChange={(e) => hanleChanceFilter('search', e.target.value)}
        />
        <FormControl className="gl-multiselect-outline">
          <InputLabel id="server-type-select">Sunucu tipi</InputLabel>
          <Select
            labelId="server-type-select"
            multiple
            value={serverTypes}
            onChange={(e) => hanleChanceFilter('serverTypes', e.target.value)}
            input={<OutlinedInput label="Sunucu tipi" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {serverTypeValues.map((type) => (
              <MenuItem key={type} value={type}>
                <Checkbox checked={serverTypes.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default Metin2ServerFilters

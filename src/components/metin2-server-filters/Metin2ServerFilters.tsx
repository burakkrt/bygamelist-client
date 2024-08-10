import React, { useState } from 'react'
import {
  BaseSelectProps,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Switch,
  TextField,
  InputAdornment,
} from '@mui/material'
import Icon from '@/components/base/icon'
import { IMetin2ServerFilters, IMetin2ServerFiltersProps, IServerTypes } from './types'

const initialFormValues: IMetin2ServerFilters = {
  search: '',
  serverTypes: [],
  dateSort: 'asc',
  autoHunt: false,
  legalSale: false,
}

function Metin2ServerFilters({}: IMetin2ServerFiltersProps) {
  const [filters, setFilters] = useState<IMetin2ServerFilters>(initialFormValues)

  const serverTypeMenuProps: BaseSelectProps['MenuProps'] = {
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

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(filters)
  }

  const handleChangeFilter = (key: keyof IMetin2ServerFilters | 'clear', value: any) => {
    switch (key) {
      case 'search':
        setFilters((prev) => ({ ...prev, search: value }))
        break

      case 'serverTypes': {
        const convertValue = typeof value === 'string' ? value.split(',') : value
        setFilters((prev) => ({ ...prev, serverTypes: convertValue }))
        break
      }

      case 'dateSort':
        setFilters((prev) => ({ ...prev, dateSort: value }))
        break

      case 'autoHunt':
        setFilters((prev) => ({ ...prev, autoHunt: value }))
        break

      case 'legalSale':
        setFilters((prev) => ({ ...prev, legalSale: value }))
        break

      case 'clear':
        setFilters(initialFormValues)
        break

      default:
        break
    }
  }

  return (
    <div className="metin2-server-filters">
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        autoComplete="off"
        className="filters-form"
      >
        <TextField
          type="search"
          label="Sunucu ara"
          variant="filled"
          className="gl-input-filled search-server"
          value={filters.search}
          onChange={(e) => handleChangeFilter('search', e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon name="icon-search" />
              </InputAdornment>
            ),
          }}
        />
        <FormControl variant="filled" className="gl-multiselect-filled server-type">
          <InputLabel id="server-type-select">Sunucu tipi</InputLabel>
          <Select
            label="Sunucu Tipi"
            labelId="server-type-select"
            multiple
            value={filters.serverTypes}
            onChange={(e) => handleChangeFilter('serverTypes', e.target.value)}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={serverTypeMenuProps}
          >
            {serverTypeValues.map((type) => (
              <MenuItem key={type} value={type} className="menu-item">
                <Checkbox checked={filters.serverTypes.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className="gl-multiselect-filled datesort" variant="filled">
          <InputLabel id="server-datesort-select">Tarihe göre sırala</InputLabel>
          <Select
            labelId="server-datesort-select"
            value={filters.dateSort}
            label="Tarihe göre sırala"
            onChange={(e) => handleChangeFilter('dateSort', e.target.value)}
            MenuProps={serverTypeMenuProps}
          >
            <MenuItem value="asc">Önce en yeniler</MenuItem>
            <MenuItem value="desc">Önce en eskiler</MenuItem>
          </Select>
        </FormControl>
        <FormGroup className="switch-group">
          <FormControlLabel
            control={
              <Switch
                onChange={(e) => handleChangeFilter('autoHunt', e.target.checked)}
                checked={filters.autoHunt}
              />
            }
            label="Oto Av"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={(e) => handleChangeFilter('legalSale', e.target.checked)}
                checked={filters.legalSale}
              />
            }
            label="Legal Satış"
          />
        </FormGroup>
        <div className="form-action-buttons">
          <Button
            variant="contained"
            className="gl-form-button submit-button"
            type="submit"
          >
            <Icon name="icon-document" />
            Filtrele
          </Button>
          <Button
            variant="contained"
            className="gl-form-button clear-button"
            onClick={() => handleChangeFilter('clear', '')}
          >
            <Icon name="icon-clear" />
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default Metin2ServerFilters

import React from 'react'
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
  OutlinedInput,
  Select,
  Switch,
  TextField,
} from '@mui/material'
import { IMetin2ServerFilters, IMetin2ServerFiltersProps, IServerTypes } from './types'

function Metin2ServerFilters({
  filters,
  setFilters,
  handleFormSubmit,
  initialValue,
}: IMetin2ServerFiltersProps) {
  const { search, serverTypes, dateSort, autoHunt, legalSale } = filters
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
        setFilters(initialValue)
        break

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
          onChange={(e) => handleChangeFilter('search', e.target.value)}
        />
        <FormControl className="gl-multiselect-outline">
          <InputLabel id="server-type-select">Sunucu tipi</InputLabel>
          <Select
            labelId="server-type-select"
            multiple
            value={serverTypes}
            onChange={(e) => handleChangeFilter('serverTypes', e.target.value)}
            input={<OutlinedInput label="Sunucu tipi" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={serverTypeMenuProps}
          >
            {serverTypeValues.map((type) => (
              <MenuItem key={type} value={type}>
                <Checkbox checked={serverTypes.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className="gl-select-outline">
          <InputLabel id="server-datesort-select">Tarihe göre sırala</InputLabel>
          <Select
            labelId="server-datesort-select"
            value={dateSort}
            label="Tarihe göre sırala"
            onChange={(e) => handleChangeFilter('dateSort', e.target.value)}
            MenuProps={serverTypeMenuProps}
          >
            <MenuItem value="news">Önce en yeniler</MenuItem>
            <MenuItem value="olds">Önce en eskiler</MenuItem>
          </Select>
        </FormControl>
        <FormGroup className="switch-group">
          <FormControlLabel
            control={
              <Switch
                onChange={(e) => handleChangeFilter('autoHunt', e.target.checked)}
                checked={autoHunt}
              />
            }
            label="Oto Av"
          />
          <FormControlLabel
            control={
              <Switch
                onChange={(e) => handleChangeFilter('legalSale', e.target.checked)}
                checked={legalSale}
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
            Filtrele
          </Button>
          <Button
            variant="contained"
            className="gl-form-button clear-button"
            onClick={() => handleChangeFilter('clear', '')}
          >
            Temizle
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default Metin2ServerFilters

import React, { useCallback, useEffect, useMemo, useState } from 'react'
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
  const [openServerType, setOpenServerType] = useState<boolean>(false)
  const [openDatesort, setOpenDatesort] = useState<boolean>(false)

  const serverTypeMenuProps: BaseSelectProps['MenuProps'] = useMemo(
    () => ({
      disableScrollLock: true,
      PaperProps: {
        classes: {
          root: 'gl-select-popup',
        },
      },
    }),
    []
  )

  const serverTypeValues: Array<IServerTypes> = useMemo(
    () => ['1-99 Level', '1-105 Level', '1-120 Level', '55-120 Level', '55-250 Level'],
    []
  )

  const handleScroll = useCallback(() => {
    if (openServerType || openDatesort) {
      setOpenServerType(false)
      setOpenDatesort(false)
    }
  }, [openServerType, openDatesort])

  useEffect(() => {
    if (openServerType || openDatesort) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [openServerType, openDatesort, handleScroll])

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(filters)
  }

  const handleChangeFilter = useCallback(
    (key: keyof IMetin2ServerFilters | 'clear', value: any) => {
      setFilters((prev) => {
        switch (key) {
          case 'search':
            return { ...prev, search: value }

          case 'serverTypes': {
            const convertValue = typeof value === 'string' ? value.split(',') : value
            return { ...prev, serverTypes: convertValue }
          }

          case 'dateSort':
            return { ...prev, dateSort: value }

          case 'autoHunt':
            return { ...prev, autoHunt: value }

          case 'legalSale':
            return { ...prev, legalSale: value }

          case 'clear':
            return initialFormValues

          default:
            return prev
        }
      })
    },
    []
  )

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
            open={openServerType}
            onOpen={() => setOpenServerType(true)}
            onClose={() => setOpenServerType(false)}
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
            label="Tarihe göre sırala"
            value={filters.dateSort}
            onChange={(e) => handleChangeFilter('dateSort', e.target.value)}
            open={openDatesort}
            onOpen={() => setOpenDatesort(true)}
            onClose={() => setOpenDatesort(false)}
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
            <Icon name="icon-flash" />
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

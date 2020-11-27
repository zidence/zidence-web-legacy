import React from 'react'
import styled from '@xstyled/styled-components'
import { Input, AutoComplete } from 'antd'

const options = [
  {
    value: 'Jakarta',
  },
  {
    value: 'Tangerang',
  },
  {
    value: 'Bali',
  },
]

const suffix = <img src='images/search-icon.svg' alt='search-icon' />

const FilterBarStyled = styled(AutoComplete)`
  border-radius: 7px;
  background-color: background;
`

const FilterBar = () => {
  return (
    <FilterBarStyled
      defaultActiveFirstOption
      backfill
      options={options}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      notFoundContent='Nothing Found'
    >
      <Input
        style={{ width: 750, margin: 8 }}
        size='large'
        bordered={false}
        suffix={suffix}
        placeholder='Select a city'
      />
    </FilterBarStyled>
  )
}

export default FilterBar

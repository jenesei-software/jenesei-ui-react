import type { Meta, StoryObj } from '@storybook/react'
import FullCountryList from 'country-list-with-dial-code-and-flag'
import { FC, useCallback, useState } from 'react'
import 'styled-components'

import { TypographyTooltip } from '@components/typography'

import { ISelectItem, Select, SelectProps } from '.'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select/Default'
}

export default meta
type Story = StoryObj<typeof Select>

const defaultArgs: Partial<SelectProps<IOption>> = {
  size: 'medium',
  genre: 'gray',
  width: '300px'
}

interface IOption extends ISelectItem {
  search?: string
}

const DefaultSelectWrapper: FC<SelectProps<IOption>> = props => {
  const CountryListOption = FullCountryList.getAll()

  const [option] = useState<IOption[]>(
    CountryListOption.map(e => ({
      label: (
        <TypographyTooltip
          typography={{
            textWrap: 'nowrap'
          }}
          tooltip={{ size: 14, placement: 'bottom' }}
        >
          {e.name}
        </TypographyTooltip>
      ),
      value: e.code,
      search: e.name
    }))
  )
  const [viewOption, setViewOption] = useState<IOption[]>(option)
  const [value, setValue] = useState<IOption[]>([option[0]])
  const [query, setQuery] = useState<string>('')
  const handleSelectChange = (option: IOption[]) => {
    setValue(option)
  }
  const handleQueryChange = useCallback(
    (value: string) => {
      setQuery(value)
      if (value === '') return setViewOption(option)
      const filteredOptions = option.filter(option =>
        Object.values(option).some(field => field?.toString().toLowerCase().includes(value.toLowerCase()))
      )
      setViewOption(filteredOptions)
    },
    [option]
  )

  return (
    <Select<IOption>
      {...props}
      placeholder="Search..."
      isMulti
      option={viewOption}
      value={value}
      onChange={handleSelectChange}
      inputProps={{
        value: query,
        onChange: handleQueryChange
      }}
      checkboxProps={{
        view: 'Square',
        isHiddenBorder: true,
        isNotBackground: true
      }}
      footer={{
        erase: {
          label: 'Erase'
        },
        selectAll: {
          label: 'Select All'
        }
      }}
    />
  )
}

export const Default: Story = {
  render: args => <DefaultSelectWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}

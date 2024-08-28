import type { Meta, StoryObj } from '@storybook/react'
import FullCountryList from 'country-list-with-dial-code-and-flag'
import { useCallback, useState } from 'react'
import 'styled-components'

import { TypographyTooltip } from '@components/typography'

import { ISelectItem, Select, SelectProps } from '.'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
}

export default meta
type Story = StoryObj<typeof Select>

const defaultArgs: Partial<SelectProps<IOption>> = {
  size: 'medium',
  genre: 'gray',
  width: '300px',
}

interface IOption extends ISelectItem {
  search?: string
}

const DefaultSelectWrapper: React.FC<SelectProps<IOption>> = (props) => {
  const CountryListOption = FullCountryList.getAll()

  const [option] = useState<IOption[]>(
    CountryListOption.map((e) => ({
      label: (
        <TypographyTooltip
          typography={{
            textWrap: 'nowrap',
          }}
          tooltip={{ size: 14, placement: 'bottom' }}
        >
          {e.name}
        </TypographyTooltip>
      ),
      value: e.code,
      search: e.name,
    })),
  )
  const [viewOption, setViewOption] = useState<IOption[]>(option)
  const [value, setValue] = useState<IOption[]>([option[0]])
  const [query, setQuery] = useState<string>('')
  const handleSelectChange = (option: IOption[]) => {
    setValue(option)
  }
  const handleQueryChange = useCallback((value: string) => {
    setQuery(value)
    if (value === '') return setViewOption(option)
    const filteredOptions = option.filter((option) =>
      Object.values(option).some((field) =>
        field?.toString().toLowerCase().includes(value.toLowerCase()),
      ),
    )
    setViewOption(filteredOptions)
  }, [])

  return (
    <Select<IOption>
      {...props}
      isMultu
      option={viewOption}
      value={value}
      onChange={handleSelectChange}
      inputProps={{
        size: 'medium',
        genre: 'gray',
        placeholder: 'Search...',
        value: query,
        onChange: handleQueryChange,
      }}
      checkboxProps={{
        genre: 'gray',
        view: 'Square',
        size: 'medium',
        isHiddenBorder: true,
        isNotBackground: true,
      }}
      optionProps={{
        size: 'large',
        genre: 'gray',
        isCustomIcon: true,
      }}
      footer={{
        erase: {
          label: 'Erase',
        },
        selectAll: {
          label: 'Select All',
        },
      }}
    />
  )
}

export const Default: Story = {
  render: (args) => <DefaultSelectWrapper {...args} />,
  args: {
    ...defaultArgs,
  },
}

const CountryListSelectWrapper: React.FC<SelectProps<IOption>> = (props) => {
  const countryListOption = FullCountryList.getAll()
  console.log('CountryListOption', countryListOption)
  const [option] = useState<IOption[]>(
    countryListOption.map((e) => ({
      label: (
        <>
          <img
            alt={e.name}
            style={{
              paddingRight: '6px',
              width: '30px',
              display: 'inline-flex',
              objectFit: 'cover',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${e.code}.svg`}
          />
          <TypographyTooltip
            typography={{
              textWrap: 'nowrap',
            }}
            tooltip={{ size: 14, placement: 'bottom' }}
          >
            {e.name}
            {', '}
            {e.localName}
          </TypographyTooltip>
        </>
      ),
      value: e.code,
      search: e.name + ', ' + e.localName,
    })),
  )

  const [viewOption, setViewOption] = useState<IOption[]>(option)
  const [value, setValue] = useState<IOption | null>(null)
  const [query, setQuery] = useState<string>('')
  const handleSelectChange = (option: IOption[]) => {
    setValue(option[0])
  }
  const handleQueryChange = useCallback((value: string) => {
    setQuery(value)
    setValue(null)
    if (value === '') return setViewOption(option)
    const filteredOptions = option.filter((option) =>
      Object.values(option).some((field) =>
        field?.toString().toLowerCase().includes(value.toLowerCase()),
      ),
    )
    setViewOption(filteredOptions)
  }, [])

  return (
    <Select<IOption>
      {...props}
      option={viewOption}
      value={value ? [value] : []}
      onChange={handleSelectChange}
      inputProps={{
        size: 'medium',
        genre: 'gray',
        placeholder: 'Choice country',
        value: (value?.search as string) ?? query,
        onChange: handleQueryChange,
      }}
    />
  )
}

export const CountryList: Story = {
  render: (args) => <CountryListSelectWrapper {...args} />,
  args: {
    ...defaultArgs,
  },
}

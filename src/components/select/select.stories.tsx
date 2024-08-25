import type { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import 'styled-components'


import { ISelectItem, Select, SelectProps } from '.'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
}

export default meta
type Story = StoryObj<typeof Select>

const defaultArgs: Partial<SelectProps<IOption>> = {
  inputProps: {
    size: 'medium',
    genre: 'gray',
    placeholder: 'Search...',
  },
  size: 'medium',
  genre: 'gray',
  width: '300px',
  checkboxProps: {
    genre: 'gray',
    view: 'square',
    size: 'medium',
    isHiddenBorder: true,
    isNotBackground: true,
  },
  optionProps: {
    size: 'large',
    genre: 'gray',
    isCustomIcon: true,
  },
  footer: {
    erase: {
      label: 'Erase',
    },
    selectAll: {
      label: 'Select All',
    },
  },
}

interface IOption extends ISelectItem {}

const SelectWrapper: React.FC<SelectProps<IOption>> = (props) => {
  const [option] = useState<IOption[]>([
    {
      label:
        'Partnership Partnership Partnership Partnership Partnership Partnership Partnership',
      value: 0,
    },
    {
      label: 'Partnership Partnership Partnership Partnership Partnership Partnership Partnership, Partnership Partnership Partnership Partnership Partnership Partnership Partnership, Partnership Partnership Partnership Partnership Partnership Partnership Partnership, Partnership Partnership Partnership Partnership Partnership Partnership Partnership',
      value: 1,
    },
    { label: 'Career', value: 2 },
    { label: 'Other', value: 3 },
    { label: 'Partnership', value: 4 },
    { label: 'Service request', value: 5 },
    { label: 'Career', value: 6 },
    { label: 'Other', value: 7 },
    { label: 'Partnership', value: 8 },
    { label: 'Service request', value: 9 },
    { label: 'Career', value: 10 },
    { label: 'Other', value: 11 },
    { label: 'Partnership', value: 12 },
    { label: 'Service request', value: 13 },
    { label: 'Career', value: 14 },
    { label: 'Other', value: 15 },
    { label: 'Partnership', value: 16 },
    { label: 'Service request', value: 17 },
    { label: 'Career', value: 18 },
    { label: 'Other', value: 19 },
    { label: 'Partnership', value: 20 },
    { label: 'Service request', value: 21 },
    { label: 'Career', value: 22 },
    { label: 'Other', value: 23 },
  ])
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
  },[])

  return (
    <Select<IOption>
      {...props}
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
    />
  )
}

export const Default: Story = {
  render: (args) => <SelectWrapper {...args} />,
  args: {
    ...defaultArgs,
  },
}

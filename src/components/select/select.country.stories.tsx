import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import 'styled-components'

import { SelectCountry, SelectCountryProps } from '.'

const meta: Meta<typeof SelectCountry> = {
  component: SelectCountry,
  title: 'Select/Country',
}

export default meta
type Story = StoryObj<typeof SelectCountry>

const defaultArgs: Partial<SelectCountryProps> = {
  size: 'medium',
  genre: 'gray',
  width: '300px',
}

const SelectCountryWrapper: React.FC<SelectCountryProps> = (props) => {
  const [value, setValue] = useState<string>('')
  const handleSelectChange = (value: string) => {
    setValue(value)
  }

  return (
    <SelectCountry
      {...props}
      placeholder="Choice country..."
      value={value}
      onChange={handleSelectChange}
    />
  )
}

export const Country: Story = {
  render: (args) => <SelectCountryWrapper {...args} />,
  args: {
    ...defaultArgs,
  },
}

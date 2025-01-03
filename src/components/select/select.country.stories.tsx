import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { SelectCountry, SelectCountryProps } from '.'

const meta: Meta<typeof SelectCountry> = {
  component: SelectCountry,
  title: 'Component/Select'
}

export default meta
type Story = StoryObj<typeof SelectCountry>

const defaultArgs: Partial<SelectCountryProps> = {
  size: 'medium',
  genre: 'gray',
  width: '300px'
}

const SelectCountryWrapper: FC<SelectCountryProps> = props => {
  const [value, setValue] = useState<string>('')
  const handleSelectChange = (props: { countryCode: string }) => {
    setValue(props.countryCode)
  }

  return <SelectCountry {...props} placeholder="Choice country..." value={value} onChange={handleSelectChange} />
}

export const Country: Story = {
  render: args => <SelectCountryWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}

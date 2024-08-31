import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import 'styled-components'

import { SelectLanguage, SelectLanguageProps } from '.'

const meta: Meta<typeof SelectLanguage> = {
  component: SelectLanguage,
  title: 'Select/Language',
}

export default meta
type Story = StoryObj<typeof SelectLanguage>

const defaultArgs: Partial<SelectLanguageProps> = {
  size: 'medium',
  genre: 'gray',
  width: '300px',
}

const SelectLanguageWrapper: React.FC<SelectLanguageProps> = (props) => {
  const [value, setValue] = useState<string>('')
  const handleSelectChange = (value: string) => {
    setValue(value)
  }

  return (
    <SelectLanguage
      {...props}
      placeholder="Choice language..."
      value={value}
      onChange={handleSelectChange}
    />
  )
}

export const Language: Story = {
  render: (args) => <SelectLanguageWrapper {...args} />,
  args: {
    ...defaultArgs,
  },
}
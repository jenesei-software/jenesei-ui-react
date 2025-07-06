import type { Meta, StoryObj } from '@storybook/react-vite'
import { FC, useState } from 'react'
import 'styled-components'

import { SelectLanguage, SelectLanguageProps } from '@local/components/select'
import { Stack } from '@local/components/stack'

const meta: Meta<typeof SelectLanguage> = {
  component: SelectLanguage,
  title: 'Component/Select'
}

export default meta
type Story = StoryObj<typeof SelectLanguage>

const defaultArgs: Partial<SelectLanguageProps> = {
  size: 'medium',
  genre: 'gray',
  sx: {
    default: {
      width: '300px'
    }
  },
  isOnClickOptionClose: false,
  isShowDropdownOptionIcon: true
}

const SelectLanguageWrapper: FC<SelectLanguageProps> = props => {
  const [value, setValue] = useState<string | null>(null)
  const handleSelectChange = (language: string | null) => {
    setValue(language)
  }

  return (
    <Stack
      sx={{
        default: {
          width: '300px',
          height: '500px',
          padding: '10px'
        }
      }}
    >
      <SelectLanguage {...props} value={value} onChange={handleSelectChange} />
    </Stack>
  )
}

export const Language: Story = {
  render: args => <SelectLanguageWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}

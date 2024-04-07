import { InputSelect } from '.'
import { LibraryIcon } from '../../main'
import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

const meta: Meta<typeof InputSelect> = {
  component: InputSelect,
  title: 'Input/Input Select',
}

export default meta
type Story = StoryObj<typeof InputSelect>

export const Default: Story = {
  args: {
    isCloseMenuOnSelect: false,
    value: [],
    options: [
      { value: 0, label: 'First' },
      { value: 1, label: 'Second' },
    ],
    iconType: 'circle',
    genre: 'user',
    placeholder: 'Выберите категорию',
    isDisabled: false,
    isHideArrow: false,
    isHideIndicatorSeparator: false,
    isMenuIsOpen: true,
    isMulti: false,
    isOnlyDefaultValue: false,
    isSearchable: false,
    isAlwaysPlaceholder: false,
  },
}

export const IsAlwaysPlaceholder: Story = {
  args: {
    ...Default.args,
    isAlwaysPlaceholder: true,
    placeholder: <LibraryIcon.Coffee />,
  },
}

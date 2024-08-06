import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import 'styled-components'

import { Checkboxes, CheckboxesProps, ICheckboxValue } from '.'

const meta: Meta<typeof Checkboxes> = {
  component: Checkboxes,
  title: 'Checkbox/Checkboxes',
}

export default meta
type Story = StoryObj<typeof Checkboxes>

const defaultArgs: Partial<CheckboxesProps<ICheckboxValue>> = {
  checkboxGenre: 'gray',
  checkBoxView: 'circle',
  checkboxWidth: '100%',
  checkboxIsHiddenBorder: false,
  multiple: true,
  size: 'medium',
  labelField: 'label',
  valueField: 'value',
  width: '300px',
}

const CheckboxesWrapper: React.FC<CheckboxesProps<ICheckboxValue>> = (
  props,
) => {
  const [value, setValue] = useState<ICheckboxValue[]>([])
  const [options] = useState<ICheckboxValue[]>([
    { value: 0, label: 'First' },
    { value: 1, label: 'Second' },
  ])

  return (
    <Checkboxes
      {...props}
      value={value}
      options={options}
      onChange={(value) => setValue(value)}
    />
  )
}

export const Default: Story = {
  render: (args) => <CheckboxesWrapper {...args} />,
  args: {
    ...defaultArgs,
  },
}

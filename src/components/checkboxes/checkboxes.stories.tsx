import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import { Checkboxes as CheckboxesComponent, CheckboxesProps, ICheckboxValue } from '.'

const meta: Meta<typeof CheckboxesComponent> = {
  component: CheckboxesComponent,
  title: 'Checkbox/Checkboxes',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof CheckboxesComponent>

const defaultArgs: Partial<CheckboxesProps<ICheckboxValue>> = {
  checkboxGenre: 'gray',
  checkBoxView: 'Radio',
  checkboxWidth: '100%',
  checkboxIsHiddenBorder: false,
  multiple: true,
  size: 'medium',
  labelField: 'label',
  valueField: 'value',
  width: '300px'
}

const CheckboxesWrapper: FC<CheckboxesProps<ICheckboxValue>> = props => {
  const [value, setValue] = useState<ICheckboxValue[]>([])
  const [options] = useState<ICheckboxValue[]>([
    { value: 0, label: 'First' },
    { value: 1, label: 'Second' }
  ])

  return <CheckboxesComponent {...props} value={value} options={options} onChange={value => setValue(value)} />
}

export const Checkboxes: Story = {
  render: args => <CheckboxesWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}

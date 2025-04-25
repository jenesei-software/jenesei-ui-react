import type { Meta, StoryObj } from '@storybook/react'
import { FC, useState } from 'react'
import 'styled-components'

import {
  CheckboxGroup as CheckboxGroupComponent,
  CheckboxGroupProps,
  ICheckboxValue
} from '../components/checkbox-group'

const meta: Meta<typeof CheckboxGroupComponent> = {
  component: CheckboxGroupComponent,
  title: 'Component/CheckboxGroup'
}

export default meta
type Story = StoryObj<typeof CheckboxGroupComponent>

const defaultArgs: Partial<CheckboxGroupProps<ICheckboxValue>> = {
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

const CheckboxGroupWrapper: FC<CheckboxGroupProps<ICheckboxValue>> = props => {
  const [value, setValue] = useState<ICheckboxValue[]>([])
  const [options] = useState<ICheckboxValue[]>([
    { value: 0, label: 'First' },
    { value: 1, label: 'Second' }
  ])

  return <CheckboxGroupComponent {...props} value={value} options={options} onChange={value => setValue(value)} />
}

export const CheckboxGroup: Story = {
  render: args => <CheckboxGroupWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}

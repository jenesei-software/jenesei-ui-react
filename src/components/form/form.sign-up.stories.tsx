import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import 'styled-components'

import { FormSignUp, FormSignUpProps } from '.'

const meta: Meta<typeof FormSignUp> = {
  component: FormSignUp,
  title: 'Form/SignUp',
}

export default meta
type Story = StoryObj<typeof FormSignUp>

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
})

const FormWrapper: React.FC<FormSignUpProps> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FormSignUp {...props} />
    </QueryClientProvider>
  )
}

export const SignUp: Story = {
  render: (args) => <FormWrapper {...args} />,
  args: {
    genre: 'grayBorder',
    size: 'medium',
    isPadding: true,
    isBorder: true,
    width: '300px',
    onSubmit(field) {
      console.log(field)
    },
  },
}

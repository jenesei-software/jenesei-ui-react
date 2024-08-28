import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'

import { Stack } from '@components/flex'
import { Input } from '@components/input'

export const Form = () => {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
    validatorAdapter: zodValidator(),
  })
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <Stack gap="40px" flexDirection="column">
        <>
          <form.Field
            name="firstName"
            validators={{
              onChange: z
                .string()
                .min(1, 'First name is required')
                .min(3, 'First name must be at least 3 characters')
                .max(128, 'First name must be at most 128 characters'),
              onChangeAsyncDebounceMs: 500,
            }}
            children={(field) => {
              return (
                <>
                  <Input
                    placeholder={field.name}
                    width="300px"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={field.handleChange}
                    genre={'grayBorder'}
                    size={'medium'}
                    isError={
                      !!field.state.meta.isTouched &&
                      !!field.state.meta.errors.length
                    }
                    errorMessage={field.state.meta.errors?.[0]?.toString()}
                  />
                </>
              )
            }}
          />
          <form.Field
            name="lastName"
            validators={{
              onChange: z
                .string()
                .min(1, 'Last name is required')
                .min(3, 'Last name must be at least 3 characters')
                .max(128, 'Last name must be at most 128 characters'),
              onChangeAsyncDebounceMs: 500,
            }}
            children={(field) => {
              return (
                <>
                  <Input
                    width="300px"
                    placeholder={field.name}
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={field.handleChange}
                    genre={'grayBorder'}
                    size={'medium'}
                    isError={
                      !!field.state.meta.isTouched &&
                      !!field.state.meta.errors.length
                    }
                    errorMessage={field.state.meta.errors?.[0]?.toString()}
                  />
                </>
              )
            }}
          />
        </>
      </Stack>
    </form>
  )
}

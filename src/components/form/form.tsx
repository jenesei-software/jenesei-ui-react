import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'

import { Icon } from '@assets/library-icon'

import { Button } from '@components/button'
import { Stack } from '@components/flex'
import { Input } from '@components/input'
import { Typography } from '@components/typography'

const validationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(128, 'First name must be at most 128 characters')
    .refine((value) => !value.includes(' '), 'No Spaces!'),
  lastName: z
    .string()
    .trim()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(128, 'Last name must be at most 128 characters')
    .refine((value) => !value.includes(' '), 'No Spaces!'),
  login: z
    .string()
    .trim()
    .min(1, 'Login is required')
    .min(2, 'Login must be at least 1 characters')
    .max(12, 'Login must be at most 12 characters')
    .refine((value) => !value.includes(' '), 'No Spaces!'),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .email('Email is not valid')
    .refine((value) => !value.includes(' '), 'No Spaces!'),
  currentPassword: z
    .string()
    .trim()
    .min(1, 'Current password is required')
    .min(8, { message: 'Current password must be at least 8 characters' })
    .max(128, {
      message: 'Current password must be at most 128 characters',
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: 'Current password must be at high case',
    })
    .refine((password) => /[a-z]/.test(password), {
      message: 'Current password must be at low case',
    })
    .refine((password) => /[0-9]/.test(password), {
      message: 'Current password must be at contain numbers',
    })
    .refine((password) => /[!@#$%^&*_-]/.test(password), {
      message: 'Current password must be at contain unique characters',
    })
    .refine((value) => !value.includes(' '), 'No Spaces!'),
  phone: z
    .string()
    .trim()
    .regex(
      /^((\\+[1-11]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number must be a valid number',
    )
    .refine((value) => !value.includes(' '), 'No Spaces!'),
})

export const Form = () => {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      currentPassword: '',
      confirmPassword: '',
      phone: '',
    },
    onSubmit: async ({ value }) => {
      const result = {
        firstName: value.firstName.trim(),
        lastName: value.lastName.trim(),
        login: value.login.trim(),
        email: value.email.trim(),
        currentPassword: value.currentPassword.trim(),
        confirmPassword: value.confirmPassword.trim(),
        phone: value.phone.trim(),
      }
      console.log(result)
    },
    asyncDebounceMs: 500,
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
      <Stack gap="6px" flexDirection="column" w="100%" maxW="500px">
        <>
          <Typography color="black100" variant="h5">
            First name
          </Typography>
          <form.Field
            name="firstName"
            validators={{
              onChange: validationSchema.shape.firstName,
            }}
            children={(field) => {
              return (
                <>
                  <Input
                    placeholder="Write the first name"
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
          <Typography color="black100" variant="h5">
            Last name
          </Typography>
          <form.Field
            name="lastName"
            validators={{
              onChange: validationSchema.shape.lastName,
            }}
            children={(field) => {
              return (
                <>
                  <Input
                    placeholder="Write the last name"
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
          <Typography color="black100" variant="h5">
            Email
          </Typography>
          <form.Field
            name="email"
            validators={{
              onChange: validationSchema.shape.email,
            }}
            children={(field) => {
              return (
                <>
                  <Input
                    placeholder="Write the Email"
                    type="email"
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
          <Typography color="black100" variant="h5">
            Login
          </Typography>
          <form.Field
            name="login"
            validators={{
              onChange: validationSchema.shape.login,
            }}
            children={(field) => {
              return (
                <>
                  <Input
                    placeholder="Write the login"
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
          <Typography color="black100" variant="h5">
            Current password
          </Typography>
          <form.Field
            name="currentPassword"
            validators={{
              onChangeListenTo: ['confirmPassword'],
              onChange: validationSchema.shape.currentPassword,
            }}
            children={(field) => {
              return (
                <>
                  <Input
                    type="password"
                    placeholder="Write the current password"
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
                    postfixChildren={{
                      width: '32px',
                      left: '4px',
                      right: '0px',
                      children: (
                        <Stack
                          alignItems={'center'}
                          justifyContent={'center'}
                          p={'2px'}
                          style={{ borderRadius: '0px 6px 6px 0px' }}
                          bg={'black60'}
                          minH={'100%'}
                          h={'100%'}
                        >
                          <Icon
                            size={'largeMedium'}
                            primaryColor={'grayJanice'}
                            type={'curved'}
                            name={'Password'}
                          />
                        </Stack>
                      ),
                    }}
                  />
                </>
              )
            }}
          />
          <Typography color="black100" variant="h5">
            Confirm password
          </Typography>
          <form.Field
            name="confirmPassword"
            validators={{
              onChangeListenTo: ['currentPassword'],
              onChange: ({ value, fieldApi }) => {
                if (value !== fieldApi.form.getFieldValue('currentPassword')) {
                  return 'Passwords do not match'
                }
                return undefined
              },
            }}
            children={(field) => {
              return (
                <>
                  <Input
                    type="password"
                    placeholder="Write the confirm password"
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
                    postfixChildren={{
                      width: '32px',
                      left: '4px',
                      right: '0px',
                      children: (
                        <Stack
                          alignItems={'center'}
                          justifyContent={'center'}
                          p={'2px'}
                          style={{ borderRadius: '0px 6px 6px 0px' }}
                          bg={'black60'}
                          minH={'100%'}
                          h={'100%'}
                        >
                          <Icon
                            size={'largeMedium'}
                            primaryColor={'grayJanice'}
                            type={'curved'}
                            name={'Password'}
                          />
                        </Stack>
                      ),
                    }}
                  />
                </>
              )
            }}
          />
          <Typography color="black100" variant="h5">
            Phone
          </Typography>
          <form.Field
            name="phone"
            validators={{
              onChange: validationSchema.shape.phone,
            }}
            children={(field) => {
              return (
                <>
                  <Input
                    format="+7 (9##) ###-##-##"
                    mask="_"
                    formatType="tel"
                    placeholder="Write the phone"
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
                    postfixChildren={{
                      width: '32px',
                      left: '4px',
                      right: '0px',
                      children: (
                        <Stack
                          alignItems={'center'}
                          justifyContent={'center'}
                          p={'2px'}
                          style={{ borderRadius: '0px 6px 6px 0px' }}
                          bg={'black60'}
                          minH={'100%'}
                          h={'100%'}
                        >
                          <Icon
                            size={'largeMedium'}
                            primaryColor={'grayJanice'}
                            type={'curved'}
                            name={'Call'}
                          />
                        </Stack>
                      ),
                    }}
                  />
                </>
              )
            }}
          />
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <>
                <Button
                  width="100%"
                  type="submit"
                  isDisabled={!canSubmit}
                  genre={'greenTransparent'}
                  size={'small'}
                >
                  {isSubmitting ? '...' : 'Submit'}
                </Button>
                <Button
                  type="reset"
                  width="100%"
                  genre={'grayBorder'}
                  size={'small'}
                  onClick={() => form.reset()}
                >
                  Reset
                </Button>
              </>
            )}
          />
        </>
      </Stack>
    </form>
  )
}

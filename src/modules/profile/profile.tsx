import { useAxiosWebId, useGetSSOAuthProfile } from '@jenesei-software/jenesei-web-id-api'
import { useForm } from '@tanstack/react-form'
import { yupValidator } from '@tanstack/yup-form-adapter'
import moment from 'moment'
import { FC } from 'react'
import * as yup from 'yup'

import { Icon } from '@assets/library-icon'

import { Form } from '@forms/default'

import { Button } from '@components/button'
import { DatePicker } from '@components/date'
import { Divider } from '@components/divider'
import { Stack } from '@components/flex'
import { Input, InputPhone } from '@components/input'
import { SelectCountry } from '@components/select'
import { Typography } from '@components/typography'

import {
  validationCountryCode,
  validationDateOfBirthday,
  validationEmailWithCheck,
  validationFirstName,
  validationLastName,
  validationNickNameWithCheck,
  validationPassword,
  validationPhone,
} from '@functions/schema'

import { ModuleProfileProps, ModuleProfileWrapper } from '.'

export const ModuleProfile: FC<ModuleProfileProps> = () => {
  const { data: dataProfile } = useGetSSOAuthProfile({ retry: false })
  const { axiosInstance } = useAxiosWebId()

  const form = useForm({
    defaultValues: {
      nickname: dataProfile?.nickname ?? '',
      firstName: dataProfile?.firstName ?? '',
      lastName: dataProfile?.lastName ?? '',
      phone: '',
      email: '',
      countryCode: '',
      countryDialCode: '',
      lengthNumberWithoutCountryDialCode: 0,
      numberWithoutCountryDialCode: '',
      dateOfBirthday: 0,
      currentPassword: '12345678',
      confirmPassword: '',
    },
    onSubmit: async ({ value }) => {
      const result = {
        nickname: value.nickname.trim(),
        email: value.email.trim(),
        firstName: value.firstName.trim(),
        lastName: value.lastName.trim(),
        dateOfBirthday: value.dateOfBirthday,
        phone: value.phone.trim(),
        currentPassword: value.currentPassword.trim(),
        confirmPassword: value.confirmPassword.trim(),
        country: value.countryCode.trim(),
        countryDialCode: value.countryDialCode.trim(),
      }
      console.log('result', result)
    },
    asyncDebounceMs: 500,
    validatorAdapter: yupValidator({
      transformErrors: (errors) => errors[0],
    }),
  })
  const isLoading = false
  const validationSchema = {
    nickname: validationNickNameWithCheck(axiosInstance),
    email: validationEmailWithCheck(axiosInstance),
    firstName: validationFirstName,
    lastName: validationLastName,
    dateOfBirthday: validationDateOfBirthday(18),
    phone: (phoneLength: number) => validationPhone(phoneLength),
    currentPassword: validationPassword,
    countryCode: validationCountryCode,
  }

  const defaultSize = 'medium'
  const defaultGenre = 'grayBorder'

  return (
    <ModuleProfileWrapper>
      <Typography weight={700} variant="h6" color="graySarah">
        Jenesei ID
      </Typography>
      <Divider height="2px" color="graySarah" />
      <Form handleSubmit={form.handleSubmit}>
        <form.Field
          name="dateOfBirthday"
          validators={{
            onBlur: validationSchema.dateOfBirthday,
          }}
        >
          {(field) => {
            const startDate = moment.utc().subtract(100, 'years').startOf('year').valueOf()
            const endDate = moment.utc().startOf('year').valueOf()
            return (
              <Stack flexDirection="column" gap="4px">
                <Typography variant="h7">Date of Birthday</Typography>
                <DatePicker
                  placeholder="Choice your date of birthday"
                  id={field.name}
                  name={field.name}
                  isOnClickClose
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={defaultGenre || 'grayBorder'}
                  startDate={startDate}
                  isDisabled
                  endDate={endDate}
                  size={defaultSize || 'medium'}
                  inputProps={{
                    isError: !!field.state.meta.errors.length,
                    errorMessage: field.state.meta.errors?.[0]?.toString(),
                  }}
                />
              </Stack>
            )
          }}
        </form.Field>
        <form.Field
          name="countryCode"
          validators={{
            onChange: validationSchema.countryCode,
          }}
        >
          {(field) => (
            <Stack flexDirection="column" gap="4px">
              <Typography variant="h7">Country</Typography>
              <SelectCountry
                placeholder="Choice your country"
                id={field.name}
                name={field.name}
                value={field.state.value}
                isDisabled
                onBlur={field.handleBlur}
                onChange={(countryCode, countryDialCode, lengthNumberWithoutCountryDialCode) => {
                  field.handleChange(countryCode)
                  field.form.setFieldValue('countryDialCode', countryDialCode)
                  field.form.setFieldValue('lengthNumberWithoutCountryDialCode', lengthNumberWithoutCountryDialCode)
                }}
                genre={defaultGenre || 'grayBorder'}
                size={defaultSize || 'medium'}
                inputProps={{
                  isError: !!field.state.meta.errors.length,
                  errorMessage: field.state.meta.errors?.[0]?.toString(),
                }}
              />
            </Stack>
          )}
        </form.Field>
        <form.Field
          name="phone"
          validators={{
            onChangeListenTo: ['countryDialCode', 'countryCode', 'lengthNumberWithoutCountryDialCode'],
            onBlurListenTo: ['countryDialCode', 'countryCode', 'lengthNumberWithoutCountryDialCode'],
            onChange: (value) => {
              const lengthNumberWithoutCountryDialCode = value.fieldApi.form.getFieldValue(
                'lengthNumberWithoutCountryDialCode',
              )
              if (!lengthNumberWithoutCountryDialCode) return
              const schema = validationSchema.phone(lengthNumberWithoutCountryDialCode)
              try {
                schema.validateSync(value.value)

                return undefined
              } catch (error) {
                if (error instanceof yup.ValidationError) {
                  return error.message
                }

                return 'Validation error'
              }
            },
          }}
        >
          {(field) => {
            const countryCode = field.form.getFieldValue('countryCode')
            const countryDialCode = field.form.getFieldValue('countryDialCode')
            return (
              <Stack flexDirection="column" gap="4px">
                <Typography variant="h7">Phone</Typography>
                <InputPhone
                  countryDialCode={countryDialCode}
                  countryCode={countryCode}
                  placeholder="Write the phone"
                  id={field.name}
                  isDisabled
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
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
                        <Icon size={'largeMedium'} primaryColor={'grayJanice'} type={'curved'} name={'Call'} />
                      </Stack>
                    ),
                  }}
                />
              </Stack>
            )
          }}
        </form.Field>
        <form.Field
          name="firstName"
          validators={{
            onChange: validationSchema.firstName,
          }}
        >
          {(field) => (
            <Stack flexDirection="column" gap="4px">
              <Typography variant="h7">First name</Typography>
              <Input
                isDisabled
                autocomplete="given-name"
                placeholder="Write the first name"
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                genre={defaultGenre || 'grayBorder'}
                size={defaultSize || 'medium'}
                isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                errorMessage={field.state.meta.errors?.[0]?.toString()}
              />
            </Stack>
          )}
        </form.Field>
        <form.Field
          name="lastName"
          validators={{
            onChange: validationSchema.lastName,
          }}
        >
          {(field) => {
            return (
              <Stack flexDirection="column" gap="4px">
                <Typography variant="h7">Last name</Typography>
                <Input
                  autocomplete="family-name"
                  placeholder="Write the last name"
                  id={field.name}
                  isDisabled
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                  errorMessage={field.state.meta.errors?.[0]?.toString()}
                />
              </Stack>
            )
          }}
        </form.Field>
        <form.Field
          name="email"
          validators={{
            onBlurAsync: validationSchema.email,
          }}
        >
          {(field) => (
            <Stack flexDirection="column" gap="4px">
              <>
                <Typography variant="h7">Email</Typography>
                <Input
                  autocomplete="email"
                  placeholder="Write the Email"
                  type="email"
                  isDisabled
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                  errorMessage={field.state.meta.errors?.[0]?.toString()}
                />
              </>
            </Stack>
          )}
        </form.Field>
        <form.Field
          name="nickname"
          validators={{
            onBlurAsync: validationSchema.nickname,
          }}
        >
          {(field) => (
            <Stack flexDirection="column" gap="4px">
              <>
                <Typography variant="h7">Nickname</Typography>
                <Input
                  autocomplete="username"
                  placeholder="Write the nickname"
                  id={field.name}
                  isDisabled
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
                  errorMessage={field.state.meta.errors?.[0]?.toString()}
                />
              </>
            </Stack>
          )}
        </form.Field>
        <form.Field
          name="currentPassword"
          validators={{
            onChangeListenTo: ['confirmPassword'],
            onChange: validationSchema.currentPassword,
          }}
        >
          {(field) => (
            <Stack flexDirection="column" gap="4px">
              <>
                <Typography variant="h7">Current password</Typography>
                <Input
                  autocomplete="new-password"
                  type="password"
                  placeholder="Write the current password"
                  id={field.name}
                  isDisabled
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
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
                        <Icon size={'largeMedium'} primaryColor={'grayJanice'} type={'curved'} name={'Password'} />
                      </Stack>
                    ),
                  }}
                />
              </>
            </Stack>
          )}
        </form.Field>
        <form.Field
          name="confirmPassword"
          validators={{
            onChangeListenTo: ['currentPassword'],
            onBlurListenTo: ['currentPassword'],
            onChange: ({ value, fieldApi }) => {
              if (value !== fieldApi.form.getFieldValue('currentPassword')) {
                return 'Passwords do not match'
              }
              return undefined
            },
          }}
        >
          {(field) => {
            // const currentPasswordInfo = field.form.getFieldMeta('currentPassword')
            return (
              <Stack flexDirection="column" gap="4px">
                <Typography variant="h7">Confirm password</Typography>
                <Input
                  autocomplete="new-password"
                  // isDisabled={!currentPasswordInfo?.isTouched || !!currentPasswordInfo?.errors.length}
                  type="password"
                  isDisabled
                  placeholder="Write the confirm password"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  genre={defaultGenre || 'grayBorder'}
                  size={defaultSize || 'medium'}
                  isError={!!field.state.meta.isTouched && !!field.state.meta.errors.length}
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
                        <Icon size={'largeMedium'} primaryColor={'grayJanice'} type={'curved'} name={'Password'} />
                      </Stack>
                    ),
                  }}
                />
              </Stack>
            )
          }}
        </form.Field>
        <form.Subscribe selector={(state) => [state.canSubmit]}>
          {() => (
            <Stack gap="20px">
              <Button
                flex="1"
                type="submit"
                isOnlyLoading
                // isDisabled={!canSubmit || isLoading}
                isDisabled
                isLoading={isLoading}
                genre={'greenTransparent'}
                size={defaultSize}
              >
                <Typography variant="h7">Save</Typography>
              </Button>
              <Button
                flex="1"
                isDisabled
                //  isDisabled={!canSubmit || isLoading}
                genre={'blackBorder'}
                size={defaultSize}
              >
                <Typography variant="h7">Reset</Typography>
              </Button>
            </Stack>
          )}
        </form.Subscribe>
      </Form>
    </ModuleProfileWrapper>
  )
}

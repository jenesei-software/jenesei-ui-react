export function plusPhoneNumber(phoneNumber: string): string {
  return '+79' + phoneNumber
}

export function minusPhoneNumberPrefix(phoneNumber: string): string {
  if (phoneNumber.startsWith('+79')) {
    return phoneNumber.slice(3)
  } else {
    return phoneNumber
  }
}

export function formatPhoneNumber(phoneNumber: string): string {
  const cleanedNumber = phoneNumber.replace(/\D/g, '')
  if (cleanedNumber.length !== 11) {
    throw new Error('Invalid phone number format')
  }
  const country_code = cleanedNumber.slice(0, 1)
  const region_code = cleanedNumber.slice(1, 4)
  const rest_of_number = cleanedNumber.slice(4)

  const formattedNumber = `+${country_code} (${region_code}) ${rest_of_number.slice(0, 3)}-${rest_of_number.slice(3, 5)}-${rest_of_number.slice(5)}`

  return formattedNumber
}

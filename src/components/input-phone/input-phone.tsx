import { useEffect, useState } from 'react'

import { InputPhoneProps, StyledInputPhone } from '.'

export const InputPhone = (props: InputPhoneProps) => {
  const [value, setValue] = useState(props.value || '')
  const [viewValue, setViewValue] = useState()

  const handleChange = (inputValue: string) => {
    setViewValue(applyMask(inputValue))
  }

  const applyMask = (inputValue: string) => {
    console.log(inputValue)

    let maskedValue = ''
    const j = 0

    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue.length <= props.format.length) {
        if (props.format[i] === '_') {
          maskedValue += inputValue[i]
        } else {
          maskedValue += props.format[i]
        }
      } else {
        maskedValue = viewValue
      }

      // maskedValue += inputValue[j]
      // j++;
      // } else {
      //   // if(inputValue[j])
      //   // maskedValue += props.format[i]
      // }
    }

    return maskedValue
  }

  return (
    <StyledInputPhone
      {...props}
      value={viewValue}
      placeholder={props.placeholderFormat}
      onChange={handleChange}
    />
  )
}

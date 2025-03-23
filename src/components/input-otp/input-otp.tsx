import { KeyboardEvent, useCallback, useRef, useState } from 'react'

import { Input } from '@local/main'

import { InputOTPProps, InputOTPWrapper } from '.'

export const InputOTP = (props: InputOTPProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(props.length).fill(''))
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return
      const newOtp = [...otp]
      newOtp[index] = value.slice(-1)
      setOtp(newOtp)

      if (newOtp.every(char => char !== '')) {
        props.onComplete(newOtp.join(''))
      }

      if (value && index < otp.length - 1) {
        setTimeout(() => {
          inputsRef.current[index + 1]?.focus()
        }, 0)
      }
    },
    [otp, props]
  )

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowRight' && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus()
    }

    if (e.key === 'ArrowLeft' && index > 0) {
      const prevInput = inputsRef.current[index - 1]
      if (prevInput) {
        prevInput.focus()
        setTimeout(() => prevInput.setSelectionRange(1, 1), 0) // 🔥 Курсор в конец
      }
    }

    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }
  return (
    <InputOTPWrapper>
      {otp.map((digit, index) => (
        <Input
          width="asHeight"
          key={index}
          tabIndex={index + 1}
          ref={el => {
            inputsRef.current[index] = el
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={value => handleChange(index, value)}
          onKeyDown={e => handleKeyDown(index, e)}
          genre={props.genre}
          size={props.size}
        />
      ))}
    </InputOTPWrapper>
  )
}

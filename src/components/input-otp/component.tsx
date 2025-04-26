import { FocusEvent, KeyboardEvent, useCallback, useRef, useState } from 'react'

import { InputOTPProps, InputOTPWrapper } from '.'
import { Input } from '../input'

export const InputOTP = (props: InputOTPProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(props.length).fill(''))
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return

      setOtp(prevOtp => {
        const newOtp = [...prevOtp]
        newOtp[index] = value.slice(-1)

        if (newOtp.every(char => char !== '')) {
          props.onComplete(newOtp.join(''))
        }

        if (value && index < prevOtp.length - 1) {
          setTimeout(() => {
            inputsRef.current[index + 1]?.focus()
          }, 0)
        }

        return newOtp
      })
    },
    [props]
  )

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    const input = inputsRef.current[index]

    if (!input) return

    if (e.key === 'ArrowRight') {
      const nextIndex = index < otp.length - 1 ? index + 1 : 0
      const nextInput = inputsRef.current[nextIndex]

      if (nextInput) {
        nextInput.focus()
        setTimeout(() => nextInput.setSelectionRange(0, nextInput.value.length), 0)
      }
    }

    if (e.key === 'ArrowLeft') {
      const prevIndex = index > 0 ? index - 1 : otp.length - 1
      const prevInput = inputsRef.current[prevIndex]

      if (prevInput) {
        prevInput.focus()
        setTimeout(() => prevInput.setSelectionRange(0, prevInput.value.length), 0)
      }
    }

    if (e.key === 'Backspace') {
      if (input.value) {
        setTimeout(() => input.setSelectionRange(0, input.value.length), 0)
      } else if (index > 0) {
        setTimeout(() => {
          const prevInput = inputsRef.current[index - 1]
          if (prevInput) {
            prevInput.focus()
            prevInput.setSelectionRange(0, prevInput.value.length)
          }
        }, 0)
      }
    }
  }

  const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setTimeout(() => e.target.setSelectionRange(0, e.target.value.length), 0)
  }, [])
  return (
    <InputOTPWrapper $size={props.size}>
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
          onFocus={handleFocus}
          onChange={value => handleChange(index, value)}
          onKeyDown={e => handleKeyDown(index, e)}
          genre={props.genre}
          size={props.size}
        />
      ))}
    </InputOTPWrapper>
  )
}

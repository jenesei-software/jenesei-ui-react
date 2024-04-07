import { StyledUIInputPhone, InputPhoneProps } from '.'
import { UIFrameFlexCenter } from '../../main'
import { useEffect, useState } from 'react'

export const InputPhone = (props: InputPhoneProps) => {
  const [format, setFormat] = useState<string>('+7 (900) 000-00-00')
  useEffect(() => {
    if (props.isNotEmpty) {
      setFormat('+7 (9##) ###-##-##')
    }
  }, [props.isNotEmpty])
  return (
    <UIFrameFlexCenter
      className={props.className}
      width="100%"
      $position="relative"
    >
      <StyledUIInputPhone
        $genre={props.genre}
        $isLeftContainer={props.isLeftContainer}
        value={props.value}
        $isPhoneFocus={format === '+7 (9##) ###-##-##'}
        onValueChange={({ value }) => props.onChange && props.onChange(value)}
        placeholder="+7 (900) 000-00-00"
        format={format}
        mask="_"
        displayType="input"
        allowEmptyFormatting
        inputMode="tel"
        onFocus={() => {
          setFormat('+7 (9##) ###-##-##')
        }}
        onBlur={() => {
          if (!props.value) {
            setFormat('+7 (900) 000-00-00')
          }
        }}
        required={props.isRequired}
        readOnly={props.isReadOnly}
        $isError={props.isError}
        $isOnlyText={props.isOnlyText}
        $isFocus={props.isFocus}
        disabled={props.isDisabled}
        $isBold={props.isBold}
      />
    </UIFrameFlexCenter>
  )
}

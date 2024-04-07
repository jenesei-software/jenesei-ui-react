import { InputPriceProps, StyledInputPrice } from '.'
import { InputDefaultErrorMessage } from '../../main'
import { UIFrameFlexCenter } from '../../main'
import { memo } from 'react'

export const InputPrice = memo((props: InputPriceProps) => {
  return (
    <UIFrameFlexCenter
      className={props.className}
      width="100%"
      $position="relative"
    >
      <StyledInputPrice
        disabled={props.isDisabled}
        $genre={props.genre}
        defaultValue={props.defaultValue}
        value={props.value}
        {...props.register}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        required={props.isRequired}
        readOnly={props.isReadOnly}
        $isError={props.isError}
        $isOnlyText={props.isOnlyText}
        $isFocus={props.isFocus}
        {...props.libraryProps}
      />
      {props.isError && (
        <InputDefaultErrorMessage>
          {props.errorMessage}
        </InputDefaultErrorMessage>
      )}
    </UIFrameFlexCenter>
  )
})

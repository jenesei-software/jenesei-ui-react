import {
  InputDefaultErrorMessage,
  InputDefaultPrefixContent,
  InputDefaultProps,
  StyledUIInputDefault,
} from '.'
import { UIFrameFlexCenter } from '../../main'
import { memo } from 'react'

export const InputDefault = memo((props: InputDefaultProps) => {
  return (
    <UIFrameFlexCenter
      className={props.className}
      width="100%"
      $position="relative"
      id={props.id}
    >
      {props.prefixContent && (
        <InputDefaultPrefixContent
          $width={props.prefixContent.width}
          $left={props.prefixContent.left}
        >
          {props.prefixContent.content}
        </InputDefaultPrefixContent>
      )}
      <StyledUIInputDefault
        step={props.step}
        minLength={props.minLength}
        maxLength={props.maxLength}
        $isOnlyText={props.isOnlyText}
        $isFocus={props.isFocus}
        disabled={props.isDisabled}
        readOnly={props.isReadOnly}
        $isError={props.isError}
        required={props.isRequired}
        $prefixWidth={props.prefixContent && props.prefixContent.width}
        $prefixLeft={props.prefixContent && props.prefixContent.left}
        $prefixRight={props.prefixContent && props.prefixContent.right}
        $genre={props.genre}
        onChange={(event) =>
          props.onChange && props.onChange(event.target.value)
        }
        defaultValue={props.defaultValue}
        value={props.value}
        {...props.register}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        type={props.type}
      ></StyledUIInputDefault>
      {props.isError && (
        <InputDefaultErrorMessage>
          {props.errorMessage}
        </InputDefaultErrorMessage>
      )}
    </UIFrameFlexCenter>
  )
})

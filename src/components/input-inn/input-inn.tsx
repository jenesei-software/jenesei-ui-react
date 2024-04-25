import { useTheme } from 'styled-components'

import { InputINNProps, StyledInputINN } from '.'
import {
  InputDefaultErrorMessage,
  InputDefaultPostfixChildren,
  InputDefaultPrefixChildren,
  InputDefaultStyledModalLoading,
  StyledInputDefaultWrapper,
} from '../input-default'

export const InputINN = (props: InputINNProps) => {
  const theme = useTheme()

  return (
    <StyledInputDefaultWrapper
      className={props.className}
      $isDisabled={props.isDisabled}
      $width={props.width}
    >
      {props.prefixChildren && (
        <InputDefaultPrefixChildren {...props.prefixChildren} />
      )}
      <StyledInputINN
        $isFocus={props.isFocus}
        $isError={props.isError}
        $isLoading={props.isLoading}
        $postfixChildren={props?.postfixChildren}
        $prefixChildren={props?.prefixChildren}
        $genre={props.genre}
        $size={props.size}
        $genreType={props.genreType}
        disabled={props.isDisabled}
        readOnly={props.isReadOnly}
        required={props.isRequired}
        defaultValue={props.defaultValue}
        value={props.value}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onValueChange={({ value }) => props.onChange && props.onChange(value)}
        format="### ### ### ###"
        placeholder="000 000 000 000"
        mask=""
      />
      {props.isError && props.errorMessage && (
        <InputDefaultErrorMessage>
          {props.errorMessage}
        </InputDefaultErrorMessage>
      )}
      {props.postfixChildren && (
        <InputDefaultPostfixChildren {...props.postfixChildren} />
      )}
      {props.isLoading && (
        <InputDefaultStyledModalLoading
          size={props.size}
          color={theme.colors.input[props.genre][props.genreType].color.rest}
        />
      )}
    </StyledInputDefaultWrapper>
  )
}

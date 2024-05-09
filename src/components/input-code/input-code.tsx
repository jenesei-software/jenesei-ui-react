import { useTheme } from 'styled-components'

import { InputCodeProps, StyledInputCode } from '.'
import {
  InputDefaultErrorMessage,
  InputDefaultPostfixChildren,
  InputDefaultPrefixChildren,
  InputDefaultStyledModalLoading,
  StyledInputDefaultWrapper,
} from '../input-default'

function createPattern(length: number, value: string) {
  const realLength = length * 2 - 1
  const patternArray: (string | number)[] = Array.from(
    { length: realLength },
    (_, index) => (index % 2 === 0 ? value : ' '),
  )
  return patternArray.join('')
}

export const InputCode = (props: InputCodeProps) => {
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
      <StyledInputCode
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
        format={createPattern(props.length, '#')}
        placeholder={createPattern(props.length, '_')}
        mask="_"
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

import { InputCodeProps } from '.'
import {
  StyledInputStringWrapper,
  StyledInputStringPrefixContent,
  StyledInputStringPostfixContent,
} from '../input-string'
import { StyledInputCode } from './input-string.styles'

export const InputCode = (props: InputCodeProps) => {
  function createPattern(length: number, value: string) {
    const realLength = length * 2 - 1
    const patternArray: (string | number)[] = Array.from(
      { length: realLength },
      (_, index) => (index % 2 === 0 ? value : ' ')
    )
    return patternArray.join('')
  }
  return (
    <StyledInputStringWrapper className={props.className}>
      {props.prefixContent && (
        <StyledInputStringPrefixContent
          $theme={props.theme}
          $prefixContent={props.prefixContent}
          onClick={props.prefixContent.onClick}
        >
          {props.prefixContent.content}
        </StyledInputStringPrefixContent>
      )}
      <StyledInputCode
        value={props.value}
        onValueChange={({ value }) => props.onChange(value)}
        format={createPattern(props.length, '#')}
        placeholder={createPattern(props.length, '_')}
        mask="_"
      />
      {props.postfixContent && (
        <StyledInputStringPostfixContent
          $theme={props.theme}
          $postfixContent={props.postfixContent}
          onClick={props.postfixContent.onClick}
        >
          {props.postfixContent.content}
        </StyledInputStringPostfixContent>
      )}
    </StyledInputStringWrapper>
  )
}

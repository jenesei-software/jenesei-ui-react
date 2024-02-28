import {
  InputStringProps,
  StyledInputString,
  StyledInputStringPostfixContent,
  StyledInputStringPrefixContent,
  StyledInputStringWrapper,
} from '.'

/**
 * String input.
 */
export function InputString(props: InputStringProps): JSX.Element {
  return (
    <StyledInputStringWrapper className={props.className}>
      {props.prefixContent && (
        <StyledInputStringPrefixContent
          $theme={props.theme}
          $prefixContent={props.prefixContent}
        >
          {props.prefixContent.content}
        </StyledInputStringPrefixContent>
      )}
      <StyledInputString
        $theme={props.theme}
        $css={props.css}
        $prefixContent={props.prefixContent}
        $postfixContent={props.postfixContent}
        $readOnly={props.readOnly}
        $disabled={props.disabled}
        {...props.register}
      />
      {props.postfixContent && (
        <StyledInputStringPostfixContent
          $theme={props.theme}
          $postfixContent={props.postfixContent}
        >
          {props.postfixContent.content}
        </StyledInputStringPostfixContent>
      )}
    </StyledInputStringWrapper>
  )
}

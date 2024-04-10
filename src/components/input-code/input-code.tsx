import { useTheme } from 'styled-components'

import { InputCodeProps, StyledInputCode, StyledSpanInterM12Error } from '.'
import { UIFrameFlexCenter } from '../../main'

export const InputCode = (props: InputCodeProps) => {
  const theme = useTheme()

  function createPattern(length: number, value: string) {
    const realLength = length * 2 - 1
    const patternArray: (string | number)[] = Array.from(
      { length: realLength },
      (_, index) => (index % 2 === 0 ? value : ' '),
    )
    return patternArray.join('')
  }
  return (
    <UIFrameFlexCenter
      className={props.className}
      width="100%"
      $position="relative"
    >
      {props.isError && (
        <StyledSpanInterM12Error color={theme.colors.danger['100']}>
          {props.errorMessage}
        </StyledSpanInterM12Error>
      )}
      <StyledInputCode
        $genre={props.genre}
        $size={props.size}
        value={props.value}
        onValueChange={({ value }) => props.onChange && props.onChange(value)}
        format={createPattern(props.length, '#')}
        placeholder={createPattern(props.length, '_')}
        mask="_"
        required={props.isRequired}
        readOnly={props.isReadOnly}
        $isError={props.isError}
        $isOnlyText={props.isOnlyText}
        $isFocus={props.isFocus}
        disabled={props.isDisabled}
      />
    </UIFrameFlexCenter>
  )
}

import { InputINNProps, StyledInputINN } from '.'
import { UIFrameFlexCenter } from '../../main'

export const InputINN = (props: InputINNProps) => {
  return (
    <UIFrameFlexCenter
      className={props.className}
      width="100%"
      $position="relative"
    >
      <StyledInputINN
        $genre={props.genre}
        value={props.value}
        onValueChange={({ value }) => props.onChange && props.onChange(value)}
        format="### ### ### ###"
        placeholder="000 000 000 000"
        mask=""
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

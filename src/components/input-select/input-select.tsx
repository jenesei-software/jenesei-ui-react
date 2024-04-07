import {
  InputSelectOptionType,
  InputSelectProps,
  StyledSelect,
  StyledSelectStyledSpanInterR16,
  UserMultiValueLabelComma,
} from '.'
import { UIFrameFlexCenter, Checkbox } from '../../main'
import { memo } from 'react'
import {
  MultiValueGenericProps,
  NoticeProps,
  OptionProps,
  ValueContainerProps,
  components,
} from 'react-select'

export const InputSelect = memo((props: InputSelectProps) => {
  return (
    <UIFrameFlexCenter
      className={props.className}
      width="100%"
      $position="relative"
    >
      <StyledSelect
        $selectOptionStyle={props.selectOptionStyle}
        $isHideArrow={props.isHideArrow}
        $background={props.background}
        $color={props.color}
        $genre={props.genre}
        isAlwaysPlaceholder={props.isAlwaysPlaceholder}
        iconType={props.iconType}
        isMulti={props.isMulti}
        closeMenuOnSelect={props.isCloseMenuOnSelect}
        isDisabled={props.isDisabled}
        value={props.value}
        menuPosition={props.menuPosition}
        defaultValue={props.defaultValue}
        isOptionDisabled={(option) =>
          !!(option as InputSelectOptionType).isContentHidden ||
          !!(option as InputSelectOptionType).isDisabled
        }
        components={{
          Option: UserOption,
          MultiValueLabel: UserMultiValueLabel,
          DropdownIndicator: props.isHideIndicatorSeparator
            ? () => null
            : components.DropdownIndicator,
          IndicatorSeparator: props.isHideIndicatorSeparator
            ? () => null
            : components.IndicatorSeparator,
          ValueContainer: props.isAlwaysPlaceholder
            ? CustomValueContainer
            : components.ValueContainer,
          NoOptionsMessage: CustomNoOptionsMessage,
        }}
        menuIsOpen={props.isMenuIsOpen}
        className="input-select-container"
        classNamePrefix="input-select"
        options={props.options}
        placeholder={props.placeholder}
        isSearchable={props.isSearchable || false}
        onChange={(event) => props.onChange && props.onChange(event)}
        onBlur={props.onBlur}
        hideSelectedOptions={false}
      />
    </UIFrameFlexCenter>
  )
})

const UserOption = (props: OptionProps) => {
  return (
    <components.Option {...props}>
      {!(props.data as InputSelectOptionType)?.isIconHidden &&
        props.selectProps.iconType && (
          <Checkbox
            genre={props.selectProps.iconType}
            checked={props.isSelected}
          />
        )}
      <StyledSelectStyledSpanInterR16>
        {(props.data as InputSelectOptionType)?.content
          ? (props.data as InputSelectOptionType).content
          : props.children}
      </StyledSelectStyledSpanInterR16>
    </components.Option>
  )
}

const UserMultiValueLabel = (props: MultiValueGenericProps) => {
  return (
    <components.MultiValueLabel {...props}>
      {props.data.label}
      <UserMultiValueLabelComma>,</UserMultiValueLabelComma>
    </components.MultiValueLabel>
  )
}

const CustomValueContainer = (props: ValueContainerProps) => {
  return (
    <components.ValueContainer {...props}>
      {props.selectProps.placeholder}
    </components.ValueContainer>
  )
}

const CustomNoOptionsMessage = (props: NoticeProps) => {
  return (
    <components.NoOptionsMessage {...props}>
      <StyledSelectStyledSpanInterR16>
        {props.selectProps.customNoOptionsMessage && 'No options'}
      </StyledSelectStyledSpanInterR16>
    </components.NoOptionsMessage>
  )
}

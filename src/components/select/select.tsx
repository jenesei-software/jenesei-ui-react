import { memo, useState } from 'react'
import {
  ActionMeta,
  GroupBase,
  InputActionMeta,
  MultiValue,
  MultiValueGenericProps,
  NoticeProps,
  OptionProps,
  SingleValue,
  ValueContainerProps,
  components,
} from 'react-select'
import Select from 'react-select/base'

import {
  InputSelectOptionType,
  InputSelectProps,
  StyledSelectStyledSpanRobotoR16,
  StyledSelectWrapper,
  UserMultiValueLabelComma,
} from '.'
import { Checkbox } from '../../main'

export const CustomSelect = memo((props: InputSelectProps) => {
  const [isMenuIsOpen, setIsMenuIsOpen] = useState<boolean>(
    props.isMenuIsOpen ?? false,
  )
  return (
    <StyledSelectWrapper
      $isHideArrow={props.isHideArrow}
      $isCustomPlaceholder={props.isCustomPlaceholder}
      $genre={props.genre}
      $isError={props.isError}
      $size={props.size}
    >
      {props.value && (
        <Select
          isMulti={props.isMulti}
          isDisabled={props.isDisabled}
          menuIsOpen={isMenuIsOpen}
          isSearchable={props.isSearchable || false}
          closeMenuOnSelect={props.isCloseMenuOnSelect}
          value={props.value}
          menuPosition={props.menuPosition}
          components={{
            Option: UserOption,
            MultiValueLabel: UserMultiValueLabel,
            DropdownIndicator: props.isHideIndicatorSeparator
              ? () => null
              : components.DropdownIndicator,
            IndicatorSeparator: props.isHideIndicatorSeparator
              ? () => null
              : components.IndicatorSeparator,
            ValueContainer: props.isCustomPlaceholder
              ? CustomValueContainer
              : components.ValueContainer,
            NoOptionsMessage: CustomNoOptionsMessage,
          }}
          options={props.options}
          placeholder={props.placeholder}
          onChange={(
            newValue:
              | SingleValue<InputSelectOptionType>
              | MultiValue<InputSelectOptionType>,
            actionMeta: ActionMeta<InputSelectOptionType>,
          ) => props.onChange && props.onChange(newValue, actionMeta)}
          onMenuScrollToBottom={() =>
            props.fetchNextPage && props.fetchNextPage()
          }
          onInputChange={(newValue: string, actionMeta: InputActionMeta) =>
            props.onInputChange && props.onInputChange(newValue, actionMeta)
          }
          onMenuOpen={() => setIsMenuIsOpen(!isMenuIsOpen)}
          onMenuClose={() => setIsMenuIsOpen(!isMenuIsOpen)}
          inputValue=""
          className="input-select-container"
          classNamePrefix="input-select"
        />
      )}
    </StyledSelectWrapper>
  )
})

const UserOption = (
  props: OptionProps<
    InputSelectOptionType,
    boolean,
    GroupBase<InputSelectOptionType>
  >,
) => {
  console.log(props)
  return (
    <components.Option {...props}>
      {!props.data.isIconHidden && (
        <Checkbox
          genre={props.data.iconGenre}
          view={props.data.iconView}
          checked={props.isSelected}
          size={props.data.iconSize}
          isHiddenBorder
        />
      )}
      <StyledSelectStyledSpanRobotoR16>
        {props.data.content ?? props.children}
      </StyledSelectStyledSpanRobotoR16>
    </components.Option>
  )
}

const UserMultiValueLabel = (
  props: MultiValueGenericProps<
    InputSelectOptionType,
    boolean,
    GroupBase<InputSelectOptionType>
  >,
) => {
  return (
    <components.MultiValueLabel {...props}>
      {props.data.label}
      <UserMultiValueLabelComma>,</UserMultiValueLabelComma>
    </components.MultiValueLabel>
  )
}

const CustomValueContainer = (
  props: ValueContainerProps<
    InputSelectOptionType,
    boolean,
    GroupBase<InputSelectOptionType>
  >,
) => {
  return (
    <components.ValueContainer {...props}>
      {props.selectProps.placeholder}
    </components.ValueContainer>
  )
}

const CustomNoOptionsMessage = (
  props: NoticeProps<
    InputSelectOptionType,
    boolean,
    GroupBase<InputSelectOptionType>
  >,
) => {
  return (
    <components.NoOptionsMessage {...props}>
      <StyledSelectStyledSpanRobotoR16>
        no-options
      </StyledSelectStyledSpanRobotoR16>
    </components.NoOptionsMessage>
  )
}

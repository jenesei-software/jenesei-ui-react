import {
  CheckboxesItem,
  CheckboxesLabel,
  CheckboxesProps,
  CheckboxesWrapper,
} from '.'
import { Checkbox } from '../../main'
import { useCallback } from 'react'

export const Checkboxes = <T extends Record<string, unknown>>(
  props: CheckboxesProps<T>
) => {
  const createMarkup = (html: string) => ({ __html: html })

  const handleCheckboxChange = useCallback(
    (item: T) => {
      const isSelected = props.value.some(
        (selectedItem) =>
          selectedItem[props.valueField] === item[props.valueField]
      )

      const updatedSelectedItems = isSelected
        ? props.value.filter(
            (selectedItem) =>
              selectedItem[props.valueField] !== item[props.valueField]
          )
        : props.multiple
          ? [...props.value, item]
          : [item]
      if (props.onChange) props.onChange(updatedSelectedItems)
    },
    [props]
  )
  return (
    <CheckboxesWrapper className={props.className}>
      {props.options.map((e, index) => {
        const isChecked = props.value.some(
          (selectedItem) =>
            selectedItem[props.valueField] === e[props.valueField]
        )
        return (
          <CheckboxesItem
            key={index}
            onClick={() => !props.isClickOnlyIcon && handleCheckboxChange(e)}
            $checked={isChecked}
          >
            <Checkbox
              genre={props.checkboxGenre}
              color={props.checkboxColor}
              size={props.checkboxSize}
              width={props.checkboxWidth}
              checked={isChecked}
              content={
                props.checkboxLabelField &&
                e?.[props.checkboxLabelField] !== undefined && (
                  <>{e[props.checkboxLabelField]}</>
                )
              }
            />
            {props.contentField && e?.[props.contentField] !== undefined ? (
              <>{e[props.contentField]}</>
            ) : (
              props.labelField &&
              e?.[props.labelField] !== undefined && (
                <CheckboxesLabel
                  dangerouslySetInnerHTML={createMarkup(
                    e[props.labelField] as string
                  )}
                />
              )
            )}
          </CheckboxesItem>
        )
      })}
    </CheckboxesWrapper>
  )
}

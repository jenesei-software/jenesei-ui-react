import { useCallback } from 'react'

import { Checkbox } from '@components/checkbox'

import {
  CheckboxChildren,
  CheckboxesItem,
  CheckboxesLabel,
  CheckboxesProps,
  CheckboxesWrapper,
  ICheckboxValue,
} from '.'

export const Checkboxes = <T extends ICheckboxValue>(
  props: CheckboxesProps<T>,
) => {
  const createMarkup = (html: string) => ({ __html: html })

  const handleCheckboxChange = useCallback(
    (item: T) => {
      const isSelected = props.value.some(
        (selectedItem) =>
          selectedItem[props.valueField] === item[props.valueField],
      )

      const updatedSelectedItems = isSelected
        ? props.value.filter(
            (selectedItem) =>
              selectedItem[props.valueField] !== item[props.valueField],
          )
        : props.multiple
          ? [...props.value, item]
          : [item]
      if (props.onChange) props.onChange(updatedSelectedItems)
    },
    [props],
  )
  return (
    <CheckboxesWrapper
      className={props.className}
      $width={props.width}
      $size={props.size}
    >
      {props.options.map((e, index) => {
        const isChecked = props.value.some(
          (selectedItem) =>
            selectedItem[props.valueField] === e[props.valueField],
        )
        return (
          <CheckboxesItem
            key={index}
            onClick={() => !props.isClickOnlyIcon && handleCheckboxChange(e)}
          >
            <Checkbox
              genre={props.checkboxGenre}
              isHiddenBorder={props.checkboxIsHiddenBorder}
              view={props.checkBoxView}
              size={props.size}
              width={props.checkboxWidth}
              checked={isChecked}
            >
              {props.labelField && e?.[props.labelField] !== undefined && (
                <CheckboxesLabel
                  dangerouslySetInnerHTML={createMarkup(
                    e[props.labelField] as string,
                  )}
                />
              )}
            </Checkbox>
            {props.childrenField && e?.[props.childrenField] !== undefined && (
              <CheckboxChildren>
                {e[props.childrenField] as React.ReactNode}
              </CheckboxChildren>
            )}
          </CheckboxesItem>
        )
      })}
    </CheckboxesWrapper>
  )
}

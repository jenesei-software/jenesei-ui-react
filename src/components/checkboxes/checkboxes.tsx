import { useCallback } from 'react'

import {
  CheckboxesItem,
  CheckboxesLabel,
  CheckboxesProps,
  CheckboxesWrapper,
} from '.'
import { Checkbox } from '../../main'

export const Checkboxes = <T extends Record<string, unknown>>(
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
    <CheckboxesWrapper className={props.className} $width={props.width}>
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
              genreType={props.checkboxGenreType}
              isHiddenBorder={props.checkboxIsHiddenBorder}
              view={props.checkBoxView}
              size={props.checkboxSize}
              width={props.checkboxWidth}
              checked={isChecked}
              children={
                props.labelField &&
                e?.[props.labelField] !== undefined && (
                  <CheckboxesLabel
                    dangerouslySetInnerHTML={createMarkup(
                      e[props.labelField] as string,
                    )}
                  />
                )
              }
            />
            {props.childrenField && e?.[props.childrenField] !== undefined && (
              <>{e[props.childrenField]}</>
            )}
          </CheckboxesItem>
        )
      })}
    </CheckboxesWrapper>
  )
}

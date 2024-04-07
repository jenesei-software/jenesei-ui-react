import {
  CheckboxesItem,
  CheckboxesLabel,
  CheckboxesProps,
  CheckboxesWrapper,
} from '.'
import { Checkbox } from '../../main'
import { useCallback } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Checkboxes = <T extends Record<string, any>>(
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
            $genre={props.genre}
            key={index}
            onClick={() => !props.isClickOnlyIcon && handleCheckboxChange(e)}
            $checked={isChecked}
          >
            <Checkbox
              genre={props.checkboxGenre}
              onChange={() => handleCheckboxChange(e)}
              checked={isChecked}
            />
            {props.contentField && e?.[props.contentField] !== undefined ? (
              <>{e[props.contentField]}</>
            ) : (
              <CheckboxesLabel
                $genre={props.genre}
                dangerouslySetInnerHTML={createMarkup(
                  e[props.labelField] as string
                )}
              />
            )}
          </CheckboxesItem>
        )
      })}
    </CheckboxesWrapper>
  )
}

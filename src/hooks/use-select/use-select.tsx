import { UseSelectProps, UseSelectWrapper } from '.'
import { useState, useMemo } from 'react'
import Select from 'react-dropdown-select'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSelect = <T extends Record<string, any>>(
  props: UseSelectProps<T> = {
    placeholder: '',
    required: false,
    multi: false,
    searchable: false,
    labelField: '',
    valueField: '',
    options: [],
    initialValue: [],
    type: 'volumetric',
    onChange: () => {},
  }
) => {
  const [values, setValue] = useState<T[] | null>(props.initialValue)

  const InputSelect = useMemo(() => {
    const SelectComponent = (params: {
      changeValue: (values: T[]) => void
      initialValue?: T[] | null
    }) => (
      <UseSelectWrapper type={props.type}>
        <Select<T>
          multi={props.multi}
          labelField={props.labelField as string}
          valueField={props.valueField as string}
          options={props.options}
          values={params.initialValue || values || []}
          dropdownPosition="bottom"
          searchable={props.searchable || false}
          onChange={(values: T[]) => {
            setValue(values)
            params.changeValue(values)
          }}
        />
      </UseSelectWrapper>
    )

    return SelectComponent
  }, [props, values])
  return { values, InputSelect }
}

import { TSelectGenre } from '.'
import { FontInterR16, SpanInterR16, UIInputPlaceholder } from '../../main'
import Select from 'react-select'
import styled, { css } from 'styled-components'
import { Styles } from 'styled-components/dist/types'

export const StyledSelectStyleUser = css<{
  $genre?: TSelectGenre
  $isHideArrow?: boolean
  $background?: string
  $color?: string
}>`
  width: 100%;
  line-height: normal;
  & .input-select__control {
    border-radius: 16px;
    background: ${(props) => props.theme.colors.gray.f8f8f8};
    height: 56px;
    min-height: 56px;
    max-height: 56px;
    border-color: transparent;
    box-shadow: none;
    border: 2px solid transparent;
    background: ${(props) =>
      props.$background || props.theme.colors.gray.f8f8f8};
    &:hover {
      border: 2px solid transparent;
    }
  }

  & .input-select__value-container {
    padding: 2px 24px;
  }
  & .input-select__placeholder {
    ${UIInputPlaceholder};
  }
  & .input-select__indicator-separator {
    background-color: transparent;
  }
  & .input-select__input-container,
  & .input-select__single-value {
    ${FontInterR16};
    color: ${(props) => props.$color || props.theme.colors.gray['1f1f1f']};
  }
  & .input-select__indicator {
    padding-right: 16px;
  }
  & .input-select__control--menu-is-open {
    border-radius: 16px 16px 0px 0px;
    background: ${(props) => props.theme.colors.gray.f8f8f8};
    border: 2px solid ${(props) => props.theme.colors.product[100]};
    border-bottom: 2px solid transparent;
    &:hover {
      border: 2px solid ${(props) => props.theme.colors.product[100]};
    }
  }
  & .input-select__menu {
    margin-top: -2px;
    background-color: ${(props) => props.theme.colors.gray.f8f8f8};
    box-shadow: none;
    border-radius: 0px 0px 16px 16px;
    overflow: hidden;
    border: 2px solid ${(props) => props.theme.colors.product[100]};
    border-top: transparent;
    z-index: 5;
  }
  & .input-select__menu-portal {
    left: auto;
    top: 54px;
    z-index: 5;
  }
  & .input-select__menu-list {
    padding: 0;
    padding-bottom: 12px;
  }
  & .input-select__option {
    ${FontInterR16};
    color: ${(props) => props.theme.colors.gray['1f1f1f']};
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0;
    padding-left: 16px;
    &:hover {
      background-color: ${(props) => props.theme.colors.gray['eef3fc']};
    }
  }
  & .input-select__option--is-focused {
    /* background-color: ${(props) => props.theme.colors.gray['eef3fc']}; */
    background-color: transparent;
  }
  & .input-select__option--is-selected {
    background-color: transparent;
  }
`

export const StyledSelectStyleUserMin = css<{
  $genre?: TSelectGenre
  $isHideArrow?: boolean
  $background?: string
  $color?: string
}>`
  ${StyledSelectStyleUser};
  & .input-select__control {
    height: 40px;
    min-height: 40px;
    max-height: 40px;
  }
  & .input-select__value-container {
    padding: 2px 16px;
  }
  & .input-select__menu-list {
    padding-bottom: 8px;
  }
`

export const StyledSelectStyleService = css<{
  $genre?: TSelectGenre
  $isHideArrow?: boolean
  $background?: string
  $color?: string
}>`
  ${StyledSelectStyleUser};
  & .input-select__control--menu-is-open {
    border: 2px solid transparent;
    background: ${(props) => props.theme.colors.white[100]};
    border-bottom: 4px solid ${(props) => props.theme.colors.gray.e3e3e6};
    &:hover {
      border: 2px solid transparent;
      border-bottom: 4px solid ${(props) => props.theme.colors.gray.e3e3e6};
    }
  }
  & .input-select__menu {
    border: 2px solid transparent;
    background: ${(props) => props.theme.colors.white[100]};
    box-shadow: 0px 7px 16px 0px ${(props) => props.theme.colors.black[10]};
  }
  & .input-select__control {
    box-shadow: 0px 2px 16px 0px ${(props) => props.theme.colors.black[10]};
  }
`

interface StyledSelectProps {
  $genre?: TSelectGenre
  $isHideArrow?: boolean
  $background?: string
  $color?: string
  $selectOptionStyle?: Styles<object>
}

export const StyledSelect = styled(Select)<StyledSelectProps>`
  width: 100%;
  & .input-select__indicator {
    color: ${(props) => props.theme.colors.black[40]} !important;
    visibility: ${(props) => (props.$isHideArrow ? 'hidden' : 'visible')};
  }
  & .input-select__value-container--is-multi {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start !important;
  }
  & .input-select__multi-value {
    min-width: min-content;
    background-color: transparent;
    margin: 0px;
    &:last-of-type {
      cursor: pointer;
      & .input-select__multi-value__label {
        & span {
          display: none;
        }
      }
    }
  }
  & .input-select__multi-value__remove {
    display: none;
  }
  & .input-select__multi-value__label {
    padding: 2px;
    ${FontInterR16};
    color: ${(props) => props.theme.colors.gray['1f1f1f']};
  }
  & .input-select__option--is-isDisabled {
    opacity: 0.5;
  }
  & .MuiCheckbox-root {
    padding: 8px;
  }
  & .input-select__control {
    /* z-index: 5; */
    &:hover {
      border: 2px solid transparent;
    }
  }
  ${(props) =>
    props.$genre === 'user'
      ? StyledSelectStyleUser
      : props.$genre === 'user-min'
        ? StyledSelectStyleUserMin
        : props.$genre === 'service'
          ? StyledSelectStyleService
          : StyledSelectStyleUser};
  ${(props) => props.$selectOptionStyle}
`

StyledSelect.defaultProps = {
  iconType: 'circle',
}

export const StyledSelectStyledSpanInterR16 = styled(SpanInterR16)`
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  width: -webkit-fill-available;
`

export const UserMultiValueLabelComma = styled.span`
  ${FontInterR16};
`

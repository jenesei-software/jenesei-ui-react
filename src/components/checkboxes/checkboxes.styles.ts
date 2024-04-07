import { CheckboxesGenreType } from '.'
import {
  FontInterR16,
  StyledUIInputDefaultProps,
  UIInputAuth,
} from '../../main'
import styled, { css } from 'styled-components'

export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`
const CheckboxesItemAuth = css<
  Pick<StyledUIInputDefaultProps, '$isFocus'> & { $checked: boolean }
>`
  ${UIInputAuth};
  align-items: center;
  gap: 10px;
  cursor: pointer;
  outline: ${(props) =>
    props.$checked
      ? `2px solid ${props.theme.colors.product[100]}`
      : `1px solid ${props.theme.colors.gray['e3e3e6']}`};
`
const CheckboxesItemAgreements = css`
  align-items: flex-start;
`

const CheckboxesItemObjectsEdit = css`
  align-items: center;
`

export const CheckboxesItem = styled.div<{
  $checked: boolean
  $genre?: CheckboxesGenreType
}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  ${(props) =>
    props.$genre === 'agreements'
      ? CheckboxesItemAgreements
      : props.$genre === 'auth'
        ? CheckboxesItemAuth
        : props.$genre === 'objects-edit'
          ? CheckboxesItemObjectsEdit
          : ''}
`

const CheckboxesLabelAuth = css`
  color: ${(props) => props.theme.colors.gray['1f1f1f']};
  & a {
    ${FontInterR16};
    text-decoration-line: underline;
    color: ${(props) => props.theme.colors.product[100]};
  }
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`
const CheckboxesLabelAgreements = css`
  color: ${(props) => props.theme.colors.gray['8a8a8a']};
  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    font-size: 14px;
  }
  & a {
    ${FontInterR16};
    text-decoration-line: underline;
    color: ${(props) => props.theme.colors.product[100]};
    @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
      font-size: 14px;
    }
  }
`

const CheckboxesLabelObjectsEdit = css`
  color: ${(props) => props.theme.colors.gray['1f1f1f']};
`

export const CheckboxesLabel = styled.div<{ $genre?: CheckboxesGenreType }>`
  ${FontInterR16};
  color: ${(props) => props.theme.colors.gray['8a8a8a']};
  user-select: none;
  ${(props) =>
    props.$genre === 'agreements'
      ? CheckboxesLabelAgreements
      : props.$genre === 'auth'
        ? CheckboxesLabelAuth
        : props.$genre === 'objects-edit'
          ? CheckboxesLabelObjectsEdit
          : ''}
`

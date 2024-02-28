import { TJeneseiTheme } from '../../theme'
import styled from 'styled-components'
import { Styles } from 'styled-components/dist/types'

export const StyledInputStringWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

/****************************************** StyledInputString *************************************************/
export interface StyledInputStringProps {
  $theme?: TJeneseiTheme
  $css?: Styles<object>
  $prefixContent?: {
    css?: Styles<object>
    width: string
    content: React.ReactNode
    left: string
    right: string
  }
  $postfixContent?: {
    css?: Styles<object>
    width: string
    content: React.ReactNode
    left: string
    right: string
  }
  $contentContent?: {
    css?: Styles<object>
    width: string
    content: React.ReactNode
    left: string
    right: string
  }
  $readOnly?: boolean
  $disabled?: boolean
}
export const StyledInputString = styled.input<StyledInputStringProps>``
StyledInputString.defaultProps = {
  $theme: 'cloud',
}

/****************************************** StyledInputStringPrefixContent *************************************************/
export interface StyledInputStringPrefixContentProps {
  $theme?: TJeneseiTheme
  $prefixContent?: {
    css?: Styles<object>
    width: string
    content: React.ReactNode
    left: string
    right: string
  }
}
export const StyledInputStringPrefixContent = styled.div<StyledInputStringPrefixContentProps>``
StyledInputStringPrefixContent.defaultProps = {
  $theme: 'cloud',
}

/****************************************** StyledInputStringPostfixContent *************************************************/
export interface StyledInputStringPostfixContentProps {
  $theme?: TJeneseiTheme
  $postfixContent?: {
    css?: Styles<object>
    width: string
    content: React.ReactNode
    left: string
    right: string
  }
}
export const StyledInputStringPostfixContent = styled.div<StyledInputStringPostfixContentProps>``
StyledInputStringPostfixContent.defaultProps = {
  $theme: 'cloud',
}

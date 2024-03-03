import { TJeneseiTheme } from '../../theme'
import {
  InputStringProps,
  StyledInputStringProps,
  ThemeCloudInputString,
} from '../input-string'
import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'

/****************************************** StyledInputCode *************************************************/
export interface StyledInputCodeProps {
  $theme?: TJeneseiTheme
  $prefixContent?: InputStringProps['prefixContent']
  $postfixContent?: InputStringProps['postfixContent']
  $input?: InputStringProps['input']
  readOnly?: boolean
  disabled?: boolean
}
export const StyledInputCode = styled(PatternFormat)<StyledInputStringProps>`
  ${(props) => (props.$theme === 'cloud' ? ThemeCloudInputString : '')};
  ${(props) => props.$input?.css};

  width: ${(props) => props.$input?.width || '100%'};
  left: ${(props) => props.$input?.left};
  right: ${(props) => props.$input?.right};
`
StyledInputCode.defaultProps = {
  $theme: 'cloud',
}

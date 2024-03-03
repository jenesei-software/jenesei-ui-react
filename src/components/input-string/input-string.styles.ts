import { InputStringProps, ThemeCloudInputString } from '.'
import { TJeneseiTheme } from '../../theme'
import styled from 'styled-components'

export const StyledInputStringWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

/****************************************** StyledInputString *************************************************/
export interface StyledInputStringProps {
  $theme?: TJeneseiTheme
  $prefixContent?: InputStringProps['prefixContent']
  $postfixContent?: InputStringProps['postfixContent']
  $input?: InputStringProps['input']
  readOnly?: boolean
  disabled?: boolean
}
export const StyledInputString = styled.input<StyledInputStringProps>`
  ${(props) => (props.$theme === 'cloud' ? ThemeCloudInputString : '')};
  ${(props) => props.$input?.css};
  width: ${(props) => props.$input?.width || '100%'};
  left: ${(props) => props.$input?.left};
  right: ${(props) => props.$input?.right};
`
StyledInputString.defaultProps = {
  $theme: 'cloud',
}

/****************************************** StyledInputStringPrefixContent *************************************************/
export interface StyledInputStringPrefixContentProps {
  $theme?: TJeneseiTheme
  $prefixContent?: InputStringProps['prefixContent']
}
export const StyledInputStringPrefixContent = styled.div<StyledInputStringPrefixContentProps>`
  ${(props) => (props.$theme === 'cloud' ? '' : '')};
  ${(props) => props.$prefixContent?.css};
  position: absolute;
  left: 0px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;

  cursor: ${(props) => props.$prefixContent?.onClick && 'pointer'};
  & svg {
    width: 100%;
    height: 100%;
    & path {
      fill: ${(props) => props.theme.colors.black['80']};
    }
  }

  width: ${(props) => props.$prefixContent?.width};
  height: ${(props) => props.$prefixContent?.height};

  left: ${(props) => props.$prefixContent?.left};
  right: ${(props) => props.$prefixContent?.right};
`
StyledInputStringPrefixContent.defaultProps = {
  $theme: 'cloud',
}

/****************************************** StyledInputStringPostfixContent *************************************************/
export interface StyledInputStringPostfixContentProps {
  $theme?: TJeneseiTheme
  $postfixContent?: InputStringProps['postfixContent']
}
export const StyledInputStringPostfixContent = styled.div<StyledInputStringPostfixContentProps>`
  ${(props) => (props.$theme === 'cloud' ? '' : '')};
  ${(props) => props.$postfixContent?.css};

  position: absolute;
  right: 0px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;

  cursor: ${(props) => props.$postfixContent?.onClick && 'pointer'};
  & svg {
    width: 100%;
    height: 100%;
    & path {
      fill: ${(props) => props.theme.colors.black['80']};
    }
  }

  width: ${(props) => props.$postfixContent?.width};
  height: ${(props) => props.$postfixContent?.height};

  left: ${(props) => props.$postfixContent?.left};
  right: ${(props) => props.$postfixContent?.right};
`
StyledInputStringPostfixContent.defaultProps = {
  $theme: 'cloud',
}

import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { addError } from '@local/styles/error'
import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { ImageSelectWrapperProps } from '.'

const ImageSelectListGenre = css<ImageSelectWrapperProps>`
  ${props => css`
    background: ${props.theme.colors.selectImage[props.$genre].background.rest};
    color: ${props.theme.colors.selectImage[props.$genre].color.rest};
    &:active {
      background: ${props.theme.colors.selectImage[props.$genre].background.rest};
      color: ${props.theme.colors.selectImage[props.$genre].color.rest};
    }
    &:focus-visible {
      background: ${props.theme.colors.selectImage[props.$genre].background.rest};
      color: ${props.theme.colors.selectImage[props.$genre].color.rest};
    }
  `};
`
/****************************************** Size *************************************************/
export const ImageSelectListSize = css<ImageSelectWrapperProps>`
  ${props => ImageSelectListSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const ImageSelectListSizeConstructor = (props: IJeneseiThemeSize) => css`
  padding: ${props.padding}px;
  border-radius: ${props.radius}px;
`
export const ImageSelectSize = css<ImageSelectWrapperProps>`
  ${props => ImageSelectSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const ImageSelectSizeConstructor = (props: IJeneseiThemeSize) => css`
  gap: ${props.padding - 2}px;
`
export const ImageSelectWrapper = styled.div<ImageSelectWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.$width || '100%'};
  ${ImageSelectSize}
  ${addError}
`
export const ImageSelectListWrapper = styled(motion.div)<ImageSelectWrapperProps>`
  border: 2px dashed;

  display: flex;
  flex-direction: column;
  width: ${props => props.$width || '100%'};
  ${ImageSelectListGenre}
  ${ImageSelectListSize}
`

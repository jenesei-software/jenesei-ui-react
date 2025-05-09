import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { SelectImageWrapperProps } from '.'

const SelectImageListGenre = css<SelectImageWrapperProps>`
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
export const SelectImageListSize = css<SelectImageWrapperProps>`
  ${props => SelectImageListSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const SelectImageListSizeConstructor = (props: IJeneseiThemeSize) => css`
  padding: ${props.padding}px;
  border-radius: ${props.radius}px;
`
export const SelectImageSize = css<SelectImageWrapperProps>`
  ${props => SelectImageSizeConstructor(KEY_SIZE_DATA[props.$size])};
`
export const SelectImageSizeConstructor = (props: IJeneseiThemeSize) => css`
  gap: ${props.padding - 2}px;
`
export const SelectImageWrapper = styled.div<SelectImageWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.$width || '100%'};
  ${SelectImageSize}
`
export const SelectImageListWrapper = styled(motion.div)<SelectImageWrapperProps>`
  border: 2px dashed;

  display: flex;
  flex-direction: column;
  width: ${props => props.$width || '100%'};
  ${SelectImageListGenre}
  ${SelectImageListSize}
`

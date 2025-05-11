import styled, { css } from 'styled-components'

import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { RangeComponentProps, RangeWrapperProps } from '.'

/****************************************** Size *************************************************/
export const InputOTPSize = css<RangeWrapperProps>`
  ${props => InputOTPSizeConstructor({ ...KEY_SIZE_DATA[props.$size], ...props })};
`
export const InputOTPSizeConstructor = (props: IJeneseiThemeSize & RangeWrapperProps) => css`
  width: ${props.$width ?? '100%'};
  padding: ${props.padding}px;
`

export const RangeWrapper = styled.div<RangeWrapperProps>`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: 20px;
  ${InputOTPSize};
`

export const RangeTrack = styled.div<RangeComponentProps>`
  position: absolute;
  height: 3px;
  width: calc(100% - 20px);
  background: #ccc;
  border-radius: 2px;
`
export const RangeThumb = styled.input<RangeComponentProps>`
  position: absolute;
  width: 100%;
  outline: none !important;
  pointer-events: none;
  -webkit-appearance: none;
  background: transparent;
  left: 0;
  margin: 0;
  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    background: #f7faff;
    border: 3px #2a77ee solid;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: 0px;
  }
`
export const RangeMarker = styled.div<RangeComponentProps>`
  position: absolute;
  top: -20px;
  width: 12px;
  height: 12px;
  background: #2a77ee;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`

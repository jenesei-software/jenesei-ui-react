import styled, { css } from 'styled-components'

import { IJeneseiThemeSize, KEY_SIZE_DATA } from '@local/theme'

import { RangeComponentProps, RangeWrapperProps } from '.'

/****************************************** Size *************************************************/
export const InputOTPSize = css<RangeWrapperProps>`
  ${props => InputOTPSizeConstructor({ ...KEY_SIZE_DATA[props.$size], ...props })};
`
export const InputOTPSizeConstructor = (props: IJeneseiThemeSize & RangeWrapperProps) => css`
  width: ${props.$width ?? '100%'};
`

export const RangeWrapper = styled.div<RangeWrapperProps>`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  height: 10px;
  margin-top: 30px;
  ${InputOTPSize};
`

export const RangeTrack = styled.div<RangeComponentProps>`
  position: absolute;
  top: 50%;
  left: 0;
  height: 4px;
  width: 100%;
  background: #ccc;
  transform: translateY(-50%);
  border-radius: 2px;
`
export const RangeThumb = styled.input<RangeComponentProps>`
  position: absolute;
  width: 100%;
  pointer-events: none;
  -webkit-appearance: none;
  background: transparent;

  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #007bff;
    border: 2px solid black;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  &::-moz-range-thumb {
    pointer-events: all;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #007bff;
    border: 8px solid black;
    cursor: pointer;
  }
`
export const RangeMarker = styled.div<RangeComponentProps>`
  position: absolute;
  top: -100%;
  width: 12px;
  height: 12px;
  background: #007bff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`

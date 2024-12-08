import styled from 'styled-components'

import { getFontSizeStyles } from '@components/typography'

import { removeScrollbar } from '@styles/base'

export const SonnerLayout = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  max-height: calc(100dvh - 20px);
  width: 320px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin: 10px;
  box-sizing: content-box;
  overflow-y: visible;
  overflow-x: visible;
  flex-direction: column-reverse;
  ${removeScrollbar}
`

export const SonnerElementWrapper = styled.div`
  background: ${props => props.theme.palette.whiteStandard};
  border-radius: 12px;
  border-style: solid;
  border-color: ${props => props.theme.palette.grayKaren};
  border-width: 1px;
  padding: 16px 20px 16px 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  flex-shrink: 1;
  min-width: 320px;
  transform-origin: center center;
  box-shadow: ${props => props.theme.effects.sonner.background};
  overflow: visible;
  transition:
    box-shadow ${props => props.theme.transition},
    transform ${props => props.theme.transition},
    margin ${props => props.theme.transition},
    opacity ${props => props.theme.transition},
    right ${props => props.theme.transition},
    bottom ${props => props.theme.transition},
    zoom ${props => props.theme.transition};
  &:hover {
    box-shadow: ${props => props.theme.effects.sonner.backgroundHover};
  }
`
export const SonnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  width: 233px;
  position: relative;
  overflow: hidden;
`
export const SonnerContentTitle = styled.div`
  ${getFontSizeStyles(12, 700, 'Inter')}
  color: ${props => props.theme.palette.black100};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const SonnerContentDescription = styled.div`
  ${getFontSizeStyles(8, 400, 'Inter')}
  color: ${props => props.theme.palette.grayPatricia};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const SonnerButtonWrapper = styled.div``

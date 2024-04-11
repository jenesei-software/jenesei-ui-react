import styled, { css } from 'styled-components'

export interface FrameProps {
  $position?: 'relative' | 'static'
  width?: string
}

export const UIFrameFlexCenter = styled.div<FrameProps>`
  width: ${(props) => (props.width ? props.width : 'max-content')};
  position: ${(props) => (props.$position ? props.$position : 'static')};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UIFrameAuthInputWithTitle = styled.div<FrameProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`

export const UIMobileContentWrapper = css`
  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    min-height: calc(100dvh - 48px);
    max-height: calc(100dvh - 48px);
    overflow-y: auto;
    padding: 24px 16px;
  }
`

export const UIMobileContentWrapperWithButton = css`
  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    min-height: calc(100dvh - 104px - 48px);
    max-height: calc(100dvh - 104px - 48px);
    overflow-y: auto;
    padding: 24px 16px;
  }
`

export const UIMobileContentWrapperWithButtonAndModalHeader = css`
  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    min-height: calc(100dvh - 104px - 48px - 48px);
    max-height: calc(100dvh - 104px - 48px - 48px);
    overflow-y: auto;
    padding: 24px 16px;
  }
`

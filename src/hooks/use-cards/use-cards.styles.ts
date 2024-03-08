import { FontInterB16, FontInterM16 } from '../../main'
import styled from 'styled-components'

export const StyledUseCard = styled.button<{
  $cardIssuer: string
  $cardIcon: JSX.Element
  $cardNumberLast4: string
  $cardNetwork: JSX.Element
  $colorBackground?: string
  $colorFont?: string
  $expirationDate: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  width: 272px;
  height: 160px;
  border-radius: 12px;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  cursor: pointer;
  background-color: ${(props) => props.$colorBackground} !important;
  color: ${(props) => props.$colorFont} !important;
  & svg {
    & path {
      fill: ${(props) => props.$colorFont} !important;
    }
  }
  & div {
    color: ${(props) => props.$colorFont} !important;
  }
`

export const StyledUseCardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const StyledUseCardTopCardIssuerLogo = styled.div``

export const StyledUseCardTopCardIssuerName = styled.div`
  ${FontInterB16};
`

export const StyledUseCardButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`

export const StyledUseCardButtonLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`
export const StyledUseCardButtonLeftCardNumberLast4 = styled.div`
  ${FontInterM16};
`
export const StyledUseCardButtonLeftExpirationDate = styled.div`
  ${FontInterM16};
`

export const StyledUseCardButtonRight = styled.div``
export const StyledUseCardButtonRightCardNetwork = styled.div``

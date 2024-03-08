import {
  UseCardsProps,
  CardProps,
  StyledUseCard,
  StyledUseCardTop,
  StyledUseCardTopCardIssuerLogo,
  StyledUseCardTopCardIssuerName,
  StyledUseCardButton,
  StyledUseCardButtonLeft,
  StyledUseCardButtonLeftCardNumberLast4,
  StyledUseCardButtonLeftExpirationDate,
  StyledUseCardButtonRight,
  StyledUseCardButtonRightCardNetwork,
} from '.'
import { useState, useMemo } from 'react'
import { Ripple } from 'react-ripple-click'

export const useCards = (props: UseCardsProps) => {
  const [value] = useState<CardProps[]>(props.value)

  const Cards = useMemo(
    () => (
      <>
        {value.map((e: CardProps, id: number) => (
          <StyledUseCard
            $cardIcon={e.cardIcon}
            $cardNetwork={e.cardNetwork}
            $cardIssuer={e.cardIssuer}
            $cardNumberLast4={e.cardNumberLast4}
            $expirationDate={e.expirationDate}
            $colorBackground={e.colorBackground}
            $colorFont={e.colorFont}
            key={id}
          >
            <Ripple />
            <StyledUseCardTop>
              <StyledUseCardTopCardIssuerLogo>
                {e.cardIcon}
              </StyledUseCardTopCardIssuerLogo>
              <StyledUseCardTopCardIssuerName>
                {e.cardIssuer}
              </StyledUseCardTopCardIssuerName>
            </StyledUseCardTop>
            <StyledUseCardButton>
              <StyledUseCardButtonLeft>
                <StyledUseCardButtonLeftCardNumberLast4>
                  {'●●●● ' + e.cardNumberLast4}
                </StyledUseCardButtonLeftCardNumberLast4>
                <StyledUseCardButtonLeftExpirationDate>
                  {String(e.expirationDate)}
                </StyledUseCardButtonLeftExpirationDate>
              </StyledUseCardButtonLeft>
              <StyledUseCardButtonRight>
                <StyledUseCardButtonRightCardNetwork>
                  {e.cardNetwork}
                </StyledUseCardButtonRightCardNetwork>
              </StyledUseCardButtonRight>
            </StyledUseCardButton>
          </StyledUseCard>
        ))}
      </>
    ),
    [value]
  )

  return { Cards }
}

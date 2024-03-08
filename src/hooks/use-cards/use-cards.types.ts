export interface UseCardsProps {
  value: CardProps[]
}

export interface CardProps {
  cardIssuer: string
  cardIcon: JSX.Element
  cardNumberLast4: string
  cardNetwork: JSX.Element
  colorBackground?: string
  colorFont?: string
  expirationDate: string
}

import { CSSProperties } from 'react'

import { JeneseiThemeVariablesKeys } from '@local/theme'
import { AddDollarSign } from '@local/types'

export type DollarFlexContainerProps = AddDollarSign<FlexContainerProps>
export type DollarFlexItemProps = AddDollarSign<FlexItemProps>
export type DollarFlexBasicProps = AddDollarSign<FlexBasicProps>

export interface FlexContainerProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  gap?: string
}
export interface FlexItemProps {
  order?: number
  flexGrow?: number
  flexShrink?: number
  flexBasis?: string | number
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
}
export interface FlexBasicProps {
  m?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
  mx?: string
  my?: string
  p?: string
  pt?: string
  pr?: string
  pb?: string
  pl?: string
  px?: string
  py?: string
  w?: string
  h?: string
  minW?: string
  maxW?: string
  minH?: string
  maxH?: string
  maxTransition?: boolean
  bs?: CSSProperties['boxSizing']
  br?: string
  bg?: JeneseiThemeVariablesKeys
  color?: JeneseiThemeVariablesKeys
}

export interface DollarFlexContainerAndItemProps extends DollarFlexContainerProps, DollarFlexItemProps {}

export interface DollarFlexContainerAndItemAndBasicProps
  extends DollarFlexContainerProps,
    DollarFlexItemProps,
    DollarFlexBasicProps {}

export interface FlexContainerAndItemProps extends FlexContainerProps, FlexItemProps {}

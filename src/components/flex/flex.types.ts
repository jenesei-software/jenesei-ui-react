import { JeneseiThemeVariablesKeys } from '@theme/index'

export interface FlexContainerProps {
  $flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  $flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  $justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  $alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  $alignContent?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  $gap?: string
}

export interface FlexItemProps {
  $order?: number
  $flexGrow?: number
  $flexShrink?: number
  $flexBasis?: string | number
  $alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch'
}

export interface FlexStylesProps extends FlexContainerProps, FlexItemProps {}

export interface FlexShortStylesProps extends FlexStylesProps {
  $m?: string
  $mt?: string
  $mr?: string
  $mb?: string
  $ml?: string
  $mx?: string
  $my?: string
  $p?: string
  $pt?: string
  $pr?: string
  $pb?: string
  $pl?: string
  $px?: string
  $py?: string
  $w?: string
  $h?: string
  $minW?: string
  $maxW?: string
  $minH?: string
  $maxH?: string
  $bg?: JeneseiThemeVariablesKeys
  $color?: JeneseiThemeVariablesKeys
}

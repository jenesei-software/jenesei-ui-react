import { ReactNode } from 'react'
import { PopupProps } from 'react-leaflet'
import { Styles } from 'styled-components/dist/types'

export interface MapProps<T extends object> {
  center?: [number, number]
  zoom?: number
  theme: MapTheme
  markers: MarkerProps<T>[]
  getCustomClusterLabel?: (markers: T[]) => string
  style?: {
    popupWrapper?: Styles<object>
    popupContent?: Styles<object>
  }
}

export interface MapTheme {
  name: string
  url: string
  attribution: string
}

export type MarkerClusterProps<T extends object> = {
  markers: MarkerProps<T>[]
} & Pick<MapProps<T>, 'getCustomClusterLabel'>
export interface MarkerProps<T extends object> {
  position: {
    lat: number
    lng: number
  }
  options?: T
  id: string
  popupProps?: PopupProps
  popupContent: ReactNode
}

import { ReactNode } from 'react'
import { PopupProps } from 'react-leaflet'
import { Styles } from 'styled-components/dist/types'

export interface MapProps<T extends object> {
  center?: [number, number]
  zoom?: number
  theme: MapTheme
  markers: MarkerProps<T>[]
  getCustomClusterLabel?: (markers: T[]) => string
  maxBounds?: [[number, number], [number, number]]
  maxBoundsViscosity?: number
  maxZoom?: number
  minZoom?: number
  style?: {
    popupWrapper?: Styles<object>
    popupContent?: Styles<object>
  }
}
export interface UpdateMapSettingsProps {
  maxBounds?: [[number, number], [number, number]]
  center?: [number, number]
  zoom?: number
}
export interface MapDotProps {
  center?: [number, number]
  onSelect: (coords: [number, number]) => void
  coords?: [number, number] | null
  theme: MapTheme
  zoom?: number
  maxBounds?: [[number, number], [number, number]]
  maxBoundsViscosity?: number
  maxZoom?: number
  minZoom?: number
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

import { ReactNode } from 'react'

export interface MapProps {
  center?: [number, number]
  zoom?: number
  theme: MapTheme
  markers: MarkerProps[]
}

export interface MapTheme {
  name: string
  url: string
  attribution: string
}

export interface MarkerClusterProps {
  markers: MarkerProps[]
}
export interface MarkerProps {
  position: {
    lat: number
    lng: number
  }
  id: string
  popupContent: ReactNode
}

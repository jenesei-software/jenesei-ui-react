export interface MapProps {
  center?: [number, number]
  zoom?: number
  theme: MapTheme
}

export interface MapTheme {
  name: string
  url: string
  attribution: string
}

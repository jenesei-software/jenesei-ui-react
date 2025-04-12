import { FC, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { DEFAULT_MAP_ZOOM, MapProps, MarkerClusterGroup } from '.'

import 'leaflet/dist/leaflet.css'

export const Map: FC<MapProps> = props => {
  const [theme, setTheme] = useState(props.theme)
  useEffect(() => {
    setTheme(props.theme)
  }, [props.theme])

  return (
    props.center &&
    theme && (
      <MapContainer
        center={props.center}
        zoom={props.zoom ?? DEFAULT_MAP_ZOOM}
        maxZoom={18}
        attributionControl={false}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        wheelDebounceTime={100}
        wheelPxPerZoomLevel={150}
      >
        <TileLayer url={theme.url} attribution={theme.attribution} />
        <MarkerClusterGroup markers={props.markers} />
        {props.center && (
          <Marker position={props.center}>
            <Popup>Это popup!</Popup>
          </Marker>
        )}
      </MapContainer>
    )
  )
}

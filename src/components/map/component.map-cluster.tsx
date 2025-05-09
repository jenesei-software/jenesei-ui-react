import { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'react-leaflet-markercluster/styles'

import {
  CustomZoomControl,
  DEFAULT_MAP_CENTER,
  DEFAULT_MAP_ZOOM,
  MapProps,
  MapWrapper,
  MarkerCluster,
  UpdateMapCenter
} from '.'

import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet/dist/leaflet.css'

export const Map = <T extends object>(props: MapProps<T>) => {
  const [theme, setTheme] = useState(props.theme ?? DEFAULT_MAP_CENTER)
  const [center, setCenter] = useState(props.center)

  useEffect(() => {
    setTheme(props.theme)
  }, [props.theme])

  useEffect(() => {
    if (props.center) {
      setCenter(props.center)
    }
  }, [props.center])

  return (
    center &&
    theme && (
      <MapWrapper style={props.style}>
        <MapContainer
          zoomControl={false}
          center={center}
          zoom={props.zoom ?? DEFAULT_MAP_ZOOM}
          maxZoom={18}
          attributionControl={false}
          style={{ height: '100%', width: '100%' }}
        >
          <CustomZoomControl />
          <TileLayer url={theme.url} attribution={theme.attribution} />
          <MarkerCluster getCustomClusterLabel={props.getCustomClusterLabel} markers={props.markers} />
          <UpdateMapCenter center={center} />
        </MapContainer>
      </MapWrapper>
    )
  )
}

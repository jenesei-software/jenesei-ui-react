import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'react-leaflet-markercluster/styles'

import { useDebouncedCallback } from '@local/hooks/use-debounced-callback'

import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, MapProps, MapWrapper, MarkerCluster } from '.'
import { Button } from '../button'

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
          // zoomControl={false}
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
function UpdateMapCenter({ center }: { center: [number, number] }) {
  const map = useMap()

  useEffect(() => {
    if (center) {
      map.setView(center)
    }
  }, [center, map])

  return null
}

function CustomZoomControl() {
  const map = useMap()

  const handleZoomOut = useDebouncedCallback(() => map.zoomOut(), 400)
  const handleZoomIn = useDebouncedCallback(() => map.zoomIn(), 400)

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        zIndex: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <Button
        isHiddenBorder
        genre="realebail-product"
        width="asHeight"
        size="small"
        iconSize="medium"
        iconName="Plus"
        onClick={handleZoomIn}
      />
      <Button
        isHiddenBorder
        genre="realebail-product"
        width="asHeight"
        size="small"
        iconSize="medium"
        iconName="Minus"
        onClick={handleZoomOut}
      />
    </div>
  )
}

import { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'react-leaflet-markercluster/styles'

import { useDebouncedCallback } from '@local/hooks/use-debounced-callback'

import {
  DEFAULT_MAP_CENTER,
  DEFAULT_MAP_ZOOM,
  MapDotProps,
  MapProps,
  MapWrapper,
  MarkerCluster,
  customIconDefault
} from '.'
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
export const MapDot = (props: MapDotProps) => {
  const [position, setPosition] = useState<[number, number] | null>(props.coords ?? null)
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

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const coords: [number, number] = [e.latlng.lat, e.latlng.lng]
        setPosition(coords)
        props.onSelect(coords)
      }
    })
    return null
  }

  useEffect(() => {
    if (props.coords) {
      setPosition(props.coords)
    }
  }, [props.coords])
  return (
    center && (
      <MapWrapper>
        <MapContainer
          center={center}
          zoom={props.zoom ?? DEFAULT_MAP_ZOOM}
          style={{ height: '100%', width: '100%' }}
          maxZoom={18}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            url={theme?.url ?? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
            attribution={theme?.attribution}
          />
          <CustomZoomControl />
          <UpdateMapCenter center={center} />
          <MapClickHandler />
          {position && <Marker position={position} icon={customIconDefault()} />}
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
  const [canZoomIn, setCanZoomIn] = useState(true)
  const [canZoomOut, setCanZoomOut] = useState(true)

  useEffect(() => {
    const updateZoomStatus = () => {
      setCanZoomIn(map.getZoom() < map.getMaxZoom())
      setCanZoomOut(map.getZoom() > map.getMinZoom())
    }

    map.on('zoomend', updateZoomStatus)
    updateZoomStatus()

    return () => {
      map.off('zoomend', updateZoomStatus)
    }
  }, [map])
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
        isHidden={!canZoomIn}
        isDisabled={!canZoomIn}
        size="small"
        icon={{
          name: 'Plus',
          type: 'id',
          size: 'medium'
        }}
        onClick={handleZoomIn}
      />
      <Button
        isHiddenBorder
        genre="realebail-product"
        width="asHeight"
        isHidden={!canZoomOut}
        isDisabled={!canZoomOut}
        size="small"
        icon={{
          name: 'Minus',
          type: 'id',
          size: 'medium'
        }}
        onClick={handleZoomOut}
      />
    </div>
  )
}

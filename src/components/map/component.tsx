import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'react-leaflet-markercluster/styles'

import { DEFAULT_MAP_ZOOM, MapProps, MapWrapper, MarkerCluster } from '.'
import { Button } from '../button'

import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet/dist/leaflet.css'

export const Map = <T extends object>(props: MapProps<T>) => {
  const [theme, setTheme] = useState(props.theme)
  useEffect(() => {
    setTheme(props.theme)
  }, [props.theme])

  return (
    props.center &&
    theme && (
      <MapWrapper style={props.style}>
        <MapContainer
          zoomControl={false}
          center={props.center}
          zoom={props.zoom ?? DEFAULT_MAP_ZOOM}
          maxZoom={18}
          attributionControl={false}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
          wheelDebounceTime={100}
          wheelPxPerZoomLevel={150}
        >
          <CustomZoomControl />
          <TileLayer url={theme.url} attribution={theme.attribution} />
          <MarkerCluster getCustomClusterLabel={props.getCustomClusterLabel} markers={props.markers} />
        </MapContainer>
      </MapWrapper>
    )
  )
}
function CustomZoomControl() {
  const map = useMap()

  const handleZoomIn = () => map.zoomIn()
  const handleZoomOut = () => map.zoomOut()

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
        genre="product"
        width="asHeight"
        size="small"
        styleCSS={{
          fontSize: '22px'
        }}
        isPlaystationEffect
        onClick={handleZoomIn}
      >
        +
      </Button>
      <Button
        isHiddenBorder
        styleCSS={{
          fontSize: '22px'
        }}
        isPlaystationEffect
        genre="product"
        width="asHeight"
        size="small"
        onClick={handleZoomOut}
      >
        -
      </Button>
    </div>
  )
}

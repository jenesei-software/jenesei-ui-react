import leaflet from 'leaflet'
import 'leaflet.markercluster'
import { FC, useEffect, useMemo, useRef } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'

import { MarkerClusterProps } from '.'

import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'

const customIcon = new leaflet.Icon({
  iconUrl: 'https://www.svgrepo.com/show/491435/map-pin.svg',
  iconSize: [42, 42],
  iconAnchor: [12, 41],
  popupAnchor: [0, -30]
})

export const MarkerCluster: FC<MarkerClusterProps> = props => {
  const map = useMap()

  const markerClusters = useMemo(
    () =>
      leaflet.markerClusterGroup({
        iconCreateFunction: createClusterIcon
      }),
    []
  )

  useEffect(() => {
    markerClusters.clearLayers()

    props.markers.forEach(({ position, popupContent }) => {
      const marker = leaflet
        .marker(new leaflet.LatLng(position.lat, position.lng), { icon: customIcon })
        .bindPopup(<Popup>{popupContent}</Popup>)
      marker.addTo(markerClusters)
    })

    if (!map.hasLayer(markerClusters)) {
      map.addLayer(markerClusters)
    }
  }, [props.markers, markerClusters, map])

  useEffect(() => {
    const handleMoveEnd = () => {
      const start = performance.now()

      const markersToAdd = props.markers.map(({ position, popupContent }) =>
        leaflet.marker(new leaflet.LatLng(position.lat, position.lng), { icon: customIcon }).bindPopup(popupContent)
      )

      markerClusters.clearLayers()
      markerClusters.addLayers(markersToAdd)

      const end = performance.now()
      console.log(`Time of adding markers and clusters: ${end - start}ms`)
    }

    map.on('moveend', handleMoveEnd)

    return () => {
      map.off('moveend', handleMoveEnd)
    }
  }, [map, markerClusters, props])

  useEffect(() => {
    return () => {
      map.removeLayer(markerClusters)
    }
  }, [map, markerClusters])

  return null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createClusterIcon = (cluster: any) => {
  const markersCount = cluster.getChildCount()

  return new leaflet.DivIcon({
    html: `<div style="background-color: black; border-radius: 50%; width: 100%; height: 100%; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600;">${markersCount}</div>`,
    className: 'leaflet-markercluster-custom',
    iconSize: new leaflet.Point(42, 42)
  })
}
export const MarkerClusterGroup: FC<MarkerClusterProps> = props => {
  const map = useMap()
  const markerClusterGroupRef = useRef<leaflet.MarkerClusterGroup | null>(null)

  useEffect(() => {
    if (!map) return

    const markerClusterGroup = leaflet.markerClusterGroup()
    markerClusterGroupRef.current = markerClusterGroup
    map.addLayer(markerClusterGroup)

    return () => {
      map.removeLayer(markerClusterGroup)
    }
  }, [map])

  return (
    <>
      {props.markers.map(marker => (
        <Marker key={marker.id} position={marker.position} icon={customIcon}>
          <Popup maxWidth={300} minWidth={100} maxHeight={200}>
            {marker.popupContent}
          </Popup>
        </Marker>
      ))}
    </>
  )
}

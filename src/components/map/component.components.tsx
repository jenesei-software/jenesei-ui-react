import { useCallback, useEffect, useState } from 'react'
import { useMap } from 'react-leaflet'

import { useDeepCompareMemoize } from '@local/hooks/use-deep-compare-memoize'

import { UpdateMapSettingsProps } from '.'
import { Button } from '../button'

export function UpdateMapSettings(props: UpdateMapSettingsProps) {
  const map = useMap()
  const propsMemo = useDeepCompareMemoize(props)

  useEffect(() => {
    if (propsMemo.center && propsMemo.maxBounds && propsMemo.zoom) {
      map.setMaxBounds(propsMemo.maxBounds)
      map.setView(propsMemo.center, propsMemo.zoom)
    } else {
      if (propsMemo.center) {
        map.setView(propsMemo.center, propsMemo.zoom)
      }
    }
  }, [map, propsMemo])

  return null
}

export function CustomZoomControl() {
  const map = useMap()

  const handleZoomOut = useCallback(() => map.zoomOut(), [map])
  const handleZoomIn = useCallback(() => map.zoomIn(), [map])
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
        gap: '10px',
        pointerEvents: 'none'
      }}
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
      }}
      // onClickCapture={e => {
      //   e.preventDefault()
      //   e.stopPropagation()
      // }}
      onMouseDown={e => {
        e.preventDefault()
        e.stopPropagation()
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
        sx={{
          default: {
            pointerEvents: 'all'
          }
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
        sx={{
          default: {
            pointerEvents: 'all'
          }
        }}
        onClick={handleZoomOut}
      />
    </div>
  )
}

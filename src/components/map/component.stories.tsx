import type { Meta, StoryObj } from '@storybook/react'
import { FC, useEffect, useState } from 'react'
import { useMap } from 'react-leaflet'

import { useGeolocation } from '@local/contexts/context-geolocation'

import { DEFAULT_MAP_CENTER, DEFAULT_MAP_THEME, DEFAULT_MAP_THEME_LIST, Map, MapProps } from '.'
import { Button } from '../button'
import { ButtonGroup } from '../button-group'
import { IMAGES, Slider } from '../slider'
import { Stack } from '../stack'

const meta: Meta<typeof Map> = {
  component: Map,
  title: 'Component/Map'
}

export default meta
type Story = StoryObj<typeof Map>

const defaultArgs: Partial<MapProps<object>> = {
  zoom: 14
}

interface MarkerItemProps {
  value: number
}
const PopupContent: FC = () => {
  const map = useMap()

  const handleClose = () => {
    map.closePopup()
  }
  return (
    <Slider
      images={IMAGES}
      propsStack={{
        h: '350px',
        w: '500px',
        br: '10px'
      }}
    >
      {({ isDialog }) =>
        isDialog ? (
          <></>
        ) : (
          <Stack justifyContent="flex-end" p="5px" flexGrow={1}>
            <Button
              isHiddenBorder
              genre="productBorder"
              width="asHeight"
              size="small"
              iconName="Close"
              onClick={handleClose}
            />
          </Stack>
        )
      }
    </Slider>
  )
}
const MapWrapper: FC<MapProps<object>> = props => {
  const { location, geolocationPermission, requestGeolocationPermission } = useGeolocation()
  const [center, setCenter] = useState<MapProps<MarkerItemProps>['center']>()
  const [theme, setTheme] = useState<MapProps<MarkerItemProps>['theme']>(DEFAULT_MAP_THEME)
  const [markers, setMarkers] = useState<MapProps<MarkerItemProps>['markers']>([])
  useEffect(() => {
    if (location) {
      setCenter([location.coords.latitude, location.coords.longitude])
    } else {
      setCenter(DEFAULT_MAP_CENTER)
    }
  }, [location])

  useEffect(() => {
    const markers: MapProps<MarkerItemProps>['markers'] = []
    for (let i = 0; i < 100; i++) {
      markers.push({
        id: `marker-${i}`,
        popupContent: <PopupContent />,
        options: {
          value: i
        },
        popupProps: {
          autoPanPadding: [10, 10],
          maxHeight: 350,
          maxWidth: 500,
          closeButton: false
        },
        position: {
          lng: -122.673447 + Math.random() * 200.0,
          lat: 45.5225581 - 60 + Math.random() * 80
        }
      })
    }
    setMarkers(markers)
  }, [])
  const isDisabledButton = geolocationPermission === 'denied' || geolocationPermission === 'granted'
  return (
    <Stack flexDirection="column" gap="10px">
      <Button
        size={'small'}
        genre={'gray'}
        isHidden={isDisabledButton}
        isDisabled={isDisabledButton}
        onClick={() => requestGeolocationPermission()}
      >
        {geolocationPermission === 'prompt'
          ? 'Request geolocation permission'
          : geolocationPermission === 'granted'
            ? 'Geolocation permission granted'
            : 'Geolocation permission denied'}
      </Button>
      <ButtonGroup
        position="horizontal"
        value={DEFAULT_MAP_THEME_LIST.map(e => ({
          genre: e.name === theme.name ? 'white' : 'black',
          size: 'small',
          children: e.name,
          onClick() {
            setTheme(e)
          }
        }))}
      />
      <Stack>
        Your location:
        {location ? (
          <Stack>
            {location.coords.latitude}, {location.coords.longitude}
          </Stack>
        ) : (
          'Los Angeles, CA ?'
        )}
      </Stack>
      <Stack w="700px" h="500px">
        <Map<MarkerItemProps>
          {...props}
          center={center}
          theme={theme}
          markers={markers}
          getCustomClusterLabel={markers => {
            const smallValue = markers.reduce((min, marker) => {
              return marker.value < min ? marker.value : min
            }, Infinity)

            return markers.length === 1 ? `${markers[0].value}$` : `От ${smallValue}$`
          }}
          style={{
            popupContent: {
              margin: '0px'
            },
            popupWrapper: {
              padding: '6px',
              borderRadius: '14px'
            }
          }}
        />
      </Stack>
    </Stack>
  )
}

export const Default: Story = {
  render: args => <MapWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}

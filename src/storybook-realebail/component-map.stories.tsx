import type { Meta, StoryObj } from '@storybook/react'
import { FC, useEffect, useState } from 'react'
import { useMap } from 'react-leaflet'

import { Checkbox } from '@local/components/checkbox'
import { useGeolocation } from '@local/contexts/context-geolocation'

import { Button } from '../components/button'
import { ButtonGroup } from '../components/button-group'
import { DEFAULT_MAP_THEME, DEFAULT_MAP_THEME_LIST, Map as MapComponent, MapProps } from '../components/map'
import { IMAGES, Slider } from '../components/slider'
import { Stack } from '../components/stack'

const meta: Meta<typeof MapComponent> = {
  component: MapComponent,
  title: 'RealEbail/Map'
}

export default meta
type Story = StoryObj<typeof MapComponent>

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

  const [checked, setChecked] = useState(false)
  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <Slider
      images={IMAGES}
      propsStack={{
        sx: {
          default: {
            maxWidth: '80dvw',
            height: '350px',
            width: '500px',
            borderRadius: '10px'
          }
        }
      }}
    >
      {({ isDialog }) =>
        !isDialog ? (
          <Stack
            sx={{
              default: {
                justifyContent: 'flex-end',
                gap: '4px',
                padding: '5px',
                flexGrow: 1
              }
            }}
          >
            <Button
              isHiddenBorder
              genre="realebail-white"
              width="asHeight"
              size="small"
              iconSize="medium"
              iconName="Close"
              onClick={handleClose}
            />
          </Stack>
        ) : (
          <Stack
            sx={{
              default: {
                justifyContent: 'flex-end',
                gap: '4px',
                padding: '5px',
                flexGrow: 1
              }
            }}
          >
            <Checkbox
              width="asHeight"
              genre="realebail-white"
              checked={checked}
              onChange={() => handleChange()}
              view="Heart"
              size="small"
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
    if (location && location.coords) {
      setCenter([location.coords.latitude, location.coords.longitude])
    }
  }, [location])

  useEffect(() => {
    const markers: MapProps<MarkerItemProps>['markers'] = []
    for (let i = 0; i < 1000; i++) {
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
    <Stack
      sx={{
        default: {
          width: '100%',
          height: '100%',
          alignItems: 'center',
          flexDirection: 'column',
          flexGrow: 1,
          overflow: 'hidden'
        }
      }}
    >
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
      <Stack
        sx={{
          default: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            flexGrow: 1,
            overflow: 'hidden'
          }
        }}
      >
        <MapComponent<MarkerItemProps>
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

export const Map: Story = {
  render: args => <MapWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}

import type { Meta, StoryObj } from '@storybook/react'
import { FC, useEffect, useState } from 'react'
import { useMap } from 'react-leaflet'

import { Checkbox } from '@local/components/checkbox'
import { SelectMapTheme } from '@local/components/select'
import { Typography } from '@local/components/typography'

import { Button } from '../components/button'
import { DEFAULT_MAP_THEME, Map, MapDot, MapDotProps, MapProps } from '../components/map'
import { IMAGES, Slider } from '../components/slider'
import { Stack } from '../components/stack'

const meta: Meta<typeof Map> = {
  component: Map,
  title: 'RealEbail/Map'
}

export default meta
type Story = StoryObj<typeof Map>

const defaultArgs: Partial<MapProps<object>> = {
  zoom: 9,
  minZoom: 9,
  center: [-8.5, 115.2],
  maxBounds: [
    [-9.2, 114.4],
    [-8.0, 115.7]
  ],
  maxBoundsViscosity: 1.0
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
    <Stack
      sx={{ default: { flexDirection: 'column', gap: '10px', height: '400px', width: '360px', maxWidth: '80dvw' } }}
    >
      <Slider
        images={IMAGES}
        propsStack={{
          sx: {
            default: {
              height: '194px',
              width: '100%',
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
                icon={{
                  type: 'id',
                  name: 'Close',
                  size: 'medium'
                }}
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
      <Stack sx={{ default: { flexDirection: 'column' } }}>
        <Typography weight={500} variant="h7">
          Описание:
        </Typography>
        <Typography variant="h6">Это описание</Typography>
      </Stack>
    </Stack>
  )
}
function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}
const MapDefaultWrapper: FC<MapProps<object>> = props => {
  const [theme, setTheme] = useState<MapProps<MarkerItemProps>['theme']>(DEFAULT_MAP_THEME)
  const [markers, setMarkers] = useState<MapProps<MarkerItemProps>['markers']>([])

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
          maxHeight: 400,
          maxWidth: 360,
          closeButton: false
        },
        position: {
          lng: getRandomArbitrary(114.4, 115.7),
          lat: getRandomArbitrary(-9.2, -8.0)
        }
      })
    }
    setMarkers(markers)
  }, [])
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
      <Stack
        sx={{
          default: {
            padding: '10px',
            zIndex: 10,
            alignItems: 'center',
            flexDirection: 'column',
            flexGrow: 1
          }
        }}
      >
        <SelectMapTheme
          size="medium"
          value={theme}
          genre="realebail-white"
          onChange={value => value && setTheme(value)}
        />
      </Stack>
      <Stack
        sx={{
          default: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            flexGrow: 1,
            zIndex: 0,
            overflow: 'hidden'
          }
        }}
      >
        <Map<MarkerItemProps>
          {...props}
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
  render: args => <MapDefaultWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}
const MapDotWrapper: FC<MapDotProps> = props => {
  const [theme] = useState<MapDotProps['theme']>(DEFAULT_MAP_THEME)
  const [coords, setCoords] = useState<MapDotProps['coords']>(props.coords ?? null)
  useEffect(() => {
    setCoords(props.coords)
  }, [props.coords])
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
        <MapDot
          {...props}
          theme={theme}
          coords={coords}
          onSelect={coords => {
            setCoords(coords)
            props.onSelect(coords)
          }}
        />
      </Stack>
    </Stack>
  )
}
type StoryDot = StoryObj<typeof MapDot>

export const Dot: StoryDot = {
  render: args => <MapDotWrapper {...args} />,
  args: {
    ...defaultArgs,
    onSelect(coords) {
      console.log('onSelect', coords)
    }
  }
}

import type { Meta, StoryObj } from '@storybook/react'
import { FC, useEffect, useState } from 'react'

import { useGeolocation } from '@local/contexts/context-geolocation'

import { DEFAULT_MAP_CENTER, DEFAULT_MAP_THEME, DEFAULT_MAP_THEME_LIST, Map, MapProps } from '.'
import { Button } from '../button'
import { ButtonGroup } from '../button-group'
import { Stack } from '../stack'

const meta: Meta<typeof Map> = {
  component: Map,
  title: 'Component/Map'
}

export default meta
type Story = StoryObj<typeof Map>

const defaultArgs: Partial<MapProps> = {
  zoom: 14
}

const MapWrapper: FC<MapProps> = props => {
  const { location, geolocationPermission, requestGeolocationPermission } = useGeolocation()
  const [center, setCenter] = useState<MapProps['center']>()
  const [theme, setTheme] = useState<MapProps['theme']>(DEFAULT_MAP_THEME)

  useEffect(() => {
    if (location) {
      setCenter([location.coords.latitude, location.coords.longitude])
    } else {
      setCenter(DEFAULT_MAP_CENTER)
    }
  }, [location])
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
        <Map {...props} center={center} theme={theme} />
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

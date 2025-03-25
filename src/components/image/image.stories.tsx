import type { Meta, StoryObj } from '@storybook/react'
import 'styled-components'

import { Image as ImageComponent } from '.'

const meta: Meta<typeof ImageComponent> = {
  component: ImageComponent,
  title: 'Component/Image'
}

export default meta
type Story = StoryObj<typeof ImageComponent>

export const Image: Story = {
  args: {
    src: 'https://wallpapercat.com/w/full/1/d/5/1412415-3840x2160-desktop-4k-los-angeles-skyline-wallpaper-photo.jpg',
    alt: 'Los Angeles',
    propsStack: { w: '200px', h: '200px', br: '12px' }
  }
}

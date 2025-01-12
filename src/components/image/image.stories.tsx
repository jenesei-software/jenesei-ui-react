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
    src: 'https://images.wallpaperscraft.ru/image/single/gorod_vid_sverhu_doroga_131001_3840x2400.jpg',
    alt: 'Los Angeles',
    styleImage: { width: '100%', height: '100%' },
    styleStack: { width: '200px', height: '200px', borderRadius: '12px' }
  }
}

import { SliderProps } from '@local/components/image-slider'

export type useImageSliderProps = Pick<SliderProps, 'genre' | 'size'> &
  Pick<SliderProps, 'images' | 'imageSettings' | 'onIndexChange' | 'children'> & {
    locales: {
      failedToLoad: string
    }
  }

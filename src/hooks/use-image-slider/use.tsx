import { AnimatePresence, PanInfo, Variants } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { Image } from '@local/components/image'
import { Stack } from '@local/components/stack'
import { useDialog } from '@local/contexts/context-dialog'
import { Button, SliderDot, SliderImage, SliderProps, Typography } from '@local/index'
import { KEY_SIZE_DATA } from '@local/theme'

import { useImageSliderProps } from '.'

export const useImageSlider = (props: useImageSliderProps) => {
  const { onIndexChange } = props

  const size = useMemo(() => KEY_SIZE_DATA[props.size], [props.size])
  const br = useMemo(() => `${size.radius}px`, [size.radius])

  const images = useMemo(() => props.images, [props.images])

  const [{ activeImageId, direction }, setActiveImage] = useState({
    activeImageId: images?.[0]?.id ?? null,
    direction: 0
  })
  const isLengthOne = useMemo(() => images?.length === 1, [images])
  const isLengthZero = useMemo(() => images?.length === 0, [images])

  const activeImageIndex = useMemo(() => images.findIndex(img => img.id === activeImageId), [activeImageId, images])

  const swipeToImage = useCallback(
    (swipeDirection: number) => {
      const currentIndex = images.findIndex(img => img.id === activeImageId)
      const nextIndex = (currentIndex + swipeDirection + images.length) % images.length
      setActiveImage({ activeImageId: images[nextIndex].id, direction: swipeDirection })
    },
    [activeImageId, images]
  )
  const dragEndHandler = useCallback(
    (dragInfo: PanInfo) => {
      const { offset, velocity } = dragInfo
      const swipeThreshold = 50
      const swipePower = Math.abs(offset.x) * velocity.x

      if (swipePower > 500 || offset.x > swipeThreshold) {
        swipeToImage(-1)
      } else if (swipePower < -500 || offset.x < -swipeThreshold) {
        swipeToImage(1)
      }
    },
    [swipeToImage]
  )
  const skipToImage = useCallback(
    (imageId: number) => {
      const currentIndex = images.findIndex(img => img.id === activeImageId)
      const newIndex = images.findIndex(img => img.id === imageId)
      if (newIndex === -1 || newIndex === currentIndex) return

      const direction = newIndex > currentIndex ? 1 : -1
      setActiveImage({ activeImageId: imageId, direction })
    },
    [activeImageId, images]
  )

  useEffect(() => {
    if (activeImageId) onIndexChange?.(activeImageId)
  }, [activeImageId, onIndexChange])

  const { add } = useDialog<
    {
      br?: string
      dragEndHandler: (dragInfo: PanInfo) => void
      images: SliderProps['images']
      children?: SliderProps['children']
      activeImageIndex: number
      activeImageId: number | null
      swipeToImage: (swipeDirection: number) => void
      skipToImage: (imageId: number) => void
      direction: number
    } & Pick<SliderProps, 'genre' | 'size'>
  >({
    br: br,
    dragEndHandler: dragEndHandler,
    images: images,
    children: props.children,
    activeImageIndex: activeImageIndex,
    activeImageId: activeImageId,
    swipeToImage: swipeToImage,
    skipToImage: skipToImage,
    direction: direction,
    genre: props.genre,
    size: props.size,
    propsDialog: {
      borderRadius: br,
      padding: '0',
      background: 'whiteStandard'
    }
  })
  const handleAdd = useCallback(() => {
    add({
      content: (params, remove) => (
        <Stack
          sx={{
            default: {
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: `${props.imageSettings.aspect * 2} / 2`,
              width: 'auto',
              maxWidth: '70dvw',
              height: '85dvh',
              borderRadius: params?.br
            },
            tablet: {
              maxWidth: '95dvw'
            }
          }}
        >
          <AnimatePresence initial={false} custom={params?.direction}>
            <SliderImage
              key={params?.activeImageId}
              style={{
                overflow: 'hidden',
                borderRadius: params?.br
              }}
              custom={params?.direction}
              variants={sliderVariants}
              initial="initial"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              {...(!isLengthOne
                ? {
                    drag: 'x',
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.5,
                    onDragEnd: (_, dragInfo) => params?.dragEndHandler(dragInfo)
                  }
                : {})}
            >
              <Image
                sxStack={theme => ({
                  default: {
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.black10,
                    position: 'absolute',
                    pointerEvents: 'none'
                  }
                })}
                isShowBeforeImage
                sxImage={{
                  default: {
                    objectFit: 'contain'
                  }
                }}
                alt={(params?.images ?? [])?.[params?.activeImageIndex ?? 0]?.imageSrc}
                src={(params?.images ?? [])?.[params?.activeImageIndex ?? 0]?.imageSrc}
                componentFallback={
                  <Typography
                    sx={{
                      default: {
                        variant: 'h6'
                      }
                    }}
                  >
                    {props.locales.failedToLoad}
                  </Typography>
                }
              />
              {(params?.images ?? [])?.[params?.activeImageIndex ?? 0]?.children}
            </SliderImage>
          </AnimatePresence>
          {typeof params?.children === 'function' ? params?.children?.({ isDialog: true }) : params?.children}

          <Button
            sx={{
              default: {
                position: 'absolute',
                bottom: 15,
                right: 15
              }
            }}
            genre={params?.genre ?? 'product'}
            size={params?.size ?? 'medium'}
            icons={[
              {
                type: 'id',
                name: 'Arrow4'
              }
            ]}
            isWidthAsHeight
            isHiddenBorder
            isRadius
            onClick={() => remove?.()}
          />
          {!isLengthOne ? (
            <>
              <Stack
                sx={{
                  default: {
                    position: 'absolute',
                    bottom: 15,
                    left: 15,
                    gap: '8px'
                  }
                }}
              >
                <Button
                  genre={params?.genre ?? 'product'}
                  size={params?.size ?? 'medium'}
                  icons={[
                    {
                      type: 'id',
                      name: 'Arrow4',
                      turn: 90
                    }
                  ]}
                  isWidthAsHeight
                  isHiddenBorder
                  isPlaystationEffect
                  isRadius
                  onClick={() => params?.swipeToImage?.(-1)}
                />
                <Button
                  genre={params?.genre ?? 'product'}
                  size={params?.size ?? 'medium'}
                  icons={[
                    {
                      type: 'id',
                      name: 'Arrow4',
                      turn: -90
                    }
                  ]}
                  isWidthAsHeight
                  isHiddenBorder
                  isPlaystationEffect
                  isRadius
                  onClick={() => params?.swipeToImage?.(1)}
                />
              </Stack>
              <Stack
                sx={{
                  default: {
                    position: 'absolute',
                    bottom: 15,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    gap: '4px'
                  }
                }}
              >
                {(params?.images ?? [])?.map(i => (
                  <SliderDot
                    onClick={() => params?.skipToImage?.(i.id)}
                    key={i.id}
                    initial={false}
                    animate={{
                      scale: params?.activeImageId === i.id ? 1.5 : 1,
                      opacity: params?.activeImageId === i.id ? 1 : 0.5
                    }}
                  />
                ))}
              </Stack>
            </>
          ) : null}
        </Stack>
      )
    })
  }, [add, isLengthOne, props.imageSettings.aspect, props.locales.failedToLoad])
  return {
    isLengthZero,
    direction,
    activeImageId,
    isLengthOne,
    dragEndHandler,
    activeImageIndex,
    swipeToImage,
    skipToImage,
    handleAdd
  }
}
const sliderVariants: Variants = {
  initial: direction => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 1,
    opacity: 0.2
  })
}
const sliderTransition = {
  duration: 0.3,
  ease: [0.56, 0.03, 0.12, 1.04]
}

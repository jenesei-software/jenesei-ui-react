import { AnimatePresence, PanInfo, Variants } from 'framer-motion'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useTheme } from 'styled-components'

import { useDialog } from '@local/contexts/context-dialog'

import { SliderDot, SliderImage, SliderProps } from '.'
import { Button } from '../button'
import { Image } from '../image'
import { Stack, StackMotion } from '../stack'
import { Typography } from '../typography'

export const Slider: FC<SliderProps> = props => {
  const { onIndexChange } = props
  const [{ activeImageId, direction }, setActiveImage] = useState({
    activeImageId: props.images[0].id,
    direction: 0
  })

  const activeImageIndex = useMemo(
    () => props.images.findIndex(img => img.id === activeImageId),
    [activeImageId, props.images]
  )

  const swipeToImage = useCallback(
    (swipeDirection: number) => {
      const currentIndex = props.images.findIndex(img => img.id === activeImageId)
      const nextIndex = (currentIndex + swipeDirection + props.images.length) % props.images.length
      setActiveImage({ activeImageId: props.images[nextIndex].id, direction: swipeDirection })
    },
    [activeImageId, props.images]
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
      const currentIndex = props.images.findIndex(img => img.id === activeImageId)
      const newIndex = props.images.findIndex(img => img.id === imageId)
      if (newIndex === -1 || newIndex === currentIndex) return

      const direction = newIndex > currentIndex ? 1 : -1
      setActiveImage({ activeImageId: imageId, direction })
    },
    [activeImageId, props.images]
  )

  useEffect(() => {
    onIndexChange?.(activeImageId)
  }, [activeImageId, onIndexChange])

  const theme = useTheme()
  const br = useMemo(
    () =>
      String(
        (props.propsStack?.sx
          ? typeof props.propsStack?.sx === 'function'
            ? props.propsStack?.sx(theme).default.borderRadius
            : props.propsStack?.sx.default.borderRadius
          : '0px') ?? '0px'
      ),
    [props.propsStack, theme]
  )

  const { add } = useDialog<{
    br?: string
    dragEndHandler: (dragInfo: PanInfo) => void
    images: SliderProps['images']
    children?: SliderProps['children']
    activeImageIndex: number
    activeImageId: number
    swipeToImage: (swipeDirection: number) => void
    skipToImage: (imageId: number) => void
    direction: number
  }>({
    br: br,
    dragEndHandler: dragEndHandler,
    images: props.images,
    children: props.children,
    activeImageIndex: activeImageIndex,
    activeImageId: activeImageId,
    swipeToImage: swipeToImage,
    skipToImage: skipToImage,
    direction: direction
  })
  const handleAdd = useCallback(() => {
    add({
      borderRadius: br,
      padding: '0',
      background: 'whiteStandard',
      content: (params, remove) => (
        <Stack
          sx={{
            default: {
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '900 / 600',
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
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(_, dragInfo) => params?.dragEndHandler?.(dragInfo)}
            >
              <Image
                propsStack={{
                  sx: theme => ({
                    default: {
                      width: '100%',
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: theme.palette.black10,
                      position: 'absolute',
                      pointerEvents: 'none'
                    }
                  })
                }}
                propsImage={{
                  objectFit: 'contain'
                }}
                alt={(params?.images ?? [])?.[params?.activeImageIndex ?? 0]?.imageSrc}
                src={(params?.images ?? [])?.[params?.activeImageIndex ?? 0]?.imageSrc}
                fallback={<Typography variant="h6">Не удалось загрузить изображение</Typography>}
              />
              {(params?.images ?? [])?.[params?.activeImageIndex ?? 0]?.children}
            </SliderImage>
          </AnimatePresence>
          {typeof params?.children === 'function' ? params?.children?.({ isDialog: true }) : params?.children}
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
              genre="realebail-white"
              size="small"
              icon={{
                type: 'id',
                name: 'Arrow4',
                turn: 90
              }}
              width="asHeight"
              isHiddenBorder
              isPlaystationEffect
              isRadius
              onClick={() => params?.swipeToImage?.(-1)}
            />
            <Button
              genre="realebail-white"
              size="small"
              icon={{
                type: 'id',
                name: 'Arrow4',
                turn: -90
              }}
              width="asHeight"
              isHiddenBorder
              isPlaystationEffect
              isRadius
              onClick={() => params?.swipeToImage?.(1)}
            />
          </Stack>

          <Button
            sx={{
              default: {
                position: 'absolute',
                bottom: 15,
                right: 15
              }
            }}
            genre="realebail-white"
            size="small"
            icon={{
              type: 'id',
              name: 'Arrow4'
            }}
            width="asHeight"
            isHiddenBorder
            isRadius
            onClick={() => remove?.()}
          />
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
        </Stack>
      )
    })
  }, [add, br])
  return (
    <StackMotion
      {...props.propsStack}
      sx={theme => ({
        ...props.propsStack?.sx,
        default: {
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          width: 'auto',
          maxWidth: '70dvw',
          height: '85dvh',
          ...(props.propsStack?.sx
            ? typeof props.propsStack?.sx === 'function'
              ? props.propsStack?.sx(theme).default
              : props.propsStack?.sx.default
            : {})
        },
        tablet: {
          maxWidth: '95dvw',
          ...(props.propsStack?.sx
            ? typeof props.propsStack?.sx === 'function'
              ? props.propsStack?.sx(theme).tablet
              : props.propsStack?.sx.tablet
            : {})
        }
      })}
    >
      <Stack
        sx={{
          default: {
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
          }
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <SliderImage
            key={activeImageId}
            style={{
              overflow: 'hidden',
              borderRadius: br
            }}
            custom={direction}
            variants={sliderVariants}
            initial="initial"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          >
            <Image
              propsStack={{
                sx: theme => ({
                  default: {
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.black10,
                    position: 'absolute',
                    pointerEvents: 'none'
                  }
                })
              }}
              alt={props.images[activeImageIndex]?.imageSrc}
              src={props.images[activeImageIndex]?.imageSrc}
              fallback={<Typography variant="h6">Не удалось загрузить изображение</Typography>}
            />
            {props.images[activeImageIndex]?.children}
          </SliderImage>
        </AnimatePresence>
        {typeof props?.children === 'function' ? props?.children?.({ isDialog: false }) : props?.children}

        <Button
          sx={{
            default: {
              position: 'absolute',
              top: '50%',
              left: 5,
              transform: 'translateY(-50%)'
            }
          }}
          genre="realebail-white"
          size="small"
          icon={{
            type: 'id',
            name: 'Arrow4',
            turn: 90
          }}
          width="asHeight"
          isHiddenBorder
          isRadius
          onClick={() => swipeToImage(-1)}
        />
        <Button
          sx={{
            default: {
              position: 'absolute',
              top: '50%',
              right: 5,
              transform: 'translateY(-50%)'
            }
          }}
          genre="realebail-white"
          size="small"
          icon={{
            type: 'id',
            name: 'Arrow4',
            turn: -90
          }}
          width="asHeight"
          isHiddenBorder
          isRadius
          onClick={() => swipeToImage(1)}
        />
        <Button
          sx={{
            default: {
              position: 'absolute',
              bottom: 5,
              right: 5
            }
          }}
          genre="realebail-white"
          size="small"
          icon={{
            type: 'id',
            name: 'Activity'
          }}
          width="asHeight"
          isHiddenBorder
          isRadius
          onClick={() => handleAdd()}
        />
        <Stack
          sx={{
            default: {
              position: 'absolute',
              bottom: 5,
              left: '50%',
              transform: 'translateX(-50%)',
              gap: '4px'
            }
          }}
        >
          {props.images.map(i => (
            <SliderDot
              onClick={() => skipToImage(i.id)}
              key={i.id}
              initial={false}
              animate={{
                scale: activeImageId === i.id ? 1.5 : 1,
                opacity: activeImageId === i.id ? 1 : 0.5
              }}
            />
          ))}
        </Stack>
      </Stack>
    </StackMotion>
  )
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

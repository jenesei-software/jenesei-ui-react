import { AnimatePresence, PanInfo, Variants } from 'framer-motion'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'

import { useDialog } from '@local/contexts/context-dialog'

import { SliderDot, SliderImage, SliderProps } from '.'
import { Button } from '../button'
import { Image } from '../image'
import { Stack, StackMotion } from '../stack'
import { Typography } from '../typography'

export const Slider: FC<SliderProps> = props => {
  const { add, remove } = useDialog()

  const handleAdd = () => {
    add({
      content: (
        <StackMotion
          flexDirection="column"
          alignItems="center"
          style={{ overflow: 'hidden' }}
          w="70dvw"
          maxW="900px"
          h="100%"
          maxH="90dvh"
        >
          <Stack style={{ position: 'relative', overflow: 'hidden' }} w="100%" h="100%">
            <SliderImage
              layoutId={`slider-image-${activeImageId}`}
              key={activeImageId}
              style={{
                overflow: 'hidden',
                borderRadius: props.propsStack?.br
              }}
            >
              <Image
                propsStack={{
                  w: '100%',
                  h: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bg: 'black10',
                  style: {
                    position: 'absolute',
                    pointerEvents: 'none'
                  }
                }}
                alt={props.images[activeImageIndex]?.imageSrc}
                src={props.images[activeImageIndex]?.imageSrc}
                fallback={<Typography variant="h6">Не удалось загрузить изображение</Typography>}
              />
              {props.images[activeImageIndex]?.children}
            </SliderImage>
            {props?.children}
            <Button
              styleCSS={{
                position: 'absolute',
                bottom: 5,
                right: 5
              }}
              genre="productBorder"
              size="small"
              iconName="Arrow4"
              width="asHeight"
              isHiddenBorder
              isRadius
              onClick={() => remove()}
            />
          </Stack>
        </StackMotion>
      )
    })
  }
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
      const draggedDistance = dragInfo.offset.x
      const swipeThreshold = 50
      if (draggedDistance > swipeThreshold) {
        swipeToImage(-1)
      } else if (draggedDistance < -swipeThreshold) {
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
  return (
    <StackMotion flexDirection="column" alignItems="center" style={{ overflow: 'hidden' }} {...props.propsStack}>
      <Stack style={{ position: 'relative', overflow: 'hidden' }} w="100%" h="100%">
        <AnimatePresence initial={false} custom={direction}>
          <SliderImage
            layoutId={`slider-image-${activeImageId}`}
            key={activeImageId}
            style={{
              overflow: 'hidden',
              borderRadius: props.propsStack?.br
            }}
            custom={direction}
            variants={sliderVariants}
            initial="initial"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          >
            <Image
              propsStack={{
                w: '100%',
                h: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bg: 'black10',
                style: {
                  position: 'absolute',
                  pointerEvents: 'none'
                }
              }}
              alt={props.images[activeImageIndex]?.imageSrc}
              src={props.images[activeImageIndex]?.imageSrc}
              fallback={<Typography variant="h6">Не удалось загрузить изображение</Typography>}
            />
            {props.images[activeImageIndex]?.children}
          </SliderImage>
        </AnimatePresence>
        {props?.children}

        <Button
          styleCSS={{
            position: 'absolute',
            top: '50%',
            left: 5,
            transform: 'translateY(-50%)'
          }}
          genre="productBorder"
          size="small"
          iconName="Arrow4"
          width="asHeight"
          iconTurn={90}
          isHiddenBorder
          isRadius
          onClick={() => swipeToImage(-1)}
        />
        <Button
          styleCSS={{
            position: 'absolute',
            top: '50%',
            right: 5,
            transform: 'translateY(-50%)'
          }}
          genre="productBorder"
          size="small"
          iconName="Arrow4"
          width="asHeight"
          isHiddenBorder
          iconTurn={-90}
          isRadius
          onClick={() => swipeToImage(1)}
        />
        <Button
          styleCSS={{
            position: 'absolute',
            bottom: 5,
            right: 5
          }}
          genre="productBorder"
          size="small"
          iconName="Arrow4"
          width="asHeight"
          isHiddenBorder
          isRadius
          onClick={() => handleAdd()}
        />
        <Stack
          style={{
            position: 'absolute',
            bottom: 5,
            left: '50%',
            transform: 'translateX(-50%)',
            gap: '4px'
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
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
}

import { FC, useState } from 'react'

import { Skeleton } from '@local/areas/skeleton'
import { Stack } from '@local/components/stack'

import { ImageIMG, ImageProps } from '.'

export const Image: FC<ImageProps> = props => {
  const [isPending, setIsPending] = useState(true)
  const [isError, setIsError] = useState(false)
  return (
    <Stack
      sx={theme => ({
        ...props?.sxStack,
        default: {
          position: 'relative',
          overflow: 'hidden',
          ...(props.isShowBeforeImage
            ? {
                '&::before': {
                  width: '100%',
                  height: '100%',
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${props.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(20px)',
                  transform: 'scale(1.1)',
                  zIndex: 0
                }
              }
            : {}),
          ...(props?.sxStack
            ? typeof props?.sxStack === 'function'
              ? props?.sxStack(theme).default
              : props?.sxStack.default
            : {})
        }
      })}
    >
      {!isError ? (
        props.componentLoading || isPending ? (
          <Skeleton
            visible
            sx={{
              default: {
                width: '100%',
                height: '100%'
              }
            }}
          />
        ) : null
      ) : null}
      {!isError && (
        <ImageIMG
          loading="lazy"
          $isPending={isPending}
          src={props.src}
          alt={props.alt}
          onLoadStart={() => setIsPending(true)}
          onLoad={() => setIsPending(false)}
          onError={() => setIsError(true)}
          $sx={props.sxImage}
        />
      )}
      {isError ? props.componentFallback || null : null}
    </Stack>
  )
}

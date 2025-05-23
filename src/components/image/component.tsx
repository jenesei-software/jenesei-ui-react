import { FC, useState } from 'react'

import { Skeleton } from '@local/areas/skeleton'
import { Stack } from '@local/components/stack'

import { ImageIMG, ImageProps } from '.'

export const Image: FC<ImageProps> = props => {
  const [isPending, setIsPending] = useState(true)
  const [isError, setIsError] = useState(false)

  return (
    <Stack
      {...props.propsStack}
      sx={theme => ({
        ...props.propsStack?.sx,
        default: {
          position: 'relative',
          overflow: 'hidden',
          ...(props.propsStack?.sx
            ? typeof props.propsStack?.sx === 'function'
              ? props.propsStack?.sx(theme).default
              : props.propsStack?.sx.default
            : {})
        }
      })}
    >
      {!isError ? (
        props.loading || isPending ? (
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
          style={props.propsImage}
        />
      )}
      {isError ? props.fallback || null : null}
    </Stack>
  )
}

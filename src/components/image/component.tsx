import { FC, useState } from 'react'

import { Skeleton } from '@local/areas/skeleton'
import { Stack } from '@local/components/stack'

import { ImageIMG, ImageProps } from '.'

export const Image: FC<ImageProps> = props => {
  const [isPending, setIsPending] = useState(true)
  const [isError, setIsError] = useState(false)

  return (
    <Stack {...props.propsStack} style={{ position: 'relative', overflow: 'hidden', ...props.propsStack?.style }}>
      {!isError ? props.loading || isPending ? <Skeleton visible w="100%" h="100%" /> : null : null}
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

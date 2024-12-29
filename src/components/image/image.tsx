import { FC, useState } from 'react'

import { Stack } from '@local/components/stack'
import { Skeleton } from '@local/main'

import { ImageIMG, ImageProps } from '.'

export const Image: FC<ImageProps> = props => {
  const [isPending, setIsPending] = useState(true)
  const [isError, setIsError] = useState(false)

  return (
    <Stack style={{ position: 'relative', overflow: 'hidden', ...props.styleStack }}>
      {!isError ? props.loading || <Skeleton visible w="100%" h="100%" /> : null}
      {!isError && (
        <ImageIMG
          $isPending={isPending}
          src={props.src}
          alt={props.alt}
          onLoadStart={() => setIsPending(true)}
          onLoad={() => setIsPending(false)}
          onError={() => setIsError(true)}
        />
      )}
      {isError ? props.fallback || null : null}
    </Stack>
  )
}

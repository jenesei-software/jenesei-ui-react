import { FC, PropsWithChildren } from 'react'

import { Stack } from '@local/components/stack'

export const WrapperBig: FC<PropsWithChildren> = props => {
  return (
    <Stack
      sx={theme => ({
        default: {
          borderRadius: '8px',
          padding: '16px',
          border: '1px dashed',
          height: 'fit-content',
          color: theme.palette.whiteStandard,
          borderColor: theme.palette.blueHover,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '6px'
        }
      })}
    >
      {props.children}
    </Stack>
  )
}
export const WrapperMin: FC<PropsWithChildren> = props => {
  return (
    <Stack
      sx={theme => ({
        default: {
          borderRadius: '8px',
          padding: '8px',
          border: '1px dashed',
          height: 'fit-content',
          color: theme.palette.whiteStandard,
          borderColor: theme.palette.blueHover,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '6px'
        }
      })}
    >
      {props.children}
    </Stack>
  )
}

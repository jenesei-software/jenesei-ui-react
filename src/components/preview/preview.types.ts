import { PropsWithChildren } from 'react'

interface PreviewDefaultProps extends PropsWithChildren {}

interface PreviewIsShowProps {
  isShow: boolean
}

interface PreviewTimeProps {
  time: number
}

export type PreviewAdditionalProps = PreviewIsShowProps | PreviewTimeProps

export type PreviewProps = PreviewDefaultProps & PreviewAdditionalProps

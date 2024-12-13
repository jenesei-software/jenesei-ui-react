import { PropsWithChildren } from 'react'

type PreviewDefaultProps = PropsWithChildren

interface PreviewIsShowProps {
  isShow: boolean
}

interface PreviewTimeProps {
  time: number
}

export type PreviewAdditionalProps = PreviewIsShowProps | PreviewTimeProps

export type PreviewProps = PreviewDefaultProps & PreviewAdditionalProps

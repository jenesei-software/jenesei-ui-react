import { PropsWithChildren, ReactNode } from 'react'

type PreviewDefaultProps = { defaultVisible?: boolean; content?: ReactNode }

interface PreviewIsShowProps extends PreviewDefaultProps {
  visible: boolean
}

interface PreviewTimeProps extends PreviewDefaultProps {
  time: number
}

export type PreviewAdditionalProps = PreviewIsShowProps | PreviewTimeProps

export type PreviewProps = PropsWithChildren & PreviewAdditionalProps

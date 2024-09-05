import { FC, useEffect, useState } from 'react'

import { PreviewChildren, PreviewLoading, PreviewProps, PreviewWrapper } from '.'

export const Preview: FC<PreviewProps> = (props) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if ('time' in props) {
      const timer = setTimeout(() => {
        setVisible(true)
      }, props.time)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [props])

  useEffect(() => {
    if ('isShow' in props) {
      setVisible(!props.isShow)
    }
  }, [props])

  return (
    <>
      <PreviewWrapper visible={visible}>
        <PreviewLoading />
      </PreviewWrapper>
      <PreviewChildren visible={visible}>{props.children} </PreviewChildren>
    </>
  )
}

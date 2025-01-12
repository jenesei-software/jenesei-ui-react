import { FC, useEffect, useState } from 'react'

import { PreviewChildren, PreviewContent, PreviewLoading, PreviewProps, PreviewWrapper } from '.'

export const Preview: FC<PreviewProps> = props => {
  const [visible, setVisible] = useState(props.defaultVisible ?? false)

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
    if ('visible' in props) {
      setVisible(!props.visible)
    }
  }, [props])

  return (
    <>
      <PreviewWrapper $visible={visible}>
        <PreviewLoading />
        {!visible && props.content && <PreviewContent>{props.content}</PreviewContent>}
      </PreviewWrapper>
      <PreviewChildren $visible={visible}>{visible ? props.children : null}</PreviewChildren>
    </>
  )
}

import { FC, useEffect, useState } from 'react'

import { PreviewChildren, PreviewLoading, PreviewProps, PreviewWrapper } from '.'

const Preview: FC<PreviewProps> = props => {
  const [visible, setVisible] = useState(props.defaultVisible ?? true)

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
  console.log('visible', visible)
  return (
    <>
      <PreviewWrapper $visible={visible}>
        <PreviewLoading />
      </PreviewWrapper>
      <PreviewChildren $visible={visible}>{visible ? props.children : null}</PreviewChildren>
    </>
  )
}

export default Preview

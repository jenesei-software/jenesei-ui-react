import { FC, useEffect, useMemo, useState } from 'react'

import { Icon } from '@local/components/icon'

import { LoadingWrapper, PreviewChildren, PreviewContent, PreviewProps, PreviewWrapper } from '.'

export const Preview: FC<PreviewProps> = props => {
  const [visible, setVisible] = useState(props.defaultVisible ?? false)

  const propsVisible = useMemo(() => ('visible' in props ? props.visible : null), [props])
  const propsTime = useMemo(() => ('time' in props ? props.time : null), [props])

  useEffect(() => {
    if (propsTime !== null) {
      const timer = setTimeout(() => {
        setVisible(true)
      }, propsTime)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [propsTime])

  useEffect(() => {
    if (propsVisible !== null) {
      setVisible(!propsVisible)
    }
  }, [propsVisible])

  return (
    <>
      <PreviewWrapper $visible={visible}>
        <LoadingWrapper>
          <Icon size="100%" type="loading" primaryColor="blueFocus" name="Line" />
        </LoadingWrapper>
        {!visible && props.content && <PreviewContent>{props.content}</PreviewContent>}
      </PreviewWrapper>
      <PreviewChildren $visible={visible}>{visible ? props.children : null}</PreviewChildren>
    </>
  )
}

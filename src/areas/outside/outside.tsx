import { FC, PropsWithChildren, useEffect, useRef } from 'react'

interface OutsideProps extends PropsWithChildren {
  onOutsideClick: () => void
}

export const Outside: FC<OutsideProps> = props => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        props.onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [props])
  return (
    <div style={{ display: 'contents' }} ref={elementRef}>
      {props.children}
    </div>
  )
}

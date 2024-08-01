import { useEffect } from 'react'

export const usePreventOverscroll = () => {
  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 1 || event.targetTouches.length > 1) return
      if (
        event.changedTouches[0].pageY < 0 ||
        event.changedTouches[0].pageY > window.innerHeight
      ) {
        event.preventDefault()
      }
    }
    document.addEventListener(
      'touchmove',
      function (event) {
        event.preventDefault()
      },
      { passive: false },
    )
    document.body.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    })
    return () => {
      document.body.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])
}

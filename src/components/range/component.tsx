import { useCallback, useMemo } from 'react'
import { useTheme } from 'styled-components'

import { RangeMarker, RangeProps, RangeThumb, RangeTrack, RangeWrapper } from '.'

export const Range = (props: RangeProps) => {
  const { onChange } = props
  const handleChange = useCallback(
    (index: number, newValue: number) => {
      const newValues = [...props.values]
      newValues[index] = Math.min(props.max, Math.max(props.min, newValue))
      onChange(newValues.sort((a, b) => a - b))
    },
    [onChange, props.max, props.min, props.values]
  )
  const getThumbPositionPercent = useCallback(
    (val: number) => ((val - props.min) / (props.max - props.min)) * 100,
    [props.max, props.min]
  )
  const positions = useMemo(
    () => props.values.map(val => getThumbPositionPercent(val)),
    [getThumbPositionPercent, props.values]
  )
  const theme = useTheme()
  const colorTrack = theme.palette.grayAdriana
  const trackGradient = useMemo(
    () =>
      positions
        .map((position, idx) => {
          const isFirst = idx === 0
          const isLast = idx === positions.length - 1

          if (isFirst) return `${colorTrack} 0%, ${colorTrack} ${position}%, ${'#007bff'} ${position}%`
          if (isLast) return `${'#007bff'} ${position}%, ${colorTrack} ${position}%, ${colorTrack} 100%`
          return `${'#007bff'} ${position}%`
        })
        .join(', '),
    [colorTrack, positions]
  )
  const gradient = useMemo(() => `linear-gradient(to right, ${trackGradient})`, [trackGradient])

  return (
    <RangeWrapper $size={props.size} $width={props.width} $isError={props.isError} onBlur={props.onBlur}>
      {props.values.map((val, idx) => (
        <RangeThumb
          key={idx}
          type="range"
          $size={props.size}
          $genre={props.genre}
          min={props.min}
          max={props.max}
          step={props.step}
          value={val}
          onChange={e => handleChange(idx, parseFloat(e.target.value))}
          style={{ zIndex: 100 + idx }}
        />
      ))}
      <RangeTrack
        $size={props.size}
        $genre={props.genre}
        style={{
          background: gradient
        }}
      >
        {props.isShowMarker &&
          positions.map((val, idx) => (
            <RangeMarker
              $size={props.size}
              $genre={props.genre}
              key={`marker-${idx}`}
              style={{
                position: 'absolute',
                left: `calc(${getThumbPositionPercent(val)}% - 2px)`
              }}
            />
          ))}
      </RangeTrack>
    </RangeWrapper>
  )
}

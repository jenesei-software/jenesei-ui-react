import { useTheme } from 'styled-components'

import { RangeMarker, RangeProps, RangeThumb, RangeTrack, RangeWrapper } from '.'

export const Range = (props: RangeProps) => {
  const handleChange = (index: number, newValue: number) => {
    const newValues = [...props.values]
    newValues[index] = Math.min(props.max, Math.max(props.min, newValue))
    props.onChange(newValues.sort((a, b) => a - b))
  }
  const getThumbPositionPercent = (val: number) => ((val - props.min) / (props.max - props.min)) * 100
  const positions = props.values.map(val => getThumbPositionPercent(val))
  const theme = useTheme()
  const colorTrack = theme.colors.input[props.genre].color.placeholder
  const trackGradient = positions
    .map((position, idx) => {
      const isFirst = idx === 0
      const isLast = idx === positions.length - 1

      if (isFirst) return `${colorTrack} 0%, ${colorTrack} ${position}%, ${'#007bff'} ${position}%`
      if (isLast) return `${'#007bff'} ${position}%, ${colorTrack} ${position}%, ${colorTrack} 100%`
      return `${'#007bff'} ${position}%`
    })
    .join(', ')
  const gradient = `linear-gradient(to right, ${trackGradient})`

  return (
    <RangeWrapper $size={props.size} $width={props.width} $isError={props.isError} onBlur={props.onBlur}>
      <RangeTrack
        $size={props.size}
        $genre={props.genre}
        style={{
          background: gradient
        }}
      />
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
      {positions.map((val, idx) => (
        <RangeMarker
          $size={props.size}
          $genre={props.genre}
          key={`marker-${idx}`}
          style={{
            position: 'absolute',
            left: `calc(${getThumbPositionPercent(val)}% - 0px)`
          }}
        />
      ))}
    </RangeWrapper>
  )
}

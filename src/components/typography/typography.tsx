import { Ref, forwardRef, memo, useEffect, useRef, useState } from 'react'

import { Tooltip } from '@components/tooltip'

import {
  SpanFont,
  TitleH1,
  TitleH2,
  TitleH3,
  TitleH4,
  TitleH5,
  TitleH6,
  TitleH7,
  TitleH8,
  TitleH9,
  TypographyProps,
  TypographyTooltipProps,
} from '.'

export const Typography = forwardRef<HTMLElement | HTMLHeadingElement | undefined, TypographyProps>((props, ref) => {
  const commonProps = {
    $clamp: props.clamp,
    $clampOrient: props.clampOrient,
    $color: props.color,
    $family: props.family,
    $overflow: props.overflow,
    $textAlign: props.textAlign,
    $textWrap: props.textWrap,
    $weight: props.weight,
    $flex: props.flex,
    className: props.className,
    style: props.style,
  }

  if ('variant' in props) {
    if (props.variant === 'h1') {
      return (
        <TitleH1 ref={ref as Ref<HTMLHeadingElement>} {...commonProps}>
          {props.children}
        </TitleH1>
      )
    } else if (props.variant === 'h2') {
      return (
        <TitleH2 ref={ref as Ref<HTMLHeadingElement>} {...commonProps}>
          {props.children}
        </TitleH2>
      )
    } else if (props.variant === 'h3') {
      return (
        <TitleH3 ref={ref as Ref<HTMLHeadingElement>} {...commonProps}>
          {props.children}
        </TitleH3>
      )
    } else if (props.variant === 'h4') {
      return (
        <TitleH4 ref={ref as Ref<HTMLHeadingElement>} {...commonProps}>
          {props.children}
        </TitleH4>
      )
    } else if (props.variant === 'h5') {
      return (
        <TitleH5 ref={ref as Ref<HTMLHeadingElement>} {...commonProps}>
          {props.children}
        </TitleH5>
      )
    } else if (props.variant === 'h6') {
      return (
        <TitleH6 ref={ref as Ref<HTMLHeadingElement>} {...commonProps}>
          {props.children}
        </TitleH6>
      )
    } else if (props.variant === 'h7') {
      return (
        <TitleH7 ref={ref as Ref<HTMLHeadingElement>} {...commonProps}>
          {props.children}
        </TitleH7>
      )
    } else if (props.variant === 'h8') {
      return (
        <TitleH8 ref={ref as Ref<HTMLHeadingElement>} {...commonProps}>
          {props.children}
        </TitleH8>
      )
    } else if (props.variant === 'h9') {
      return (
        <TitleH9 ref={ref as Ref<HTMLHeadingElement>} {...commonProps}>
          {props.children}
        </TitleH9>
      )
    }
  }

  if ('size' in props) {
    return (
      <SpanFont
        ref={ref as Ref<HTMLElement>}
        {...commonProps}
        $height={props.height}
        $size={props.size}
        $weight={props.weight}
      >
        {props.children}
      </SpanFont>
    )
  }

  return (
    <SpanFont ref={ref as Ref<HTMLElement>} {...commonProps}>
      {props.children}
    </SpanFont>
  )
})

Typography.displayName = 'Typography'

export const TypographyTooltip = memo((props: TypographyTooltipProps) => {
  const [isOverflowing, setIsOverflowing] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        setIsOverflowing(contentRef.current.scrollWidth > contentRef.current.clientWidth)
      }
    }
    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [props.children])

  return (
    <Tooltip isDisabled={!isOverflowing} content={props.children} {...props.tooltip}>
      <Typography ref={contentRef} {...props.typography} style={{ position: 'relative' }}>
        {props.children}
      </Typography>
    </Tooltip>
  )
})

TypographyTooltip.displayName = 'TypographyTooltip'

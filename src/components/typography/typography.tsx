import React, { Ref, forwardRef } from 'react'

// Don't forget to import React from 'react'
import {
  SpanFont,
  TitleH1,
  TitleH2,
  TitleH3,
  TitleH4,
  TitleH5,
  TitleH6,
  TypographyProps,
} from '.'

export const Typography = forwardRef<
  HTMLElement | HTMLHeadingElement,
  TypographyProps
>((props, ref) => {
  const commonProps = {
    $clamp: props.clamp,
    $clampOrient: props.clampOrient,
    $color: props.color,
    $family: props.family,
    $overflow: props.overflow,
    $textAlign: props.textAlign,
    $textWrap: props.textWrap,
    className: props.className,
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
    }
  }

  if ('size' in props) {
    return (
      <SpanFont
        ref={ref}
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
    <SpanFont ref={ref} {...commonProps}>
      {props.children}
    </SpanFont>
  )
})

import { Ref, forwardRef } from 'react'

import {
  TitleAnchor,
  TitleFont,
  TitleH1,
  TitleH2,
  TitleH3,
  TitleH4,
  TitleH5,
  TitleH6,
  TitleH7,
  TitleH8,
  TitleH9,
  TitleParagraph,
  TypographyCSSProps,
  TypographyProps
} from '.'

export const Typography = forwardRef<HTMLElement | HTMLHeadingElement | undefined, TypographyProps>((props, ref) => {
  const cssProps: TypographyCSSProps = {
    $clamp: props.clamp,
    $clampOrient: props.clampOrient,
    $color: props.color,
    $family: props.family,
    $overflow: props.overflow,
    $align: props.align,
    $wrap: props.wrap,
    $decoration: props.decoration,
    $transform: props.transform,
    $weight: props.weight,
    $height: props.height,
    $flex: props.flex,
    $cursor: props.cursor,
    $isHoverUnderlining: props.isHoverUnderlining,
    $device: props.device,
    $size: 'size' in props ? props.size : undefined,
    $sizeMobile: 'sizeMobile' in props ? props.sizeMobile : undefined,
    $sizeTablet: 'sizeTablet' in props ? props.sizeTablet : undefined,
    $variant: 'variant' in props ? props.variant : undefined,
    className: props.className,
    style: props.style,
    onClick: props.onClick ? props.onClick : () => {}
  }

  if ('variant' in props) {
    if (props.variant === 'h1') {
      return props.isAnchor ? (
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} {...cssProps}>
          {props.children}
        </TitleAnchor>
      ) : props.isParagraph ? (
        <TitleParagraph ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleParagraph>
      ) : (
        <TitleH1 ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleH1>
      )
    } else if (props.variant === 'h2') {
      return props.isAnchor ? (
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} {...cssProps}>
          {props.children}
        </TitleAnchor>
      ) : props.isParagraph ? (
        <TitleParagraph ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleParagraph>
      ) : (
        <TitleH2 ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleH2>
      )
    } else if (props.variant === 'h3') {
      return props.isAnchor ? (
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} {...cssProps}>
          {props.children}
        </TitleAnchor>
      ) : props.isParagraph ? (
        <TitleParagraph ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleParagraph>
      ) : (
        <TitleH3 ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleH3>
      )
    } else if (props.variant === 'h4') {
      return props.isAnchor ? (
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} {...cssProps}>
          {props.children}
        </TitleAnchor>
      ) : props.isParagraph ? (
        <TitleParagraph ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleParagraph>
      ) : (
        <TitleH4 ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleH4>
      )
    } else if (props.variant === 'h5') {
      return props.isAnchor ? (
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} {...cssProps}>
          {props.children}
        </TitleAnchor>
      ) : props.isParagraph ? (
        <TitleParagraph ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleParagraph>
      ) : (
        <TitleH5 ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleH5>
      )
    } else if (props.variant === 'h6') {
      return props.isAnchor ? (
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} {...cssProps}>
          {props.children}
        </TitleAnchor>
      ) : props.isParagraph ? (
        <TitleParagraph ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleParagraph>
      ) : (
        <TitleH6 ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleH6>
      )
    } else if (props.variant === 'h7') {
      return props.isAnchor ? (
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} {...cssProps}>
          {props.children}
        </TitleAnchor>
      ) : props.isParagraph ? (
        <TitleParagraph ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleParagraph>
      ) : (
        <TitleH7 ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleH7>
      )
    } else if (props.variant === 'h8') {
      return props.isAnchor ? (
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} {...cssProps}>
          {props.children}
        </TitleAnchor>
      ) : props.isParagraph ? (
        <TitleParagraph ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleParagraph>
      ) : (
        <TitleH8 ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleH8>
      )
    } else if (props.variant === 'h9') {
      return props.isAnchor ? (
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} {...cssProps}>
          {props.children}
        </TitleAnchor>
      ) : props.isParagraph ? (
        <TitleParagraph ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleParagraph>
      ) : (
        <TitleH9 ref={ref as Ref<HTMLHeadingElement>} {...cssProps}>
          {props.children}
        </TitleH9>
      )
    }
  }

  if ('size' in props) {
    return (
      <TitleFont
        ref={ref as Ref<HTMLElement>}
        {...cssProps}
        $height={props.height}
        $size={props.size}
        $weight={props.weight}
      >
        {props.children}
      </TitleFont>
    )
  }

  return (
    <TitleFont ref={ref as Ref<HTMLElement>} {...cssProps}>
      {props.children}
    </TitleFont>
  )
})

Typography.displayName = 'Typography'

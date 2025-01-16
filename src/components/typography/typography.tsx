import { LinkProps, createLink } from '@tanstack/react-router'
import { Ref, forwardRef, memo, useEffect, useRef, useState } from 'react'

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
  TypographyDataProps,
  TypographyProps,
  TypographyTooltipProps,
  TypographyVariantProps
} from '.'
import { Tooltip } from '../tooltip'

export const TypographyWithRef = forwardRef<
  HTMLElement | HTMLHeadingElement | HTMLAnchorElement | undefined,
  TypographyProps
>((props, ref) => {
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
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} href={props.href} {...cssProps}>
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
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} href={props.href} {...cssProps}>
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
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} href={props.href} {...cssProps}>
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
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} href={props.href} {...cssProps}>
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
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} href={props.href} {...cssProps}>
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
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} href={props.href} {...cssProps}>
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
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} href={props.href} {...cssProps}>
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
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} href={props.href} {...cssProps}>
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
        <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} href={props.href} {...cssProps}>
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

  if (props.isAnchor) {
    return (
      <TitleAnchor ref={ref as Ref<HTMLAnchorElement>} href={props.href} {...cssProps}>
        {props.children}
      </TitleAnchor>
    )
  }

  if ('size' in props) {
    return (
      <TitleFont ref={ref as Ref<HTMLElement>} {...cssProps}>
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

export const Typography = (props: TypographyProps) => {
  return <TypographyWithRef {...props} />
}

const TypographyVariantIsAnchor = forwardRef<HTMLElement, TypographyVariantProps & LinkProps>((props, ref) => {
  return <TypographyWithRef isAnchor {...props} ref={ref} href={props.href} />
})

const TypographySizeIsAnchor = forwardRef<HTMLElement, TypographyDataProps & LinkProps>((props, ref) => {
  return <TypographyWithRef isAnchor {...props} ref={ref} href={props.href} />
})

export const TypographyLinkVariant = createLink(TypographyVariantIsAnchor)
export const TypographyLinkSize = createLink(TypographySizeIsAnchor)

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
      <TypographyWithRef ref={contentRef} {...props.typography} style={{ position: 'relative' }}>
        {props.children}
      </TypographyWithRef>
    </Tooltip>
  )
})

TypographyTooltip.displayName = 'TypographyTooltip'
TypographyWithRef.displayName = 'TypographyWithRef'
TypographyVariantIsAnchor.displayName = 'TypographyVariantIsAnchor'
TypographySizeIsAnchor.displayName = 'TypographySizeIsAnchor'

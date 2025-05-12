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
  TypographyProps,
  TypographyTooltipProps
} from '.'
import { Tooltip } from '../tooltip'

const TypographyWithRef = forwardRef<HTMLElement | HTMLHeadingElement | HTMLAnchorElement | undefined, TypographyProps>(
  (props, ref) => {
    const cssProps: TypographyCSSProps & Pick<TypographyProps, 'onClick' | 'className' | 'style'> = {
      $sx: props.sx,
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
  }
)

export const Typography = (props: TypographyProps) => {
  return <TypographyWithRef {...props} />
}

const TypographySizeIsAnchor = forwardRef<HTMLElement, TypographyProps & LinkProps>((props, ref) => {
  return <TypographyWithRef isAnchor {...props} ref={ref} href={props.href} />
})

export const TypographyLink = createLink(TypographySizeIsAnchor)

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
TypographySizeIsAnchor.displayName = 'TypographySizeIsAnchor'

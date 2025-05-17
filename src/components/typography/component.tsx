import { LinkProps, createLink } from '@tanstack/react-router'
import { forwardRef, memo, useEffect, useMemo, useRef, useState } from 'react'

import { useScreenWidth } from '@local/contexts/context-screen-width'

import { Title, TypographyCSSProps, TypographyProps, TypographyTooltipProps } from '.'
import { Tooltip } from '../tooltip'

const TypographyWithRef = forwardRef<HTMLElement | HTMLHeadingElement | HTMLAnchorElement | undefined, TypographyProps>(
  (props, ref) => {
    const { screenActual } = useScreenWidth()
    const cssProps: TypographyCSSProps & Pick<TypographyProps, 'onClick' | 'className' | 'style'> = useMemo(
      () => ({
        $sx: props.sx,
        className: props.className,
        style: props.style,
        onClick: props.onClick ? props.onClick : () => {}
      }),
      [props.sx, props.className, props.style, props.onClick]
    )

    const screenSX = useMemo(() => props.sx?.[screenActual.value] ?? props.sx?.default, [props.sx, screenActual.value])

    if (screenSX && 'variant' in screenSX) {
      if (screenSX.variant === 'h7' || screenSX.variant === 'h8' || screenSX.variant === 'h9') {
        return (
          <Title
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={ref as any}
            as={props.isAnchor ? 'a' : props.isParagraph ? 'p' : 'span'}
            href={props.href}
            {...cssProps}
          >
            {props.children}
          </Title>
        )
      } else {
        return (
          <Title
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={ref as any}
            as={props.isAnchor ? 'a' : props.isParagraph ? 'p' : screenSX.variant}
            href={props.href}
            {...cssProps}
          >
            {props.children}
          </Title>
        )
      }
    }

    return (
      <Title
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        as={props.isAnchor ? 'a' : props.isParagraph ? 'p' : 'span'}
        href={props.href}
        {...cssProps}
      >
        {props.children}
      </Title>
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

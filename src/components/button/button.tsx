import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FC, useEffect, useRef, useState } from 'react'
import { Ripple } from 'react-ripple-click'
import { useTheme } from 'styled-components'

import { Icon } from '@components/icon'
import { ModalLoading } from '@components/modal-loading'

import {
  ButtonProps,
  StyledButton,
  StyledButtonContainer,
  StyledButtonContainerProps,
  StyledButtonIconsWrapper
} from '.'

export const Button: FC<ButtonProps> = (props) => {
  const theme = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [dimensions, setDimensions] = useState<StyledButtonContainerProps>({
    $width: 'auto',
    $height: 'auto'
  })

  useEffect(() => {
    const buttonElement = buttonRef.current
    if (!buttonElement) return

    const updateDimensions = () => {
      if (props.width === '100%') {
        const rect = buttonElement.getBoundingClientRect()
        setDimensions({
          $width: `100%`,
          $height: `${rect.height}px`
        })
      } else {
        const rect = buttonElement.getBoundingClientRect()
        setDimensions({
          $width: `${rect.width}px`,
          $height: `${rect.height}px`
        })
      }
    }

    const observer = new ResizeObserver(() => {
      if (props.width === '100%') {
        const rect = buttonElement.getBoundingClientRect()
        setDimensions({
          $width: `100%`,
          $height: `${rect.height}px`
        })
      } else {
        const rect = buttonElement.getBoundingClientRect()
        setDimensions({
          $width: `${rect.width}px`,
          $height: `${rect.height}px`
        })
      }
    })

    observer.observe(buttonElement)

    updateDimensions()

    return () => {
      observer.unobserve(buttonElement)
    }
  }, [props.width])

  const { contextSafe } = useGSAP(
    () => {
      const currentButton = buttonRef.current
      if (props.isEffect && currentButton) {
        const handleMouseDown = contextSafe(() => {
          gsap.to(currentButton, {
            scale: 1,
            duration: 0.1,
            ease: 'power1.in',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
            transformOrigin: 'center center',
            willChange: 'transform'
          })
        })

        const handleMouseEnter = contextSafe(() => {
          gsap.to(currentButton, {
            scale: 1.05,
            duration: 0.1,
            transformOrigin: 'center center',
            zIndex: 2,
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)'
          })
        })

        const handleMouseLeave = contextSafe(() => {
          gsap.to(currentButton, {
            scale: 1,
            duration: 0.1,
            transformOrigin: 'center center',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            onComplete: () => {
              gsap.to(currentButton, { zIndex: 'auto', duration: 0 })
            }
          })
        })

        currentButton.addEventListener('mouseenter', handleMouseEnter)
        currentButton.addEventListener('mouseleave', handleMouseLeave)
        currentButton.addEventListener('mousedown', handleMouseDown)
        currentButton.addEventListener('mouseup', handleMouseEnter)

        return () => {
          currentButton.removeEventListener('mouseenter', handleMouseEnter)
          currentButton.removeEventListener('mouseleave', handleMouseLeave)
          currentButton.removeEventListener('mousedown', handleMouseDown)
          currentButton.removeEventListener('mouseup', handleMouseEnter)
        }
      }
    },
    { scope: buttonRef, dependencies: [props.isEffect] }
  )

  const modalLoadingComponent = (
    <ModalLoading
      size={props.size}
      color={theme.colors.button[props.genre].color.rest}
      order={props.loadingOrder}
    />
  )

  const handleClick: ButtonProps['onClick'] = (event) => {
    if (!props.isLoading && !props.isDisabled && props.onClick) {
      props.onClick(event)
    }
  }

  return (
    <StyledButtonContainer {...dimensions}>
      <StyledButton
        ref={buttonRef}
        id={props.id}
        tabIndex={0}
        $isFullSize={props.isFullSize}
        $genre={props.genre}
        $width={props.width}
        $flex={props.flex}
        $size={props.size}
        $isDisabled={props.isDisabled}
        $isRadius={props.isRadius}
        $isHidden={props.isHidden}
        $isPlaystationEffect={props.isPlaystationEffect}
        $customFontFamily={props.customFontFamily}
        $customFontSize={props.customFontSize}
        $customFontWeight={props.customFontWeight}
        $isHiddenBorder={props.isHiddenBorder || props.isPlaystationEffect}
        disabled={props.isDisabled}
        type={props.type ?? 'button'}
        className={props.className}
        onClick={handleClick}
        $flexDirection={props.customStyles?.flexDirection}
        $flexWrap={props.customStyles?.flexWrap}
        $justifyContent={props.customStyles?.justifyContent}
        $alignItems={props.customStyles?.alignItems}
        $alignContent={props.customStyles?.alignContent}
        $order={props.customStyles?.order}
        $flexGrow={props.customStyles?.flexGrow}
        $flexShrink={props.customStyles?.flexShrink}
        $flexBasis={props.customStyles?.flexBasis}
        $alignSelf={props.customStyles?.alignSelf}
        $gap={props.customStyles?.gap}
      >
        {!props.isHidden && <Ripple />}
        {props.isOnlyLoading ? (
          props.isLoading ? (
            modalLoadingComponent
          ) : (
            <>
              <div style={{ order: 0, display: 'contents' }}>
                {props.children && props.children}
              </div>
              {props.iconName && (
                <Icon
                  name={props.iconName}
                  type="curved"
                  size={props.size}
                  turn={props.iconTurn}
                  order={props.iconOrder}
                />
              )}
            </>
          )
        ) : (
          <>
            <div style={{ order: 0, display: 'contents' }}>
              {props.children && props.children}
            </div>
            <StyledButtonIconsWrapper
              $size={props.size}
              $isIconGroup={props.isIconGroup}
              $iconGroupOrder={props.iconGroupOrder}
            >
              {props.isOnlyLoadingWithGroup ? (
                <>{props.isLoading && modalLoadingComponent}</>
              ) : (
                <>
                  {props.isLoading && modalLoadingComponent}
                  {props.iconName && (
                    <Icon
                      name={props.iconName}
                      type="curved"
                      size={props.size}
                      turn={props.iconTurn}
                      order={props.iconOrder}
                    />
                  )}
                </>
              )}
            </StyledButtonIconsWrapper>
          </>
        )}
      </StyledButton>
    </StyledButtonContainer>
  )
}

import { FC } from 'react'
import { Ripple } from 'react-ripple-click'
import { useTheme } from 'styled-components'

import { Icon } from '@components/icon'
import { ModalLoading } from '@components/modal-loading'

import { ButtonProps, StyledButton, StyledButtonIconsWrapper } from '.'

export const Button: FC<ButtonProps> = (props) => {
  const theme = useTheme()

  const modalLoadingComponent = (
    <ModalLoading size={props.size} color={theme.colors.button[props.genre].color.rest} order={props.loadingOrder} />
  )

  const handleClick: ButtonProps['onClick'] = (event) => {
    if (!props.isLoading && !props.isDisabled && props.onClick) {
      props.onClick(event)
    }
  }

  return (
    <StyledButton
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
            <div style={{ order: 0, display: 'contents' }}>{props.children && props.children}</div>
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
          <div style={{ order: 0, display: 'contents' }}>{props.children && props.children}</div>
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
  )
}

import { FC } from 'react'
import { useTheme } from 'styled-components'

import { Icon } from '@local/components/icon'
import { Ripple } from '@local/components/ripple'

import { ButtonProps, StyledButton, StyledButtonIconsWrapper } from '.'

export const Button: FC<ButtonProps> = props => {
  const theme = useTheme()

  const LoadingComponent = <Icon size={props.size} type="loading" name="Line" order={props.loadingOrder} />

  const IconComponent = props.iconName && (
    <Icon name={props.iconName} type="id" size={props.size} turn={props.iconTurn} order={props.iconOrder} />
  )

  const handleClick: ButtonProps['onClick'] = event => {
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
      $minWidth={props.minWidth}
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
      $flexDirection={props.styleCustom?.flexDirection}
      $flexWrap={props.styleCustom?.flexWrap}
      $justifyContent={props.styleCustom?.justifyContent}
      $alignItems={props.styleCustom?.alignItems}
      $alignContent={props.styleCustom?.alignContent}
      $order={props.styleCustom?.order}
      $flexGrow={props.styleCustom?.flexGrow}
      $flexShrink={props.styleCustom?.flexShrink}
      $flexBasis={props.styleCustom?.flexBasis}
      $alignSelf={props.styleCustom?.alignSelf}
      $gap={props.styleCustom?.gap}
      style={props.styleCSS}
    >
      <Ripple
        color={theme.colors.checkbox[props.genre].color.rest}
        isDisabled={props.isDisabled}
        isHidden={props.isHidden}
      />
      {props.isOnlyLoading ? (
        props.isLoading ? (
          LoadingComponent
        ) : (
          <>
            <div style={{ order: 0, display: 'contents' }}>{props.children && props.children}</div>
            {IconComponent}
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
              <>{props.isLoading && LoadingComponent}</>
            ) : (
              <>
                {props.isLoading && LoadingComponent}
                {IconComponent}
              </>
            )}
          </StyledButtonIconsWrapper>
        </>
      )}
    </StyledButton>
  )
}

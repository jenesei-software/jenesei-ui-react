import { FC } from 'react'
import { useTheme } from 'styled-components'

import {
  Icon,
  TLibraryIcoRealEbailNameNameString,
  TLibraryIconCheckboxNameString,
  TLibraryIconIdNameString,
  TLibraryIconLoadingNameString
} from '@local/components/icon'
import { Ripple } from '@local/components/ripple'

import { ButtonProps, StyledButton, StyledButtonIconsWrapper } from '.'

export const Button: FC<ButtonProps> = props => {
  const theme = useTheme()

  const LoadingComponent = (
    <Icon size={props.icon?.size ?? props.size} type="loading" name="Line" order={props.loadingOrder} />
  )

  const IconComponent =
    props.icon &&
    (props.icon?.type === 'id' ? (
      <Icon
        name={props.icon?.name as TLibraryIconIdNameString}
        type="id"
        size={props.icon?.size ?? props.size}
        turn={props.icon.turn}
        order={props.icon.order}
      />
    ) : props.icon?.type === 'checkbox' ? (
      <Icon
        name={props.icon?.name as TLibraryIconCheckboxNameString}
        type="checkbox"
        size={props.icon?.size ?? props.size}
        turn={props.icon.turn}
        order={props.icon.order}
      />
    ) : props.icon?.type === 'loading' ? (
      <Icon
        name={props.icon?.name as TLibraryIconLoadingNameString}
        type="loading"
        size={props.icon?.size ?? props.size}
        turn={props.icon.turn}
        order={props.icon.order}
      />
    ) : props.icon?.type === 'realebail' ? (
      <Icon
        name={props.icon?.name as TLibraryIcoRealEbailNameNameString}
        type="realebail"
        size={props.icon?.size ?? props.size}
        turn={props.icon.turn}
        order={props.icon.order}
      />
    ) : null)

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
      $sx={props.sx}
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

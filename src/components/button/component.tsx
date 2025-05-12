import { FC, useMemo } from 'react'
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

  const iconComponents = useMemo(
    () =>
      props.icons?.map((icon, index) =>
        icon?.type === 'id' ? (
          <Icon
            key={index}
            name={icon?.name as TLibraryIconIdNameString}
            type="id"
            size={icon?.size ?? props.size}
            turn={icon.turn}
            order={icon.order}
            sx={{
              default: {}
            }}
          />
        ) : icon?.type === 'checkbox' ? (
          <Icon
            key={index}
            name={icon?.name as TLibraryIconCheckboxNameString}
            type="checkbox"
            size={icon?.size ?? props.size}
            turn={icon.turn}
            order={icon.order}
          />
        ) : icon?.type === 'loading' ? (
          <Icon
            key={index}
            name={icon?.name as TLibraryIconLoadingNameString}
            type="loading"
            size={icon?.size ?? props.size}
            turn={icon.turn}
            order={icon.order}
          />
        ) : icon?.type === 'realebail' ? (
          <Icon
            key={index}
            name={icon?.name as TLibraryIcoRealEbailNameNameString}
            type="realebail"
            size={icon?.size ?? props.size}
            turn={icon.turn}
            order={icon.order}
          />
        ) : null
      ),
    [props.icons, props.size]
  )

  const handleClick: ButtonProps['onClick'] = event => {
    if (!props.isDisabled && props.onClick) {
      props.onClick(event)
    }
  }

  return (
    <StyledButton
      id={props.id}
      tabIndex={0}
      $isFullSize={props.isFullSize}
      $genre={props.genre}
      $size={props.size}
      $isDisabled={props.isDisabled}
      $isWidthAsHeight={props.isWidthAsHeight}
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
      <>
        {!props.isOnlyIcon && <div style={{ order: 0, display: 'contents' }}>{props.children && props.children}</div>}
        <StyledButtonIconsWrapper
          $size={props.size}
          $isIconGroup={props.isIconGroup}
          $iconGroupOrder={'iconGroupOrder' in props ? props.iconGroupOrder : undefined}
        >
          {iconComponents}
        </StyledButtonIconsWrapper>
      </>
    </StyledButton>
  )
}

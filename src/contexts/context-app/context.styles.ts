import { css, styled } from 'styled-components'

import { addGridTransition, addTransition } from '@local/styles/add'
import { JeneseiPalette } from '@local/theme'

import { ProviderAppOutletChildrenProps, ProviderAppOutletProps, ProviderAppWrapperProps } from '.'

export const ProviderAppWrapper = styled.div<ProviderAppWrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: 100dvw;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  position: relative;

  background-color: ${props => JeneseiPalette[props.$bgColor]};
  background-image: url(${props => props.$bgImage});
`

const generateGridTemplateAreas = (props: ProviderAppOutletProps) => {
  let templateAreas = `
    "notification notification notification"
    "header header header"
    "nav nav nav"
    "leftAside children rightAside"
    "footer footer footer"
  `

  templateAreas = `
      "notification notification notification"
      "${props.$leftAside?.isTopHeader ? 'leftAside' : 'header'} header ${props.$rightAside?.isTopHeader ? 'rightAside' : 'header'}"
      "${props.$leftAside?.isTopHeader ? 'leftAside' : props.$leftAside?.isTopNav ? 'leftAside' : 'nav'} nav ${props.$rightAside?.isTopHeader ? 'rightAside' : props.$rightAside?.isTopNav ? 'rightAside' : 'nav'}"
      "leftAside children rightAside"
      "${props.$leftAside?.isTopFooter ? 'leftAside' : 'footer'} footer ${props.$rightAside?.isTopFooter ? 'rightAside' : 'footer'}"
    `

  return templateAreas
}

function toStyledCSS(props: {
  leftAsideWidth: string
  rightAsideWidth: string
  notificationHeight: string
  headerHeight: string
  navHeight: string
  footerHeight: string
}) {
  return css`
    grid-template-columns: ${() => `${props.leftAsideWidth} 1fr ${props.rightAsideWidth}`};
    grid-template-rows: ${() =>
      `${props.notificationHeight} ${props.headerHeight} ${props.navHeight} 1fr ${props.footerHeight}`};
  `
}
const addSXAppOutlet = css<ProviderAppOutletProps>`
  ${props => {
    const leftAsideWidth = props.$leftAside?.width?.default
    const rightAsideWidth = props.$rightAside?.width?.default
    const notificationHeight = props.$notification?.height?.default
    const headerHeight = props.$header?.height?.default
    const navHeight = props.$nav?.height?.default
    const footerHeight = props.$footer?.height?.default
    return toStyledCSS({
      leftAsideWidth: leftAsideWidth ?? '0px',
      rightAsideWidth: rightAsideWidth ?? '0px',
      notificationHeight: notificationHeight ?? '0px',
      headerHeight: headerHeight ?? '0px',
      navHeight: navHeight ?? '0px',
      footerHeight: footerHeight ?? '0px'
    })
  }}
  ${props => {
    const leftAsideWidth = props.$leftAside?.width
    const rightAsideWidth = props.$rightAside?.width
    const notificationHeight = props.$notification?.height
    const headerHeight = props.$header?.height
    const navHeight = props.$nav?.height
    const footerHeight = props.$footer?.height

    return Object.entries(props.theme.screens)
      .filter(([key]) => key !== 'default')
      .map(([key]) => {
        const deviceKey = key as keyof typeof props.theme.screens
        const screenWidth = props.theme.screens[deviceKey]?.width
        if (!screenWidth) return null
        return css`
          @media (max-width: ${screenWidth}) {
            ${toStyledCSS({
              leftAsideWidth: leftAsideWidth && leftAsideWidth[deviceKey] ? leftAsideWidth[deviceKey] : '0px',
              rightAsideWidth: rightAsideWidth && rightAsideWidth[deviceKey] ? rightAsideWidth[deviceKey] : '0px',
              notificationHeight:
                notificationHeight && notificationHeight[deviceKey] ? notificationHeight[deviceKey] : '0px',
              headerHeight: headerHeight && headerHeight[deviceKey] ? headerHeight[deviceKey] : '0px',
              navHeight: navHeight && navHeight[deviceKey] ? navHeight[deviceKey] : '0px',
              footerHeight: footerHeight && footerHeight[deviceKey] ? footerHeight[deviceKey] : '0px'
            })}
          }
        `
      })
  }}
`
export const ProviderAppOutlet = styled.div<ProviderAppOutletProps>`
  display: grid;
  width: 100%;
  height: 100%;

  min-height: 100dvh;
  max-height: none;

  ${addGridTransition};

  ${props => `
    grid-template-areas: ${generateGridTemplateAreas(props)};
  `}

  ${props =>
    props.$isScrollOutlet &&
    css`
      max-height: 100dvh;
    `};

  ${addSXAppOutlet};
`

const hiddenStyles = css`
  opacity: 0;
  visibility: hidden;
  ${addTransition};
`

const visibleStyles = css`
  opacity: 1;
  visibility: visible;
  ${addTransition};
`

export const ProviderAppOutletChildren = styled.main<ProviderAppOutletChildrenProps>`
  ${props =>
    props.$main?.zIndex !== undefined &&
    css`
      z-index: ${props.$main.zIndex};
    `};
  display: flex;
  grid-area: children;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`

export const ProviderAppOutletNotification = styled.section<ProviderAppOutletProps>`
  ${props =>
    props.$notification?.zIndex !== undefined &&
    css`
      z-index: ${props.$notification.zIndex};
    `};

  grid-area: notification;
  display: flex;

  ${props =>
    props.$notification?.isFixed &&
    css`
      position: fixed;
      width: 100%;
      height: ${props.$notification.height};
      @media (max-width: ${props => props.theme.screens.tablet.width}) {
        height: ${props.$notification.heightTablet ? props.$notification.heightTablet : '0px'};
      }

      @media (max-width: ${props => props.theme.screens.mobile.width}) {
        height: ${props.$notification && props.$notification.heightMobile ? props.$notification.heightMobile : '0px'};
      }
    `}

  ${props => (props.$notification?.height ? visibleStyles : hiddenStyles)}

  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    ${props => (props.$notification?.heightTablet ? visibleStyles : hiddenStyles)}
  }

  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    ${props => (props.$notification?.heightMobile ? visibleStyles : hiddenStyles)}
  }
`

export const ProviderAppOutletHeader = styled.header<ProviderAppOutletProps>`
  ${props =>
    props.$header?.zIndex !== undefined &&
    css`
      z-index: ${props.$header.zIndex};
    `};

  grid-area: header;
  display: flex;

  ${props => (props.$header?.height ? visibleStyles : hiddenStyles)}

  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    ${props => (props.$header?.heightTablet ? visibleStyles : hiddenStyles)}
  }

  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    ${props => (props.$header?.heightMobile ? visibleStyles : hiddenStyles)}
  }
`

export const ProviderAppOutletFooter = styled.footer<ProviderAppOutletProps>`
  ${props =>
    props.$footer?.zIndex !== undefined &&
    css`
      z-index: ${props.$footer.zIndex};
    `};

  grid-area: footer;
  display: flex;

  ${props => (props.$footer?.height ? visibleStyles : hiddenStyles)}

  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    ${props => (props.$footer?.heightTablet ? visibleStyles : hiddenStyles)}
  }

  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    ${props => (props.$footer?.heightMobile ? visibleStyles : hiddenStyles)}
  }
`

export const ProviderAppOutletNav = styled.nav<ProviderAppOutletProps>`
  ${props =>
    props.$nav?.zIndex !== undefined &&
    css`
      z-index: ${props.$nav.zIndex};
    `};

  grid-area: nav;
  display: flex;

  ${props => (props.$nav?.height ? visibleStyles : hiddenStyles)}

  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    ${props => (props.$nav?.heightTablet ? visibleStyles : hiddenStyles)}
  }

  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    ${props => (props.$nav?.heightMobile ? visibleStyles : hiddenStyles)}
  }
`

export const ProviderAppOutletLeftAside = styled.aside<ProviderAppOutletProps>`
  ${props =>
    props.$leftAside?.zIndex !== undefined &&
    css`
      z-index: ${props.$leftAside.zIndex};
    `};

  grid-area: leftAside;
  display: flex;

  ${props => (props.$leftAside?.width ? visibleStyles : hiddenStyles)}

  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    ${props => (props.$leftAside?.widthTablet ? visibleStyles : hiddenStyles)}
  }

  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    ${props => (props.$leftAside?.widthMobile ? visibleStyles : hiddenStyles)}
  }
`

export const ProviderAppOutletRightAside = styled.aside<ProviderAppOutletProps>`
  ${props =>
    props.$rightAside?.zIndex !== undefined &&
    css`
      z-index: ${props.$rightAside.zIndex};
    `};

  grid-area: rightAside;
  display: flex;

  ${props => (props.$rightAside?.width ? visibleStyles : hiddenStyles)}

  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    ${props => (props.$rightAside?.widthTablet ? visibleStyles : hiddenStyles)}
  }

  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    ${props => (props.$rightAside?.widthMobile ? visibleStyles : hiddenStyles)}
  }
`

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

  grid-template-columns: ${props =>
    `${props.$leftAside ? props.$leftAside.width : '0px'} 1fr ${props.$rightAside ? props.$rightAside.width : '0px'}`};

  grid-template-rows: ${props =>
    `${props.$notification ? props.$notification.height : '0px'} ${props.$header ? props.$header.height : '0px'} ${props.$nav ? props.$nav.height : '0px'} 1fr ${props.$footer ? props.$footer.height : '0px'}`};

  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    grid-template-columns: ${props =>
      `${props.$leftAside && props.$leftAside.widthTablet ? props.$leftAside.widthTablet : '0px'} 1fr ${props.$rightAside && props.$rightAside.widthTablet ? props.$rightAside.widthTablet : '0px'}`};

    grid-template-rows: ${props =>
      `${props.$notification && props.$notification.heightTablet ? props.$notification.heightTablet : '0px'} ${props.$header && props.$header.heightTablet ? props.$header.heightTablet : '0px'} ${props.$nav && props.$nav.heightTablet ? props.$nav.heightTablet : '0px'} 1fr ${props.$footer && props.$footer.heightTablet ? props.$footer.heightTablet : '0px'}`};
  }

  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    grid-template-columns: ${props =>
      `${props.$leftAside && props.$leftAside.widthMobile ? props.$leftAside.widthMobile : '0px'} 1fr ${props.$rightAside && props.$rightAside.widthMobile ? props.$rightAside.widthMobile : '0px'}`};

    grid-template-rows: ${props =>
      `${props.$notification && props.$notification.heightMobile ? props.$notification.heightMobile : '0px'} ${props.$header && props.$header.heightMobile ? props.$header.heightMobile : '0px'} ${props.$nav && props.$nav.heightMobile ? props.$nav.heightMobile : '0px'} 1fr ${props.$footer && props.$footer.heightMobile ? props.$footer.heightMobile : '0px'}`};
  }
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
      z-index: props.$main.zIndex;
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
      z-index: props.$notification.zIndex;
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
      z-index: props.$header.zIndex;
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
      z-index: props.$footer.zIndex;
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
      z-index: props.$nav.zIndex;
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
      z-index: props.$leftAside.zIndex;
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
      z-index: props.$rightAside.zIndex;
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

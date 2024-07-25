import { css, styled } from 'styled-components'

import { JeneseiThemeVariables } from '@theme/index'

import { ProviderAppOutletProps, ProviderAppWrapperProps } from '.'

export const ProviderAppWrapper = styled.div<ProviderAppWrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: 100dvw;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  background-color: ${(props) => JeneseiThemeVariables[props.$bgColor]};
  background-image: url(${(props) => props.$bgImage});
`

const generateGridTemplateAreas = (props: ProviderAppOutletProps) => {
  let templateAreas = `
    "header header header"
    "leftSection children rightSection"
    "footer footer footer"
  `

  templateAreas = `
      "${props.$leftSection?.isTopHeader ? 'leftSection' : 'header'} header ${props.$rightSection?.isTopHeader ? 'rightSection' : 'header'}"
      "leftSection children rightSection"
      "${props.$leftSection?.isTopFooter ? 'leftSection' : 'footer'} footer ${props.$rightSection?.isTopFooter ? 'rightSection' : 'footer'}"
    `

  return templateAreas
}

export const ProviderAppOutlet = styled.div<ProviderAppOutletProps>`
  display: grid;
  width: 100%;
  height: 100%;

  min-height: 100dvh;
  max-height: none;

  transition:
    grid-template-areas ${(props) => props.theme.transition},
    grid-template-rows ${(props) => props.theme.transition},
    grid-template-columns ${(props) => props.theme.transition};

  ${(props) => `
    grid-template-areas: ${generateGridTemplateAreas(props)};
  `}

  ${(props) =>
    props.$leftSection?.isTopFooter &&
    css`
      grid-template-areas:
        'header header header'
        'leftSection children rightSection'
        'leftSection footer footer';
    `};

  ${(props) =>
    props.$rightSection?.isTopHeader &&
    css`
      grid-template-areas:
        'header rightSection header'
        'leftSection children rightSection'
        'footer footer footer';
    `};

  ${(props) =>
    props.$isScrollOutlet &&
    css`
      max-height: 100dvh;
    `}

  grid-template-rows:  ${(props) =>
    `${props.$header ? props.$header.height : '0px'} 1fr ${props.$footer ? props.$footer.height : '0px'}`};

  grid-template-columns: ${(props) =>
    `${props.$leftSection ? props.$leftSection.width : '0px'} 1fr ${props.$rightSection ? props.$rightSection.width : '0px'}`};

  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    grid-template-columns: ${(props) =>
      `${props.$leftSection && props.$leftSection.widthTablet ? props.$leftSection.widthTablet : '0px'} 1fr ${props.$rightSection && props.$rightSection.widthTablet ? props.$rightSection.widthTablet : '0px'}`};

    grid-template-rows: ${(props) =>
      `${props.$header && props.$header.heightTablet ? props.$header.heightTablet : '0px'} 1fr ${props.$footer && props.$footer.heightTablet ? props.$footer.heightTablet : '0px'}`};
  }

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    grid-template-columns: ${(props) =>
      `${props.$leftSection && props.$leftSection.widthMobile ? props.$leftSection.widthMobile : '0px'} 1fr ${props.$rightSection && props.$rightSection.widthMobile ? props.$rightSection.widthMobile : '0px'}`};

    grid-template-rows: ${(props) =>
      `${props.$header && props.$header.heightMobile ? props.$header.heightMobile : '0px'} 1fr ${props.$footer && props.$footer.heightMobile ? props.$footer.heightMobile : '0px'}`};
  }
`

const hiddenStyles = css`
  opacity: 0;
  visibility: hidden;
  transition:
    opacity ${(props) => props.theme.transition},
    visibility ${(props) => props.theme.transition};
`

const visibleStyles = css`
  opacity: 1;
  visibility: visible;
  transition:
    opacity ${(props) => props.theme.transition},
    visibility ${(props) => props.theme.transition};
`

export const ProviderAppOutletChildren = styled.section`
  grid-area: children;
  max-width: 100%; // Prevent children from exceeding grid width
  max-height: 100%; // Prevent children from exceeding grid height
  overflow: auto; // Ensure content is scrollable if it overflows
`
export const ProviderAppOutletHeader = styled.header<ProviderAppOutletProps>`
  grid-area: header;

  ${(props) => (props.$header?.height ? visibleStyles : hiddenStyles)}

  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    ${(props) => (props.$header?.heightTablet ? visibleStyles : hiddenStyles)}
  }

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    ${(props) => (props.$header?.heightMobile ? visibleStyles : hiddenStyles)}
  }
`

export const ProviderAppOutletFooter = styled.footer<ProviderAppOutletProps>`
  grid-area: footer;

  ${(props) => (props.$footer?.height ? visibleStyles : hiddenStyles)}

  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    ${(props) => (props.$footer?.heightTablet ? visibleStyles : hiddenStyles)}
  }

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    ${(props) => (props.$footer?.heightMobile ? visibleStyles : hiddenStyles)}
  }
`

export const ProviderAppOutletLeftSection = styled.section<ProviderAppOutletProps>`
  grid-area: leftSection;

  ${(props) => (props.$leftSection?.width ? visibleStyles : hiddenStyles)}

  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    ${(props) =>
      props.$leftSection?.widthTablet ? visibleStyles : hiddenStyles}
  }

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    ${(props) =>
      props.$leftSection?.widthMobile ? visibleStyles : hiddenStyles}
  }
`

export const ProviderAppOutletRightSection = styled.section<ProviderAppOutletProps>`
  grid-area: rightSection;

  ${(props) => (props.$rightSection?.width ? visibleStyles : hiddenStyles)}

  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    ${(props) =>
      props.$rightSection?.widthTablet ? visibleStyles : hiddenStyles}
  }

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    ${(props) =>
      props.$rightSection?.widthMobile ? visibleStyles : hiddenStyles}
  }
`

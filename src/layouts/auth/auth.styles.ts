import Image from 'react-image-webp'
import styled from 'styled-components'

export const AuthLayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  flex-direction: row;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    flex-direction: column;
  }
`
export const AuthStyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.palette.black100};
  z-index: 0;
`
export const AuthLayoutWrapperBackground = styled.div`
  position: relative;
  flex-grow: 1;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 100px;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    height: 170px;
    width: 100%;
    justify-content: center;
    padding: 0px 100px;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    align-items: center;
    justify-content: center;
  }
`

export const AuthLayoutWrapperChildren = styled.div`
  flex-grow: 1;
  width: 50%;
  height: 100%;
  padding: 80px;
  display: flex;
  align-items: center;
  overflow-y: auto;
  justify-content: flex-start;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: calc(100% - 170px);
    padding: 100px;
  }
  @media (max-width: ${props => props.theme.screens.mobile.width}) {
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
  }
`

export const AuthLayoutWrapperBackgroundSVG = styled.svg`
  z-index: 1;
`

export const AuthLayoutWrapperBackgroundText = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${props => props.theme.screens.tablet.width}) {
    display: none;
  }
`

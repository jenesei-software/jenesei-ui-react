import { styled } from 'styled-components'

/****************************************** Default *************************************************/
export const ModuleSessionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const ModuleSessionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 48px 72px;

  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
    padding: 30px 54px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    padding: 16px 22px;
  }
`

export const ModuleSessionListItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  justify-content: flex-start;
  flex-direction: column;
`

export const ModuleSessionListItemStatusWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

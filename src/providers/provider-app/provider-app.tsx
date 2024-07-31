import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { JeneseiThemeVariablesKeys } from '@theme/index'

import {
  AppContextProps,
  ProviderAppOutlet,
  ProviderAppOutletChildren,
  ProviderAppOutletFooter,
  ProviderAppOutletHeader,
  ProviderAppOutletLeftAside,
  ProviderAppOutletNav,
  ProviderAppOutletNotification,
  ProviderAppOutletRightAside,
  ProviderAppProps,
  ProviderAppWrapper,
} from '.'

const AppContext = createContext<AppContextProps | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useToast must be used within an ProviderToast')
  }
  return context
}

export const ProviderApp: React.FC<ProviderAppProps> = (props) => {
  const [bgColor, setBgColor] = useState<JeneseiThemeVariablesKeys>(
    props.defaultBgColor,
  )
  const [bgImage, setBgImage] = useState<string | null>(
    props.defaultBgImage || null,
  )

  const changeBgColor: AppContextProps['changeBgColor'] = useCallback(
    (color) => {
      setBgColor(color)
    },
    [],
  )
  const changeBgImage: AppContextProps['changeBgImage'] = useCallback(
    (image) => {
      setBgImage(image)
    },
    [],
  )

  useEffect(() => {
    setBgColor(props.defaultBgColor)
  }, [props.defaultBgColor])
  useEffect(() => {
    if (props.defaultBgImage) setBgImage(props.defaultBgImage)
  }, [props.defaultBgImage])
  return (
    <AppContext.Provider value={{ changeBgColor, changeBgImage }}>
      <ProviderAppWrapper $bgColor={bgColor} $bgImage={bgImage}>
        <ProviderAppOutlet
          $isScrollOutlet={props.isScrollOutlet}
          $footer={props.footer}
          $notification={props.notification}
          $header={props.header}
          $nav={props.nav}
          $leftAside={props.leftAside}
          $rightAside={props.rightAside}
        >
          <ProviderAppOutletNotification $notification={props.notification}>
            {props.notification?.component || null}
          </ProviderAppOutletNotification>
          <ProviderAppOutletHeader $header={props.header}>
            {props.header?.component || null}
          </ProviderAppOutletHeader>
          <ProviderAppOutletNav $nav={props.nav}>
            {props.nav?.component || null}
          </ProviderAppOutletNav>
          <ProviderAppOutletLeftAside $leftAside={props.leftAside}>
            {props.leftAside?.component || null}
          </ProviderAppOutletLeftAside>
          <ProviderAppOutletChildren>
            {props.children}
          </ProviderAppOutletChildren>
          <ProviderAppOutletRightAside $rightAside={props.rightAside}>
            {props.rightAside?.component || null}
          </ProviderAppOutletRightAside>
          <ProviderAppOutletFooter $footer={props.footer}>
            {props.footer?.component || null}
          </ProviderAppOutletFooter>
        </ProviderAppOutlet>
      </ProviderAppWrapper>
    </AppContext.Provider>
  )
}

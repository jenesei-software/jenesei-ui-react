import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Helmet } from 'react-helmet'

import { JeneseiThemeVariables, JeneseiThemeVariablesKeys } from '@theme/index'

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
  /****************************************** bgColor *************************************************/
  const [bgColor, setBgColor] = useState<JeneseiThemeVariablesKeys>(
    props.defaultBgColor,
  )
  const [bgColorHistory, setBgColorHistory] = useState<
    JeneseiThemeVariablesKeys[]
  >([props.defaultBgColor])
  const [bgColorIndex, setBgColorIndex] = useState<number>(0)

  const changeBgColor: AppContextProps['changeBgColor'] = useCallback(
    (color) => {
      setBgColor(color)
      setBgColorHistory((prev) => {
        const newHistory = [...prev.slice(0, bgColorIndex + 1), color]
        setBgColorIndex(newHistory.length - 1)
        return newHistory
      })
    },
    [bgColorIndex],
  )

  const historyBgColor: AppContextProps['historyBgColor'] = useCallback(
    (steps) => {
      const newIndex = bgColorIndex + steps
      if (newIndex >= 0 && newIndex < bgColorHistory.length) {
        setBgColor(bgColorHistory[newIndex])
        setBgColorIndex(newIndex)
      }
    },
    [bgColorHistory, bgColorIndex],
  )

  const setDefaultBgColor: AppContextProps['setDefaultBgColor'] =
    useCallback(() => {
      setBgColor(props.defaultBgColor)
      setBgColorHistory([props.defaultBgColor])
      setBgColorIndex(0)
    }, [props.defaultBgColor])

  useEffect(() => {
    setBgColor(props.defaultBgColor)
  }, [props.defaultBgColor])

  /****************************************** bgImage *************************************************/
  const [bgImage, setBgImage] = useState<string | null>(
    props.defaultBgImage || null,
  )
  const [bgImageHistory, setBgImageHistory] = useState<(string | null)[]>([
    props.defaultBgImage || null,
  ])
  const [bgImageIndex, setBgImageIndex] = useState<number>(0)

  const changeBgImage: AppContextProps['changeBgImage'] = useCallback(
    (image) => {
      setBgImage(image)
      setBgImageHistory((prev) => {
        const newHistory = [...prev.slice(0, bgImageIndex + 1), image]
        setBgImageIndex(newHistory.length - 1)
        return newHistory
      })
    },
    [bgImageIndex],
  )

  const historyBgImage: AppContextProps['historyBgImage'] = useCallback(
    (steps) => {
      const newIndex = bgImageIndex + steps
      if (newIndex >= 0 && newIndex < bgImageHistory.length) {
        setBgImage(bgImageHistory[newIndex])
        setBgImageIndex(newIndex)
      }
    },
    [bgImageHistory, bgImageIndex],
  )

  const setDefaultBgImage: AppContextProps['setDefaultBgImage'] =
    useCallback(() => {
      setBgImage(props.defaultBgImage || null)
      setBgImageHistory([props.defaultBgImage || null])
      setBgImageIndex(0)
    }, [props.defaultBgImage])

  useEffect(() => {
    if (props.defaultBgImage) setBgImage(props.defaultBgImage)
  }, [props.defaultBgImage])

  /****************************************** title *************************************************/
  const [title, setTitle] = useState<string | null>(props.defaultTitle || null)
  const [titleHistory, setTitleHistory] = useState<(string | null)[]>([
    props.defaultTitle || null,
  ])
  const [titleIndex, setTitleIndex] = useState<number>(0)

  const changeTitle: AppContextProps['changeTitle'] = useCallback(
    (image) => {
      setTitle(image)
      setTitleHistory((prev) => {
        const newHistory = [...prev.slice(0, titleIndex + 1), image]
        setTitleIndex(newHistory.length - 1)
        return newHistory
      })
    },
    [titleIndex],
  )

  const historyTitle: AppContextProps['historyTitle'] = useCallback(
    (steps) => {
      const newIndex = titleIndex + steps
      if (newIndex >= 0 && newIndex < titleHistory.length) {
        setTitle(titleHistory[newIndex])
        setTitleIndex(newIndex)
      }
    },
    [titleHistory, titleIndex],
  )

  const setDefaultTitle: AppContextProps['setDefaultTitle'] =
    useCallback(() => {
      setTitle(props.defaultTitle || null)
      setTitleHistory([props.defaultTitle || null])
      setTitleIndex(0)
    }, [props.defaultTitle])

  useEffect(() => {
    if (props.defaultTitle) setTitle(props.defaultTitle)
  }, [props.defaultTitle])

  /****************************************** description *************************************************/
  const [description, setDescription] = useState<string>(
    props.defaultDescription,
  )
  const [descriptionHistory, setDescriptionHistory] = useState<string[]>([
    props.defaultDescription,
  ])
  const [descriptionIndex, setDescriptionIndex] = useState<number>(0)

  const changeDescription: AppContextProps['changeDescription'] = useCallback(
    (image) => {
      setDescription(image)
      setDescriptionHistory((prev) => {
        const newHistory = [...prev.slice(0, descriptionIndex + 1), image]
        setDescriptionIndex(newHistory.length - 1)
        return newHistory
      })
    },
    [descriptionIndex],
  )

  const historyDescription: AppContextProps['historyDescription'] = useCallback(
    (steps) => {
      const newIndex = descriptionIndex + steps
      if (newIndex >= 0 && newIndex < descriptionHistory.length) {
        setDescription(descriptionHistory[newIndex])
        setDescriptionIndex(newIndex)
      }
    },
    [descriptionHistory, descriptionIndex],
  )

  const setDefaultDescription: AppContextProps['setDefaultDescription'] =
    useCallback(() => {
      setDescription(props.defaultDescription)
      setDescriptionHistory([props.defaultDescription])
      setDescriptionIndex(0)
    }, [props.defaultDescription])

  useEffect(() => {
    if (props.defaultDescription) setDescription(props.defaultDescription)
  }, [props.defaultDescription])

  /****************************************** return *************************************************/
  return (
    <AppContext.Provider
      value={{
        changeBgColor,
        changeBgImage,
        changeTitle,
        changeDescription,
        historyBgColor,
        historyBgImage,
        historyTitle,
        historyDescription,
        setDefaultBgColor,
        setDefaultBgImage,
        setDefaultTitle,
        setDefaultDescription,
      }}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content={JeneseiThemeVariables[bgColor]} />
        <meta
          name="msapplication-navbutton-color"
          content={JeneseiThemeVariables[bgColor]}
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

      </Helmet>
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

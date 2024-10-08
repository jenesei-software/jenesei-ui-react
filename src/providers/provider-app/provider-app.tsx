import { createContext, useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { Preview, PreviewAdditionalProps } from '@components/preview'

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

export const AppContext = createContext<AppContextProps | null>(null)

export const ProviderApp: React.FC<ProviderAppProps> = (props) => {
  const { bgColor, changeBgColor, historyBgColor, setDefaultBgColor } = useBgColor(props.defaultBgColor)
  const { statusBarColor, changeStatusBarColor, historyStatusBarColor, setDefaultStatusBarColor } = useStatusBarColor(
    props.defaultStatusBarColor,
  )
  const { bgImage, changeBgImage, historyBgImage, setDefaultBgImage } = useBgImage(props.defaultBgImage || null)
  const { title, changeTitle, historyTitle, setDefaultTitle } = useTitle(props.defaultTitle || null)
  const { description, changeDescription, historyDescription, setDefaultDescription } = useDescription(
    props.defaultDescription,
  )
  const { changePreview, previewProps } = usePreview(props.defaultPreview)
  return (
    <AppContext.Provider
      value={{
        changePreview,
        changeStatusBarColor,
        changeBgColor,
        changeBgImage,
        changeTitle,
        changeDescription,
        historyStatusBarColor,
        historyBgColor,
        historyBgImage,
        historyTitle,
        historyDescription,
        setDefaultStatusBarColor,
        setDefaultBgColor,
        setDefaultBgImage,
        setDefaultTitle,
        setDefaultDescription,
      }}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content={JeneseiThemeVariables[statusBarColor]} />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>
      <Preview {...previewProps}>
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
            <ProviderAppOutletHeader $header={props.header}>{props.header?.component || null}</ProviderAppOutletHeader>
            <ProviderAppOutletNav $nav={props.nav}>{props.nav?.component || null}</ProviderAppOutletNav>
            <ProviderAppOutletLeftAside $leftAside={props.leftAside}>
              {props.leftAside?.component || null}
            </ProviderAppOutletLeftAside>
            <ProviderAppOutletChildren>{props.children}</ProviderAppOutletChildren>
            <ProviderAppOutletRightAside $rightAside={props.rightAside}>
              {props.rightAside?.component || null}
            </ProviderAppOutletRightAside>
            <ProviderAppOutletFooter $footer={props.footer}>{props.footer?.component || null}</ProviderAppOutletFooter>
          </ProviderAppOutlet>
        </ProviderAppWrapper>{' '}
      </Preview>
    </AppContext.Provider>
  )
}

// Хук для управления Превью
const usePreview = (defaultPreview: ProviderAppProps['defaultPreview']) => {
  const [previewProps, setPreviewProps] = useState(defaultPreview || { isShow: false })

  const changePreview = useCallback((newPreviewProps: PreviewAdditionalProps) => {
    setPreviewProps(newPreviewProps)
  }, [])

  useEffect(() => {
    if (defaultPreview) setPreviewProps(defaultPreview)
  }, [defaultPreview])

  return { previewProps, changePreview }
}

// Хук для управления фоновым цветом
const useBgColor = (defaultColor: JeneseiThemeVariablesKeys) => {
  const [bgColor, setBgColor] = useState(defaultColor)
  const [bgColorHistory, setBgColorHistory] = useState([defaultColor])
  const [bgColorIndex, setBgColorIndex] = useState(0)

  const changeBgColor = useCallback(
    (color: JeneseiThemeVariablesKeys) => {
      setBgColor(color)
      setBgColorHistory((prev) => {
        const newHistory = [...prev.slice(0, bgColorIndex + 1), color]
        setBgColorIndex(newHistory.length - 1)
        return newHistory
      })
    },
    [bgColorIndex],
  )

  const historyBgColor = useCallback(
    (steps: number) => {
      const newIndex = bgColorIndex + steps
      if (newIndex >= 0 && newIndex < bgColorHistory.length) {
        setBgColor(bgColorHistory[newIndex])
        setBgColorIndex(newIndex)
      }
    },
    [bgColorHistory, bgColorIndex],
  )

  const setDefaultBgColor = useCallback(() => {
    setBgColor(defaultColor)
    setBgColorHistory([defaultColor])
    setBgColorIndex(0)
  }, [defaultColor])

  useEffect(() => {
    setBgColor(defaultColor)
  }, [defaultColor])

  return { bgColor, changeBgColor, historyBgColor, setDefaultBgColor }
}

// Хук для управления цветом строки состояния
const useStatusBarColor = (defaultColor: JeneseiThemeVariablesKeys) => {
  const [statusBarColor, setStatusBarColor] = useState(defaultColor)
  const [statusBarColorHistory, setStatusBarColorHistory] = useState([defaultColor])
  const [statusBarColorIndex, setStatusBarColorIndex] = useState(0)

  const changeStatusBarColor = useCallback(
    (color: JeneseiThemeVariablesKeys) => {
      setStatusBarColor(color)
      setStatusBarColorHistory((prev) => {
        const newHistory = [...prev.slice(0, statusBarColorIndex + 1), color]
        setStatusBarColorIndex(newHistory.length - 1)
        return newHistory
      })
    },
    [statusBarColorIndex],
  )

  const historyStatusBarColor = useCallback(
    (steps: number) => {
      const newIndex = statusBarColorIndex + steps
      if (newIndex >= 0 && newIndex < statusBarColorHistory.length) {
        setStatusBarColor(statusBarColorHistory[newIndex])
        setStatusBarColorIndex(newIndex)
      }
    },
    [statusBarColorHistory, statusBarColorIndex],
  )

  const setDefaultStatusBarColor = useCallback(() => {
    setStatusBarColor(defaultColor)
    setStatusBarColorHistory([defaultColor])
    setStatusBarColorIndex(0)
  }, [defaultColor])

  useEffect(() => {
    setStatusBarColor(defaultColor)
  }, [defaultColor])

  return { statusBarColor, changeStatusBarColor, historyStatusBarColor, setDefaultStatusBarColor }
}

// Хук для управления фоновым изображением
const useBgImage = (defaultImage: string | null) => {
  const [bgImage, setBgImage] = useState<string | null>(defaultImage)
  const [bgImageHistory, setBgImageHistory] = useState<(string | null)[]>([defaultImage])
  const [bgImageIndex, setBgImageIndex] = useState(0)

  const changeBgImage = useCallback(
    (image: string | null) => {
      setBgImage(image)
      setBgImageHistory((prev) => {
        const newHistory = [...prev.slice(0, bgImageIndex + 1), image]
        setBgImageIndex(newHistory.length - 1)
        return newHistory
      })
    },
    [bgImageIndex],
  )

  const historyBgImage = useCallback(
    (steps: number) => {
      const newIndex = bgImageIndex + steps
      if (newIndex >= 0 && newIndex < bgImageHistory.length) {
        setBgImage(bgImageHistory[newIndex])
        setBgImageIndex(newIndex)
      }
    },
    [bgImageHistory, bgImageIndex],
  )

  const setDefaultBgImage = useCallback(() => {
    setBgImage(defaultImage)
    setBgImageHistory([defaultImage])
    setBgImageIndex(0)
  }, [defaultImage])

  useEffect(() => {
    setBgImage(defaultImage)
  }, [defaultImage])

  return { bgImage, changeBgImage, historyBgImage, setDefaultBgImage }
}

// Хук для управления заголовком
const useTitle = (defaultTitle: string | null) => {
  const [title, setTitle] = useState(defaultTitle)
  const [titleHistory, setTitleHistory] = useState([defaultTitle])
  const [titleIndex, setTitleIndex] = useState(0)

  const changeTitle = useCallback(
    (newTitle: string | null) => {
      setTitle(newTitle)
      setTitleHistory((prev) => {
        const newHistory = [...prev.slice(0, titleIndex + 1), newTitle]
        setTitleIndex(newHistory.length - 1)
        return newHistory
      })
    },
    [titleIndex],
  )

  const historyTitle = useCallback(
    (steps: number) => {
      const newIndex = titleIndex + steps
      if (newIndex >= 0 && newIndex < titleHistory.length) {
        setTitle(titleHistory[newIndex])
        setTitleIndex(newIndex)
      }
    },
    [titleHistory, titleIndex],
  )

  const setDefaultTitle = useCallback(() => {
    setTitle(defaultTitle)
    setTitleHistory([defaultTitle])
    setTitleIndex(0)
  }, [defaultTitle])

  useEffect(() => {
    setTitle(defaultTitle)
  }, [defaultTitle])

  return { title, changeTitle, historyTitle, setDefaultTitle }
}

// Хук для управления описанием
const useDescription = (defaultDescription: string) => {
  const [description, setDescription] = useState(defaultDescription)
  const [descriptionHistory, setDescriptionHistory] = useState([defaultDescription])
  const [descriptionIndex, setDescriptionIndex] = useState(0)

  const changeDescription = useCallback(
    (newDescription: string) => {
      setDescription(newDescription)
      setDescriptionHistory((prev) => {
        const newHistory = [...prev.slice(0, descriptionIndex + 1), newDescription]
        setDescriptionIndex(newHistory.length - 1)
        return newHistory
      })
    },
    [descriptionIndex],
  )

  const historyDescription = useCallback(
    (steps: number) => {
      const newIndex = descriptionIndex + steps
      if (newIndex >= 0 && newIndex < descriptionHistory.length) {
        setDescription(descriptionHistory[newIndex])
        setDescriptionIndex(newIndex)
      }
    },
    [descriptionHistory, descriptionIndex],
  )

  const setDefaultDescription = useCallback(() => {
    setDescription(defaultDescription)
    setDescriptionHistory([defaultDescription])
    setDescriptionIndex(0)
  }, [defaultDescription])

  useEffect(() => {
    setDescription(defaultDescription)
  }, [defaultDescription])

  return { description, changeDescription, historyDescription, setDefaultDescription }
}

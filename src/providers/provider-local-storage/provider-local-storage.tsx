import { FC, createContext, useCallback, useEffect, useState } from 'react'

import {
  LocalStorageContextProps,
  ProviderLocalStorageProps,
  ValidLocalStorageObject,
} from '.'

export const LocalStorageContext =
  createContext<LocalStorageContextProps | null>(null)

export const ProviderLocalStorage: FC<ProviderLocalStorageProps> = (props) => {
  const [LocalStorage, setLocalStorage] = useState<ValidLocalStorageObject>()

  const getLocalStorage = useCallback(
    <K extends keyof ValidLocalStorageObject>(
      name: K,
    ): ValidLocalStorageObject[K] | undefined => {
      const LocalStorage = localStorage.getItem(name)

      return LocalStorage ? JSON.parse(LocalStorage) : undefined
    },
    [],
  )

  const changeLocalStorage = useCallback(
    <K extends keyof ValidLocalStorageObject>(
      name: K,
      value: ValidLocalStorageObject[K],
    ) => {
      try {
        localStorage.setItem(String(name), JSON.stringify(value))
        setLocalStorage((prevState) => ({ ...prevState, [name]: value }))
      } catch {
        console.error(`Error. setLocalStorage - key:${name}, value:${value}`)
      }
    },
    [],
  )

  const removeLocalStorage = useCallback(
    <K extends keyof ValidLocalStorageObject>(name: K) => {
      try {
        localStorage.removeItem(String(name))
        setLocalStorage((prevState) => ({ ...prevState, [name]: undefined }))
      } catch {
        console.error(
          `Error. setLocalStorage - key:${name}, value:${undefined}`,
        )
      }
    },
    [],
  )

  const checkLocalStorage = useCallback(() => {
    if (
      props.validate &&
      props.validate.validateKeys &&
      props.validate.getValidateLocalStorageValue
    ) {
      props.validate?.validateKeys.forEach((key) => {
        const LocalStorageValue = localStorage.getItem(key)
        if (LocalStorageValue) {
          try {
            const parsedValue = JSON.parse(LocalStorageValue)
            if (
              !props.validate?.getValidateLocalStorageValue(
                String(key) as never,
                parsedValue as never,
              )
            ) {
              removeLocalStorage(String(key) as never)
            } else {
              setLocalStorage((prevState) => ({
                ...prevState,
                [key]: parsedValue,
              }))
            }
          } catch {
            removeLocalStorage(String(key) as never)
          }
        } else {
          removeLocalStorage(String(key) as never)
        }
      })
    } else {
      console.info('Provider LocalStorage: validate is not defined.')
    }
  }, [props.validate, removeLocalStorage])

  useEffect(() => {
    checkLocalStorage()
  }, [checkLocalStorage])

  return (
    <LocalStorageContext.Provider
      value={{
        getLocalStorage,
        setLocalStorage: changeLocalStorage,
        removeLocalStorage,
        checkLocalStorage,
        LocalStorage,
      }}
    >
      {props.children}
    </LocalStorageContext.Provider>
  )
}

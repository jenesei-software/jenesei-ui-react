import { FC, SetStateAction, useCallback, useMemo, useRef, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import { useTheme } from 'styled-components'

import { Preview } from '@local/areas/preview'
import { ImageSupportedFormats, ImageSupportedFormatsForInput } from '@local/consts'
import { useDialog } from '@local/contexts/context-dialog'
import { KEY_SIZE_DATA } from '@local/theme'
import { IImageFormat } from '@local/types'

import { AddImageProps, useImageCropProps } from '.'
import { Button } from '../button'
import { SelectImageItemProps } from '../select-image'
import { Stack } from '../stack'

export const AddImage: FC<AddImageProps> = props => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const openFileDialog = () => {
    inputRef.current?.click()
  }

  const { handleAddFiles } = useImageCrop({
    onSave: props.onSave,
    locale: props.locale,
    dialog: props.dialog,
    imageSettings: props.imageSettings,
    inputRef: inputRef
  })
  return (
    <>
      <Button
        {...props.button}
        onClick={e => {
          props.button.onClick?.(e)
          openFileDialog()
        }}
      />
      <input
        ref={inputRef}
        type="file"
        accept={ImageSupportedFormatsForInput}
        multiple
        style={{ display: 'none' }}
        onChange={e => {
          if (e.target.files) handleAddFiles(e.target.files)
        }}
      />
    </>
  )
}

export const useImageCrop = (props: useImageCropProps) => {
  const size = useMemo(() => KEY_SIZE_DATA[props.dialog.button.size], [props.dialog.button.size])
  const br = useMemo(() => `${size.radius}px`, [size.radius])
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [croppedArea, setCroppedArea] = useState<Area | null>(null)
  const [zoom, setZoom] = useState(1)
  const theme = useTheme()

  const { add } = useDialog<{
    br?: string
    crop: {
      x: number
      y: number
    }
    setCrop: (crop: { x: number; y: number }) => void
    zoom: number
    setZoom: (zoom: number) => void
    setCroppedArea: (value: SetStateAction<Area | null>) => void
    croppedArea: Area | null
  }>({
    br: br,
    crop: crop,
    zoom: zoom,
    setCrop: setCrop,
    setZoom: setZoom,
    setCroppedArea: setCroppedArea,
    croppedArea: croppedArea
  })
  const handleAdd = useCallback(
    (image: SelectImageItemProps) => {
      add({
        borderRadius: br,
        padding: '0',
        background: 'transparent',
        content: (params, remove, isAnimating) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [isLoading, setIsLoading] = useState(false)

          const onSave = async (file: SelectImageItemProps) => {
            if (file.url && file.name && params?.croppedArea) {
              setIsLoading(true)
              const blob = await getCroppedImg(file.url, params.croppedArea, file.format)
              setIsLoading(false)
              const croppedFile = new File([blob], file.name, { type: file.format })

              const newImage: SelectImageItemProps = {
                id: Date.now() + file.index,
                file: croppedFile,
                url: URL.createObjectURL(croppedFile),
                index: file.index,
                isNew: true,
                name: file.name,
                format: file.format
              }

              props.onSave?.([newImage])
              remove?.()
            }
          }
          return (
            <Stack
              sx={theme => ({
                default: {
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: '900 / 600',
                  width: 'auto',
                  maxWidth: '70dvw',
                  height: '85dvh',
                  borderRadius: params?.br,
                  backgroundColor: theme.palette.whiteStandard
                },
                tablet: {
                  maxWidth: '95dvw'
                }
              })}
            >
              <Preview visible={!isAnimating || isLoading} minTime={1000}>
                <Stack
                  sx={{
                    default: {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0
                    }
                  }}
                >
                  {params?.crop ? (
                    <Cropper
                      style={{
                        containerStyle: {
                          backgroundColor: theme.palette.black80
                        }
                      }}
                      image={image.url}
                      crop={params?.crop}
                      zoom={params?.zoom}
                      aspect={props.imageSettings.aspect}
                      onCropChange={params.setCrop}
                      onZoomChange={params.setZoom}
                      onCropComplete={(_, croppedArea) => {
                        params.setCroppedArea(croppedArea)
                      }}
                    />
                  ) : null}
                </Stack>
                <Button
                  sx={{
                    default: {
                      position: 'absolute',
                      bottom: 15,
                      right: 15
                    }
                  }}
                  genre={props.dialog.button.genre}
                  size={props.dialog.button.size}
                  isHiddenBorder
                  isRadius
                  onClick={() => onSave?.(image)}
                >
                  {props.locale.dialogSave}
                </Button>
              </Preview>

              <Button
                sx={{
                  default: {
                    position: 'absolute',
                    top: 15,
                    right: 15
                  }
                }}
                genre={props.dialog.button.genre}
                size={props.dialog.button.size}
                icons={[
                  {
                    type: 'id',
                    name: 'Close'
                  }
                ]}
                isWidthAsHeight
                isHiddenBorder
                isRadius
                onClick={() => remove?.()}
              />
            </Stack>
          )
        }
      })
    },
    [add, br, theme.palette.black80, props]
  )
  const handleAddFiles = useCallback(
    (files: FileList) => {
      const validFiles = Array.from(files).filter(file => {
        if (file.size > props.imageSettings.maxSize) {
          console.warn(`File ${file.name} exceeds the allowed size of ${props.imageSettings.maxSize} bytes`)
          return false
        }
        return true
      })

      const newImages: SelectImageItemProps[] = validFiles.map((file, idx) => ({
        id: Date.now() + idx,
        file,
        url: URL.createObjectURL(file),
        index: idx,
        isNew: true,
        name: file.name,
        format: file.type as IImageFormat
      }))
      props.inputRef.current!.value = ''

      if (newImages.length === 1) {
        handleAdd(newImages[0])
      }
    },
    [handleAdd, props.imageSettings.maxSize, props.inputRef]
  )
  return { handleAdd, handleAddFiles }
}

export function getCroppedImg(imageSrc: string, crop: Area, format: string = 'image/png'): Promise<Blob> {
  const mimeType: IImageFormat = ImageSupportedFormats.includes(format as IImageFormat)
    ? (format as IImageFormat)
    : 'image/png' // fallback на PNG

  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = imageSrc
    image.crossOrigin = 'anonymous'
    image.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!

      canvas.width = crop.width
      canvas.height = crop.height

      ctx.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height)

      canvas.toBlob(blob => {
        if (blob) resolve(blob)
        else reject(new Error('Canvas is empty'))
      }, mimeType)
    }
    image.onerror = () => reject(new Error('Failed to load image'))
  })
}

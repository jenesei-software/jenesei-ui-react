import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import { useTheme } from 'styled-components'

import { Preview } from '@local/areas/preview'
import { ImageSupportedFormats, ImageSupportedFormatsForInput } from '@local/consts'
import { useDialog } from '@local/contexts/context-dialog'
import { KEY_SIZE_DATA } from '@local/theme'
import { IImageFormat } from '@local/types'

import { ImageButtonProps, useImageCropProps } from '.'
import { Button } from '../button'
import { ImageSelectItemProps } from '../image-select'
import { Stack } from '../stack'

export const ImageButton: FC<ImageButtonProps> = props => {
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

type useImageCropAddProps = Pick<ImageButtonProps, 'imageSettings' | 'onSave' | 'dialog' | 'locale'> & {
  br?: string
}
export const useImageCrop = (props: useImageCropProps) => {
  const size = useMemo(() => KEY_SIZE_DATA[props.dialog.button.size], [props.dialog.button.size])
  const br = useMemo(() => `${size.radius}px`, [size.radius])

  const { add } = useDialog<useImageCropAddProps>({
    br: br,
    imageSettings: props.imageSettings,
    onSave: props.onSave,
    dialog: props.dialog,
    locale: props.locale
  })
  const handleAdd = useCallback(
    (images: ImageSelectItemProps[]) => {
      add({
        borderRadius: br,
        padding: '0',
        background: 'transparent',
        content: (params, remove, isAnimating) => (
          <CropperWrapper images={images} params={params} remove={remove} isAnimating={isAnimating} />
        )
      })
    },
    [add, br]
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

      const newImages: ImageSelectItemProps[] = validFiles.map((file, idx) => ({
        id: Date.now() + idx,
        file,
        url: URL.createObjectURL(file),
        index: idx,
        isNew: true,
        name: file.name,
        format: file.type as IImageFormat
      }))
      props.inputRef.current!.value = ''

      if (newImages.length) handleAdd(newImages)
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

const CropperWrapper: FC<{
  images: ImageSelectItemProps[]
  params?: useImageCropAddProps
  remove?: () => void
  isAnimating?: boolean
}> = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [index, setIndex] = useState(0)
  const [newImages, setNewImages] = useState<ImageSelectItemProps[]>([])
  const theme = useTheme()
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [croppedArea, setCroppedArea] = useState<Area | null>(null)
  const [zoom, setZoom] = useState(1)
  const isMulti = useMemo(() => props.images.length > 1, [props.images.length])
  const onSave = useCallback(
    async (file: ImageSelectItemProps) => {
      if (file.url && file.name && croppedArea) {
        setIsLoading(true)
        const blob = await getCroppedImg(file.url, croppedArea, file.format)
        const croppedFile = new File([blob], file.name, { type: file.format })

        const newImage: ImageSelectItemProps = {
          id: Date.now() + file.index,
          file: croppedFile,
          url: URL.createObjectURL(croppedFile),
          index: file.index,
          isNew: true,
          name: file.name,
          format: file.format
        }
        setNewImages(prev => [...prev, newImage])
        setZoom(1)
        setCrop({ x: 0, y: 0 })
        setCroppedArea(null)
        setIndex(prev => prev + 1)

        setIsLoading(false)
      }
    },
    [croppedArea]
  )

  useEffect(() => {
    if (index === props.images.length) {
      props.params?.onSave?.(newImages.filter(Boolean) as ImageSelectItemProps[])
      props.remove?.()
    }
  }, [index, newImages, props])

  useEffect(() => {
    return () => {
      setZoom(1)
      setCrop({ x: 0, y: 0 })
      setCroppedArea(null)
      setIndex(0)
      setNewImages([])
    }
  }, [])

  const genre = useMemo(() => props.params?.dialog.button.genre || 'product', [props.params?.dialog.button.genre])
  const size = useMemo(() => props.params?.dialog.button.size || 'medium', [props.params?.dialog.button.size])
  return (
    <Stack
      sx={theme => ({
        default: {
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: props.params?.imageSettings.aspect ? `${props.params?.imageSettings.aspect * 2} / 2` : undefined,
          width: 'auto',
          maxWidth: '70dvw',
          height: '85dvh',
          borderRadius: props.params?.br,
          backgroundColor: theme.palette.whiteStandard
        },
        tablet: {
          maxWidth: '95dvw'
        }
      })}
    >
      <Preview visible={!props.isAnimating || isLoading} minTime={1000}>
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
          {crop ? (
            <Cropper
              style={{
                containerStyle: {
                  backgroundColor: theme.palette.black80
                }
              }}
              image={props.images?.[index]?.url}
              crop={crop}
              zoom={zoom}
              aspect={props.params?.imageSettings.aspect}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={(_, croppedArea) => {
                setCroppedArea(croppedArea)
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
          genre={genre}
          size={size}
          isHiddenBorder
          isRadius
          onClick={() => onSave?.(props.images?.[index])}
        >
          {props.params?.locale.dialogSave}
        </Button>
      </Preview>
      {isMulti && index !== props.images.length && (
        <Button
          sx={{
            default: {
              position: 'absolute',
              top: 15,
              left: 15
            }
          }}
          genre={genre}
          size={size}
          isHiddenBorder
          isWidthAsHeight
          isRadius
          isDisabled
        >
          {index + 1}
        </Button>
      )}
      <Button
        sx={{
          default: {
            position: 'absolute',
            top: 15,
            right: 15
          }
        }}
        genre={genre}
        size={size}
        icons={[
          {
            type: 'id',
            name: 'Close'
          }
        ]}
        isWidthAsHeight
        isHiddenBorder
        isRadius
        onClick={() => {
          setIndex(prev => prev + 1)
        }}
      />
    </Stack>
  )
}

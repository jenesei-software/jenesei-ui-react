import { FC, useCallback, useMemo, useRef, useState } from 'react'
import Cropper, { Area, CropperProps } from 'react-easy-crop'

import { ImageSupportedFormats, ImageSupportedFormatsForInput } from '@local/consts'
import { useDialog } from '@local/contexts/context-dialog'
import { KEY_SIZE_DATA } from '@local/theme'

import { AddImageProps } from '.'
import { Button } from '../button'
import { SelectImageItemProps } from '../select-image'
import { Stack } from '../stack'

export const AddImage: FC<AddImageProps> = props => {
  const size = useMemo(() => KEY_SIZE_DATA[props.propsButton.size], [props.propsButton.size])
  const br = useMemo(() => `${size.radius}px`, [size.radius])
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const onCropComplete: CropperProps['onCropComplete'] = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
    remove()
  }
  const openFileDialog = () => {
    inputRef.current?.click()
  }
  const { add, remove } = useDialog<{
    br?: string
    crop: {
      x: number
      y: number
    }
    setCrop: (crop: { x: number; y: number }) => void
    zoom: number
    setZoom: (zoom: number) => void
  }>({
    br: br,
    crop: crop,
    zoom: zoom,
    setCrop: setCrop,
    setZoom: setZoom
  })
  const handleAdd = useCallback(
    (image: SelectImageItemProps) => {
      add({
        borderRadius: br,
        padding: '0',
        background: 'whiteStandard',
        content: (params, remove) => (
          <Stack
            sx={{
              default: {
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '900 / 600',
                width: 'auto',
                maxWidth: '70dvw',
                height: '85dvh',
                borderRadius: params?.br
              },
              tablet: {
                maxWidth: '95dvw'
              }
            }}
          >
            <Stack
              sx={{
                default: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }
              }}
            >
              {params?.crop ? (
                <Cropper
                  image={image.url}
                  crop={params?.crop}
                  zoom={params?.zoom}
                  aspect={props.imageSettings.aspect}
                  onCropChange={params.setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={params.setZoom}
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
              genre="realebail-white"
              size="small"
              icons={[
                {
                  type: 'id',
                  name: 'Arrow4'
                }
              ]}
              isWidthAsHeight
              isHiddenBorder
              isRadius
              onClick={() => remove?.()}
            />
          </Stack>
        )
      })
    },
    [add, br, props.imageSettings.aspect]
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
        name: file.name
      }))
      if (newImages.length === 1) {
        handleAdd(newImages[0])
      }
    },
    [handleAdd, props.imageSettings.maxSize]
  )
  return (
    <>
      <Button
        {...props.propsButton}
        onClick={e => {
          props.propsButton.onClick?.(e)
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

type ImageMimeType = (typeof ImageSupportedFormats)[number]

export function getCroppedImg(imageSrc: string, crop: Area, format: string = 'image/png'): Promise<Blob> {
  const mimeType: ImageMimeType = ImageSupportedFormats.includes(format as ImageMimeType)
    ? (format as ImageMimeType)
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

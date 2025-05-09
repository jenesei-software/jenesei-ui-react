import { DragEvent, useCallback, useEffect, useRef, useState } from 'react'

import { SelectImageItemProps, SelectImageProps, SelectImageWrapper } from '.'
import { Button } from '../button'
import { Image } from '../image'
import { Stack } from '../stack'
import { Typography } from '../typography'

export const SelectImage = (props: SelectImageProps) => {
  const { onChange } = props
  const [images, setImages] = useState<SelectImageItemProps[]>(props.images || [])
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleAddFiles = useCallback(
    (files: FileList) => {
      setImages(prev => {
        const newImages = Array.from(files).map((file, idx) => ({
          id: Date.now() + idx,
          file,
          url: URL.createObjectURL(file),
          index: prev.length + idx,
          isNew: true
        }))
        const finalImages = [...prev, ...newImages]
        onChange?.(finalImages)
        return finalImages
      })
    },
    [onChange]
  )

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files?.length) {
      handleAddFiles(e.dataTransfer.files)
    }
  }

  const handleDelete = (id: number) => {
    setImages(prev => {
      const finalImages = prev.filter(img => img.id !== id)
      onChange?.(finalImages)
      return finalImages
    })
  }

  const openFileDialog = () => {
    inputRef.current?.click()
  }
  const resetImages = () => {
    setImages(props.images || [])
    onChange?.(props.images || [])
  }

  useEffect(() => {
    setImages(props.images || [])
  }, [props.images])
  return (
    <SelectImageWrapper $size={props.size} id={props.id} $width={props.width} $isError={props.isError}>
      <Stack
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        sx={{
          default: {
            border: '2px dashed #ccc',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            flexGrow: 1
          }
        }}
      >
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
          {images.map(
            img =>
              img.url && (
                <div key={img.id} style={{ position: 'relative', width: '200px', height: '200px', userSelect: 'none' }}>
                  <Image
                    propsStack={{
                      sx: theme => ({
                        default: {
                          width: '100%',
                          height: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: theme.palette.black10,
                          position: 'absolute',
                          pointerEvents: 'none'
                        }
                      })
                    }}
                    alt={img.name || 'image'}
                    src={img.url}
                    fallback={<Typography variant="h6">Не удалось загрузить изображение</Typography>}
                  />
                  <Button
                    sx={{
                      default: {
                        position: 'absolute',
                        top: 5,
                        right: 5
                      }
                    }}
                    genre="realebail-white"
                    size="small"
                    icon={{
                      type: 'id',
                      name: 'Close'
                    }}
                    width="asHeight"
                    isHiddenBorder
                    isRadius
                    onClick={() => handleDelete(img.id)}
                  />
                </div>
              )
          )}
        </div>
        <Stack sx={{ default: { flexGrow: 1, gap: '8px' } }}>
          <Button
            type="button"
            genre={props.genre}
            size={props.size}
            // icon={{
            //   type: 'id',
            //   name: 'Plus'
            // }}
            // width="asHeight"
            // isHiddenBorder
            sx={{
              default: {
                flexGrow: 1
              }
            }}
            isRadius
            onClick={openFileDialog}
          >
            Добавить
          </Button>
          <Button
            isRadius
            type="button"
            sx={{
              default: {
                flexGrow: 1
              }
            }}
            onClick={resetImages}
            genre={props.genre}
            size={props.size}
          >
            Сбросить
          </Button>
        </Stack>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={e => {
            if (e.target.files) handleAddFiles(e.target.files)
          }}
        />
      </Stack>
    </SelectImageWrapper>
  )
}

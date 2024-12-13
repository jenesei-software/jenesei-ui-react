import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import 'styled-components'

import { Button } from '@local/components/button'
import { Stack } from '@local/components/stack'

import { ProviderSonner, ProviderSonnerProps, useSonner } from '.'

const meta: Meta<typeof ProviderSonner> = {
  component: ProviderSonner,
  title: 'Provider/Sonner'
}

export default meta

type Story = StoryObj<typeof ProviderSonner>

const ProviderSonnerWrapper: FC<ProviderSonnerProps> = props => {
  return (
    <ProviderSonner {...props}>
      <ProviderSonnerWrapperDouble />
    </ProviderSonner>
  )
}
const ProviderSonnerWrapperDouble: FC = () => {
  const { toast, promise } = useSonner()

  const handlePromise = () => {
    promise(
      new Promise<string>(resolve => setTimeout(() => resolve('Data loaded successfully!'), 3000)),
      {
        title: 'ЗАГРУЗКА',
        description: 'Подождите, данные загружаются...',
        genre: 'black',
        button: false
      },
      () => ({
        title: 'Офигенчик!',
        description: 'Данные загрузились!',
        genre: 'greenTransparent',
        icon: 'Heart'
      })
    )
  }
  const handleToastBlack = () => {
    toast({
      title: 'Обычный тост',
      description: 'Или чебурашка?',
      genre: 'black'
    })
  }
  const handleToastWithoutButton = () => {
    toast({
      title: 'Не обычный тост',
      description: 'Да оно же без кнопки!',
      genre: 'black',
      button: false,
      hidingMode: 'clickOnSonner'
    })
  }
  const handleToastWarning = () => {
    toast({
      title: 'Предупреждение!',
      description: 'Или чебурашка?',
      genre: 'yellowTransparent'
    })
  }
  const handleToastError = () => {
    toast({
      title: 'Ошибка!',
      description: 'Или чебурашка?',
      genre: 'redTransparent'
    })
  }
  const handleToastSuccess = () => {
    toast({
      title: 'Успех!',
      description: 'Или чебурашка?',
      genre: 'greenTransparent'
    })
  }
  const handleToastWithHidingTime = () => {
    toast({
      title: 'Обычный тост?',
      description: 'Да оно ж само исчезнет!',
      genre: 'black',
      hidingTime: 3000
    })
  }
  return (
    <Stack p="12px" gap="8px">
      <Button onClick={handlePromise} genre="black" size="medium">
        Promise Toast!
      </Button>
      <Button onClick={handleToastBlack} genre="black" size="medium">
        Black Toast!
      </Button>
      <Button onClick={handleToastWithoutButton} genre="black" size="medium">
        Without Button Toast!
      </Button>
      <Button onClick={handleToastWithHidingTime} genre="black" size="medium">
        With Hiding Time Toast!
      </Button>
      <Button onClick={handleToastError} genre="redTransparent" size="medium">
        Error Toast!
      </Button>
      <Button onClick={handleToastWarning} genre="yellowTransparent" size="medium">
        Warning Toast!
      </Button>
      <Button onClick={handleToastSuccess} genre="greenTransparent" size="medium">
        Success Toast!
      </Button>
    </Stack>
  )
}

export const Default: Story = {
  render: args => <ProviderSonnerWrapper {...args} />,
  args: {
    visibleToasts: 3,
    position: 'bottom-left',
    gap: 12
  }
}

import { X } from 'phosphor-react'
import { useState, MouseEvent } from 'react'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Text } from '../Text'
import * as S from './styles'

export type ToastProps = S.ToastProviderProps & {
  title: string
  content: string
  callAction: string
}

const Toast = ({ title, content, callAction, ...rest }: ToastProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setOpen(true)
  }
  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setOpen(false)
  }

  return (
    <S.Container {...rest} duration={3000}>
      <Button variant="primary" onClick={handleOpen}>
        {callAction}
      </Button>
      <S.Content open={open} onOpenChange={setOpen} type="background">
        <S.Header>
          <S.Title asChild>
            <Heading size="md">{title}</Heading>
          </S.Title>
          <S.Close onClick={handleClose} aria-label="Close">
            <X size={20} aria-hidden />
          </S.Close>
        </S.Header>
        <S.Description asChild>
          <Text size="sm">{content}</Text>
        </S.Description>
      </S.Content>
      <S.ViewPort />
    </S.Container>
  )
}
Toast.displayName = 'Toast'

export { Toast }

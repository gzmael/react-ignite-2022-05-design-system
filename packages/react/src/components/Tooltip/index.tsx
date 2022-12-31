import { ReactNode } from 'react'
import { Text } from '../Text'
import * as S from './styles'

export type TooltipProps = S.TooltipProps & {
  children: ReactNode
  text: string
}

const Tooltip = ({ children, text, ...rest }: TooltipProps) => {
  return (
    <S.Container>
      <S.Root>
        <S.Trigger asChild>{children}</S.Trigger>
        <S.Portal>
          <S.Content {...rest} sideOffset={5}>
            <Text size="sm">{text}</Text>
            <S.Arrow />
          </S.Content>
        </S.Portal>
      </S.Root>
    </S.Container>
  )
}

Tooltip.displayName = 'Tooltip'

export { Tooltip }

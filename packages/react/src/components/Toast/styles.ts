import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
})

export const Container = styled(Toast.Provider, {})
export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
export const Content = styled(Toast.Root, {
  background: '$gray800',
  minWidth: '360px',
  padding: '12px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  border: '1px solid $gray600',
  borderRadius: '6px',
  '&[data-state="open"]': {
    animation: `${slideIn.name} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide.name} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut.name} 100ms ease-out`,
  },
})
export const Title = styled(Toast.Title, {
  h2: {
    color: '$white',
  },
})
export const Description = styled(Toast.Description, {
  color: '$gray200',
})
export const Close = styled(Toast.Close, {
  color: '$gray200',
  background: 'none',
  border: 'none',
})
export const ViewPort = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '25px',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export type ToastProviderProps = Toast.ToastProviderProps
export type ToastProps = Toast.ToastProps

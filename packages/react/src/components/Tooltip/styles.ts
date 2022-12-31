import * as Tooltip from '@radix-ui/react-tooltip'
import { styled, keyframes } from '../../styles'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})
const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})
const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})
const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const Container = styled(Tooltip.Provider, {})
export const Root = styled(Tooltip.Root, {})
export const Trigger = styled(Tooltip.Trigger, {})
export const Portal = styled(Tooltip.Portal, {})
export const Content = styled(Tooltip.Content, {
  borderRadius: '5px',
  padding: '12px 16px',
  fontSize: '14px',
  lineHeight: '19.6px',
  color: '$gray100',
  backgroundColor: '$gray900',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state=delayed-open][data-side=top]': {
    animationName: slideDownAndFade.name,
  },
  '&[data-state=delayed-open][data-side=right]': {
    animationName: slideLeftAndFade.name,
  },
  '&[data-state=delayed-open][data-side=bottom]': {
    animationName: slideUpAndFade.name,
  },
  '&[data-state=delayed-open][data-side=left]': {
    animationName: slideRightAndFade.name,
  },
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

export type TooltipProps = Tooltip.TooltipContentProps

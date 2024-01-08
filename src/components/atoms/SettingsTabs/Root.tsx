import { HTMLAttributes, ReactNode } from 'react'
import { RootStyled } from './styles'

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Root({ children, className }: RootProps) {
  return <RootStyled className={className}>{children}</RootStyled>
}

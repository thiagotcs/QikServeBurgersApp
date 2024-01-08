import { HTMLAttributes, ReactNode } from 'react'
import { PrefixStyled } from './styles'

export interface PrefixProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Prefix(props: PrefixProps) {
  return <PrefixStyled {...props} />
}

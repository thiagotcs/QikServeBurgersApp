import { HTMLAttributes, ReactNode } from 'react'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[]
  title: string
  height?: number
}

import { HTMLAttributes, ReactNode } from 'react'

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[]
}

export enum PaddingSizes {
  None = '0 0',
  Kilo = '0 8px',
}

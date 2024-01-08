import { HTMLAttributes, ReactNode } from 'react'

export interface AccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[]
}

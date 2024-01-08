import { FC } from 'react'
import { AccordionContentProps } from './interfaces'
import { AccordionContentStyled } from './styles'

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  ...divProps
}) => {
  return (
    <AccordionContentStyled {...divProps} data-testid="accordion-content">
      {children}
    </AccordionContentStyled>
  )
}

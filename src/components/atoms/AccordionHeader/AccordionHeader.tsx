import { FC } from 'react'
import { AccordionHeaderProps } from './interfaces'
import { AccordionHeaderStyled, Content, ExpandIcon } from './styles'

export const AccordionHeader: FC<AccordionHeaderProps> = ({
  children,
  ...divProps
}) => {
  return (
    <AccordionHeaderStyled {...divProps} data-testid="accordion-header">
      <Content>
        <h1>{children}</h1>
      </Content>
      <ExpandIcon>chevron-down</ExpandIcon>
    </AccordionHeaderStyled>
  )
}

import styled from 'styled-components'
import { AccordionContentProps, PaddingSizes } from './interfaces'

type AccordionContentStyledProps = AccordionContentProps & {
  padding?: PaddingSizes
}

export const AccordionContentStyled = styled.div<AccordionContentStyledProps>`
  height: 0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
`

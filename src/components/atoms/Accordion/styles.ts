import styled, { css } from 'styled-components'
import { AccordionContentStyled } from '../AccordionContent/styles'
import { AccordionHeaderStyled, ExpandIcon } from '../AccordionHeader/styles'

type AccordionStyledProps = { $expanded: boolean; height?: number }

const expanded = ({ $expanded, height }: AccordionStyledProps) =>
  $expanded
    ? css`
        ${AccordionContentStyled} {
          height: ${height ? height + 'px' : 'auto'};
          overflow-y: auto;
        }

        ${ExpandIcon} {
          transform: rotate(180deg);
        }

        ${AccordionHeaderStyled} {
          & p {
            color: #222222;
            font-weight: 700;
          }
        }
      `
    : css``

export const AccordionStyled = styled.div<AccordionStyledProps>`
  &:first-of-type {
    border-top: 1px solid #edf2f4;
  }
  ${expanded}
`

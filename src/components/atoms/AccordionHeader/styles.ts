import { ChevronDownIcon } from 'lucide-react'
import styled from 'styled-components'

export const ExpandIcon = styled(ChevronDownIcon)`
  transition: all 0.2s ease-out;
`

export const AccordionHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  cursor: pointer;
  padding: 32px 16px 12px 16px;
  @media only screen and (max-width: 768px) {
    padding: 12px 0;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;

  & :not(:first-child) {
    margin-left: '8px';
  }

  h1 {
    color: #121212;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.5px;
    text-align: left;
  }
`

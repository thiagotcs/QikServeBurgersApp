import styled from 'styled-components'

interface BasketStyledProps {
  isBasketOpen: boolean
}
export const WrapContentStyled = styled.div`
  justify-content: space-between;
  background-color: #f8f9fa;
  max-width: 1024px;
  display: flex;
  padding: 32px 40px;
  gap: 24px;
  margin: 10px auto;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    gap: 16px;
    background-color: #fff;
    padding-bottom: 124px;
  }
`
export const MainContentStyled = styled.div<BasketStyledProps>`
  @media only screen and (max-width: 768px) {
    display: ${({ isBasketOpen }) => (isBasketOpen ? 'none' : 'block')};
  }
`
export const BasketStyled = styled.div<BasketStyledProps>`
  @media only screen and (max-width: 768px) {
    display: ${({ isBasketOpen }) => (isBasketOpen ? 'flex' : 'none')};
  }
`

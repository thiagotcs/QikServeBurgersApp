import styled from 'styled-components'
interface SearchInputProps {
  $isBasketOpen?: boolean
}
export const SearchInputStyled = styled.div<SearchInputProps>`
  background-color: #f8f9fa;
  max-width: 1024px;
  gap: 4px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    display: ${({ $isBasketOpen }) => ($isBasketOpen ? 'none' : 'block')};
    padding: 16px;
  }
`

import styled from 'styled-components'

export const TextStyles = styled.span`
  width: 74px;
  height: 62px;
  padding: 16px 0 8px 0;
  display: block;

  @media only screen and (max-width: 768px) {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.5px;
    text-align: center;
    color: #121212;

    &:hover {
      font-family: Roboto;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0.5px;
      text-align: center;
    }
  }
`

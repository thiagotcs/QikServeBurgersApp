import styled from 'styled-components'

export const Actions = styled.footer`
  display: none;
  background-color: #f8f9fa;

  .info {
    background-color: #f8f9fa;
    border-style: solid;
    border-width: 1px 0px 1px 0px;
    padding: 24px;
    gap: 10px;
    border-color: #eeeeee;

    height: 67px;

    span {
      font-family: Roboto;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      color: #4f372f;
      display: block;
      width: 345px;
      height: 19px;
      border-radius: 8px;
      gap: 8px;
      background-color: #fff;
    }
  }

  div {
    width: 100%;
    height: 80px;
    top: 1414px;
    left: 3px;
    padding: 8px 24px 24px 24px;
    gap: 10px;
    background-color: #f8f9fa;

    button {
      width: 100%;
      height: 48px;
      padding: 16px;
      border-radius: 24px;
      gap: 8px;
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`

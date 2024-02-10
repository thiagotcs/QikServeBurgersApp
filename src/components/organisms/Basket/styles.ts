import styled from 'styled-components'

interface BasketStyledProps {
  isEmpty?: boolean
  $isBasketOpen?: boolean
}

export const BasketStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isEmpty',
})<BasketStyledProps>`
  box-sizing: border-box;
  position: absolute;
  right: 40px;
  background-color: #fff;
  width: 320px;
  height: ${(props) => (props.isEmpty ? '129px' : 'auto')};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
  padding: 0px 0px 18px 0px;
  box-shadow: 0px 2px 14px 0px #00000026;

  header {
    background-color: #f8f9fa;
    width: 100%;
    height: 64px;
    padding: 16px 24px 16px 24px;
    border-radius: 5px 5px 0px 0px;

    h1 {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.5px;
      text-align: left;
      color: #464646;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    position: fixed;
    right: 0;
  }
`
export const StyledHeader = styled.header<BasketStyledProps>`
  @media only screen and (max-width: 768px) {
    display: ${({ $isBasketOpen }) => ($isBasketOpen ? 'none' : 'block')};
  }
`
export const OrdersContainer = styled.div`
  width: 100%;
  min-height: 129px;
  border: 0px 0px 1px 0px;

  > div {
    padding: 24px;

    span {
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
      color: #464646;
    }
  }

  .order-description {
    width: 100%;
    height: auto;
    padding: 8px 16px 8px 16px;
    border: 0px 0px 1px 0px;
    border-top: 1px solid #eeeeee;
    padding-top: 12px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: start;

      .item-description {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .description {
          display: flex;
          flex-direction: column;

          strong {
            font-family: Roboto;
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0px;
            text-align: left;
          }
          span {
            font-family: Roboto;
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0px;
            text-align: left;
            color: #5f5f5f;
          }
        }
        .price {
          font-family: Roboto;
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0.5px;
          text-align: right;
        }
      }
    }
  }
`
export const FooterContainer = styled.footer`
  width: 100%;
  height: 117px;
  padding: 16px 0px 0px 0px;
  margin-top: auto;

  .subtotal {
    width: 100%;
    padding: 22px 16px 17px 16px;
    display: flex;
    justify-content: space-between;
    background: #f8f9fa;
    border-top: 1px solid #dadada;

    span {
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
    }

    strong {
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0.5px;
      text-align: right;
    }
  }
  .total {
    width: 100%;
    height: 60px;
    padding: 16px;
    gap: 24px;
    display: flex;
    justify-content: space-between;
    background: #f8f9fa;
    border-top: 1px solid #dadada;

    span {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 300;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: left;
    }

    strong {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: right;
    }
  }
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;

  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 8px;

    button {
      width: 20px;
      height: 20px;
    }
  }
`

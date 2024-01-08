import styled from 'styled-components'

export const Overlay = styled.div`
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const ModalBody = styled.div`
  width: 480px;
  position: relative;
  background: #fff;
  overflow: auto;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }

  header {
    max-width: 100%;
    display: flex;
    justify-content: center;

    img {
      flex: 1;
      max-width: 100%;
      height: auto;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        top: 10px;
        right: 10px;
        position: absolute;
      }
    }
  }
  .description-container {
    padding: 16px;
    display: flex;
    flex-direction: column;
    background: #fff;

    strong {
      font-family: Roboto;
      font-weight: 700;
      font-size: 24px;
      line-height: 28.13px;
      color: #121212;
    }

    span {
      font-family: Roboto;
      font-weight: 400;
      font-size: 16px;
      line-height: 18.75px;
      color: #464646;
    }
  }
  .modifier-title {
    background: #f8f9fa;
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
  }
`

export const OrderDetails = styled.div`
  background-color: #fff;
  padding: 16px 24px;

  .product-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;

    > div {
      display: flex;
      flex-direction: column;
      span {
        margin-top: 4px;
      }
    }
  }
`
export const Actions = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .add-order {
    margin: 4px 24px 24px 24px;
    border-radius: 40px;
    gap: 8px;
  }
  button {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.75px;
    text-align: center;
  }

  button {
    &:disabled {
      background-color: #dadada;
    }
  }
`

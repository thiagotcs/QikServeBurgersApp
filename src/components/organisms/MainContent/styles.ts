import styled from 'styled-components'

export const MainContentStyled = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 0px 0px 24px 0px;
  box-shadow: 0px 2px 14px 0px #00000024;

  @media only screen and (max-width: 768px) {
    width: 100%;
    box-shadow: none;
    padding: 0px 16px 16px 16px;
  }
`
export const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @media only screen and (max-width: 768px) {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 100;
  }
`

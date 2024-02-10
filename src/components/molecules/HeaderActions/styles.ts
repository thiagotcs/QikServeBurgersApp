import styled from 'styled-components'

interface HeaderContainerProps {
  $bannerImage: string
  $isBasketOpen?: boolean
}
interface TopBarProps {
  $navBackgroundColour?: string
  $isBasketOpen?: boolean
}

export const TopBarStyles = styled.div<TopBarProps>`
  background-color: ${({ $isBasketOpen, $navBackgroundColour }) =>
    $isBasketOpen ? '#dadada' : $navBackgroundColour};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    height: 64px;
    padding: 10px;

    h1 {
      font-family: Roboto;
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0.75px;
      text-align: center;
      color: ${({ $isBasketOpen }) => ($isBasketOpen ? '#121212' : '#fff')};
      margin: 0 auto;
    }
  }
`
export const IconContainer = styled.div<TopBarProps>`
  display: none;
  width: 16px;
  height: 16px;

  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    color: ${({ $isBasketOpen }) => ($isBasketOpen ? '#121212' : '#fff')};
    padding-top: 23px;
  }
`
export const HeaderContainer = styled.header<HeaderContainerProps>`
  background-image: ${(props) => `url(${props.$bannerImage})`};
  background-position: center;
  background-size: cover;
  max-width: 100%;
  height: 150px;
  max-width: 100%;
  max-height: 100%;
  @media only screen and (max-width: 768px) {
    display: ${({ $isBasketOpen }) => ($isBasketOpen ? 'none' : 'flex')};
  }
`

export const HeaderContent = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    background-color: #fff;
  }
`

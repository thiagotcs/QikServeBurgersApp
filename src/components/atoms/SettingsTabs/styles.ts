import styled from 'styled-components'

export const RootStyled = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 393px;
    height: 64px;
  }
`
export const TabContentStyled = styled.div``

export const TabButton = styled.button<{ $isActive: boolean }>`
  width: 232px;
  height: 52px;
  padding: 14px 0px 0px 0px;
  gap: 10px;
  border: none;
  background-color: transparent;
  color: #fff;
  border-bottom: ${(props) =>
    props.$isActive ? '2px solid #ddd' : 'transparent'};
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

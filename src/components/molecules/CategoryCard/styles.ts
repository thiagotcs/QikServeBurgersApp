import styled from 'styled-components'

interface PrimaryColourProps {
  $primaryColour: string
}
export const CardStyled = styled.div<PrimaryColourProps>`
  text-align: center;
  cursor: pointer;
  height: 146px;
  width: 104px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0.5px;
    text-align: center;
    color: #121212;
    border-bottom: 2px solid ${(props) => props.$primaryColour};
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`

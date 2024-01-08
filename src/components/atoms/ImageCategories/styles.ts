import styled from 'styled-components'

interface PrimaryColourProps {
  $primaryColour: string
}

export const ImageStyles = styled.div<PrimaryColourProps>`
  border-radius: 50%;
  padding: 4px;
  .container {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.$primaryColour};
  }
`

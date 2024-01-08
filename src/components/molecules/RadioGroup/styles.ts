import styled from 'styled-components'

interface RootProps {
  size?: number
  borderColor?: string
  backgroundColor?: string
}
interface FillProps {
  fillColor?: string
  borderActive?: string
}
export const Root = styled.div<RootProps>`
  margin: 5px;
  cursor: pointer;
  width: ${(props) => (props.size ? props.size : 20)}px;
  height: ${(props) => (props.size ? props.size : 20)}px;
  position: relative;

  label {
    margin-left: 25px;
  }
  &::before {
    content: '';
    border-radius: 100%;
    border: 3px solid
      ${(props) => (props.borderColor ? props.borderColor : '#DDD')};
    background: ${(props) =>
      props.backgroundColor ? props.backgroundColor : '#FAFAFA'};
    max-width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.size ? props.size * 1.5 : 30)}px;
    height: ${(props) => (props.size ? props.size * 1.5 : 30)}px;

    label {
      margin-left: 35px;
    }
  }
`

export const Fill = styled.div<FillProps>`
  background: ${(props) => (props.fillColor ? props.fillColor : '#A475E4')};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.2s ease-in,
    height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: '';
    opacity: 0;
    width: calc(20px - 4px);
    position: absolute;
    height: calc(20px - 4px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid
      ${(props) => (props.borderActive ? props.borderActive : '#A475E4')};
    border-radius: 100%;
  }
  @media only screen and (max-width: 768px) {
    transform: scale(1.5);
  }
`

export const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  max-width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

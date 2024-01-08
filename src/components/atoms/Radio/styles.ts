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
    border: 3px solid #5f5f5f;
    background: #fafafa;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`

export const Fill = styled.div<FillProps>`
  background: #5f5f5f;
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
    width: calc(20px - 0px);
    position: absolute;
    height: calc(20px - 0px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
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

  &:checked {
    & ~ ${Fill} {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      transition:
        width 0.2s ease-out,
        height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`

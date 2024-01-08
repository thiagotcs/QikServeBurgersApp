import styled from 'styled-components'

export const RootStyled = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  height: 44px;
  gap: 2;
  margin-top: 10px;
  border-radius: 6px;
  border: 1px solid #cbd5e0;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`
export const ControlStyled = styled.input`
  flex: 1;
  border: 0;
  background-color: transparent;
  padding: 0;
  color: #2c2c2c;
  outline: none;
  transition:
    color 0.2s,
    placeholder 0.2s;
`
export const PrefixStyled = styled.div`
  width: 48px;
  height: 44px;
  padding: 10px 12px 10px 12px;
  gap: 10px;
  color: #8a94a4;
`

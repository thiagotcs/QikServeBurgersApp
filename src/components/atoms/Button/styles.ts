import { darken } from 'polished'
import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $primaryColour?: string
  $primaryColourHover?: string
}
const baseStyles = css`
  border: none;
  cursor: pointer;
  outline: none;
  font-weight: 600;
  transition:
    background-color 0.3s,
    color 0.3s;
`

export const GhostButton = styled.button`
  ${baseStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  gap: 8;
  background: #4f372f;
  color: #fff;
  width: 32px;
  height: 32px;
  &:hover {
    color: #fff;
    background-color: ${(props) =>
      darken(0.1, props.$primaryColourHover || '#4f372f')};
  }
`

export const PrimaryButton = styled.button<StyledButtonProps>`
  ${baseStyles}
  background-color: ${(props) => props.$primaryColour};
  color: #fff;
  border-radius: 0.375rem;
  padding: 0.5rem;
  &:hover {
    background-color: ${(props) =>
      darken(0.1, props.$primaryColourHover || '#4f372f')};
  }
`

export const OutlineButton = styled.button`
  ${baseStyles}
  background-color: transparent;
  border: 1px solid #d2d6dc;
  color: #718096;
  border-radius: 0.375rem;
  padding: 0.5rem;
  &:hover {
    background-color: rgba(217, 219, 221, 0.1);
    border-color: #4a5568;
  }
`

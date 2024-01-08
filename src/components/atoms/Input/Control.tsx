import { InputHTMLAttributes } from 'react'
import { ControlStyled } from './styles'

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Control(props: ControlProps) {
  return <ControlStyled {...props} />
}

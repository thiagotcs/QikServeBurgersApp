import { ButtonHTMLAttributes } from 'react'
import { useThemeContext } from '../../../hooks/useThemeContext'
import * as ButtonStyles from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'primary' | 'outline'
  asChild?: boolean
}

const variantComponents = {
  ghost: ButtonStyles.GhostButton,
  outline: ButtonStyles.OutlineButton,
  primary: ButtonStyles.PrimaryButton,
}

export const Button = ({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  const themeContext = useThemeContext()
  const ChosenButton = variantComponents[variant] || ButtonStyles.PrimaryButton

  return (
    <ChosenButton
      $primaryColour={themeContext.primaryColour}
      $primaryColourHover={themeContext.primaryColourHover}
      {...props}
      className={className}
    />
  )
}

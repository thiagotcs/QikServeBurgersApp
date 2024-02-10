import { useThemeContext } from '@/hooks/useThemeContext'
import { ButtonHTMLAttributes } from 'react'
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
  if (!themeContext || !themeContext.webSettings) {
    return null
  }

  return (
    <ChosenButton
      $primaryColour={themeContext.webSettings.primaryColour}
      $primaryColourHover={themeContext.webSettings.primaryColourHover}
      {...props}
      className={className}
    />
  )
}

import { useContext } from 'react'
import { ThemeContext, ThemeContextValues } from '../context/ThemeContext'

export const useThemeContext = (): ThemeContextValues => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}

import { ReactNode, createContext, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { restaurantApi } from '../services/api'
import { WebSettings } from '../types/apiTypes'

interface ThemeContextProps {
  children: ReactNode
}

export interface ThemeContextValues extends WebSettings {
  isLoading: boolean
  error: string | null
}

export const ThemeContext = createContext<ThemeContextValues | undefined>(
  undefined,
)

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const { apiData, error, isLoading } = useFetch<WebSettings>(restaurantApi)

  const [themeValues, setThemeValues] = useState<ThemeContextValues>({
    navBackgroundColour: '',
    primaryColour: '',
    primaryColourHover: '',
    bannerImage: '',
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    if (apiData) {
      setThemeValues({
        navBackgroundColour: apiData.webSettings.navBackgroundColour,
        primaryColour: apiData.webSettings.primaryColour,
        primaryColourHover: apiData.webSettings.primaryColourHover,
        bannerImage: apiData.webSettings.bannerImage,
        isLoading: false,
        error: null,
      })
    } else if (error) {
      setThemeValues({
        navBackgroundColour: '',
        primaryColour: '',
        primaryColourHover: '',
        bannerImage: '',
        isLoading: false,
        error: 'Failed to fetch theme data',
      })
    }
  }, [apiData, error])

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  )
}

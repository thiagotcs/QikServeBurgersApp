import { useFetch } from '@/hooks/useFetch'
import { restaurantApi } from '@/services/api'
import { RestaurantDetails, WebSettings } from '@/types/apiTypes'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface ThemeContextProps {
  children: ReactNode
  isLoading: boolean
  error: Error | null
}

export interface ThemeContextValues {
  isLoading: boolean
  error: string | null
  webSettings?: WebSettings
}

export const ThemeContext = createContext<ThemeContextValues | undefined>(
  undefined,
)

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const { apiData, error } = useFetch<RestaurantDetails>(restaurantApi)

  const [themeValues, setThemeValues] = useState<ThemeContextValues>({
    isLoading: true,
    error: null,
    webSettings: undefined,
  })

  useEffect(() => {
    if (apiData) {
      setThemeValues({
        isLoading: false,
        error: null,
        webSettings: apiData.webSettings,
      })
    } else if (error) {
      setThemeValues({
        ...themeValues,
        isLoading: false,
        error: 'Falha ao buscar os dados do tema',
      })
    }
  }, [apiData, error])

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  )
}

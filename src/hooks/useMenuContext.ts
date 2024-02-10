import { MenuContext } from '@/context/MenuContext'
import { useContext } from 'react'

export const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider')
  }
  return context
}

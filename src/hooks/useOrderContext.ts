import { OrderContext } from '@/context/OrderContext'
import { useContext } from 'react'

export const useOrderContext = () => {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('useOrderContext deve ser usado dentro de um OrderProvider')
  }
  return context
}

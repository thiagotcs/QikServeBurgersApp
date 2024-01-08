import { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

export const useOrderContext = () => {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('useOrderContext deve ser usado dentro de um OrderProvider')
  }
  return context
}

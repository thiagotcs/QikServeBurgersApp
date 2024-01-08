import { Dispatch, SetStateAction } from 'react'
import { MenuItem } from './apiTypes'

export interface OrderContextProps {
  orderItems: Record<string, { item: MenuItem; quantity: number }>
  selectedOrder: MenuItem | null
  setSelectedOrder: Dispatch<SetStateAction<MenuItem | null>>
  selectedOption: string
  quantity: number
  isBasketOpen: boolean
  setSelectedOption: (value: string) => void
  setQuantity: (value: number) => void
  handleIncrementQuantity: (value: string) => void
  handleDecrementQuantity: (value: string) => void
  calculateTotal: () => number
  handleAddToOrder: () => void
  canModifyOrder: () => boolean
  toggleBasket: () => void
  calculateItemTotal: (
    item: MenuItem,
    quantity: number,
    selectedOption: string | null,
  ) => number
  calculateCartTotal: () => number
}
export interface OrderProviderProps {
  children: React.ReactNode
}

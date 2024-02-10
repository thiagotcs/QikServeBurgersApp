import { MenuItem } from '@/types/apiTypes'
import { OrderContextProps, OrderProviderProps } from '@/types/orderTypes'
import { FC, createContext, useState } from 'react'

export const OrderContext = createContext<OrderContextProps | undefined>(
  undefined,
)
export const OrderProvider: FC<OrderProviderProps> = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)
  const [selectedOrder, setSelectedOrder] = useState<null | MenuItem>(null)
  const [orderItems, setOrderItems] = useState<
    Record<string, { item: MenuItem; quantity: number }>
  >({})
  const [isBasketOpen, setIsBasketOpen] = useState(false)

  const handleIncrementQuantity = (itemId: string) => {
    setQuantity((prevQuantity) => prevQuantity + 1)
    setOrderItems((prevItems) => {
      if (!prevItems[itemId]) {
        return prevItems
      }
      return {
        ...prevItems,
        [itemId]: {
          ...prevItems[itemId],
          quantity: prevItems[itemId].quantity + 1,
        },
      }
    })
  }
  const handleDecrementQuantity = (itemId: string) => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
    setOrderItems((prevItems) => {
      if (!prevItems[itemId] || prevItems[itemId].quantity <= 1) {
        return prevItems
      }
      return {
        ...prevItems,
        [itemId]: {
          ...prevItems[itemId],
          quantity: prevItems[itemId].quantity - 1,
        },
      }
    })
  }
  const calculateTotal = () => {
    if (!selectedOrder) {
      return 0
    }
    if (
      !selectedOption &&
      (!selectedOrder.modifiers || selectedOrder.modifiers.length === 0)
    ) {
      return selectedOrder.price * quantity
    }
    const selectedModifier = selectedOrder.modifiers?.find(
      (modifier) =>
        modifier.items?.some((item) => item.name === selectedOption),
    )
    if (!selectedModifier) {
      return 0
    }
    const selectedItem = selectedModifier.items?.find(
      (item) => item.name === selectedOption,
    )
    if (!selectedItem) {
      return 0
    }
    return selectedItem.price * quantity
  }
  const onAddToOrder = (newItem: MenuItem) => {
    setOrderItems((prevItems) => {
      const itemQuantity = newItem.quantity !== undefined ? newItem.quantity : 0
      const existingItem = prevItems[newItem.id]

      if (existingItem) {
        return {
          ...prevItems,
          [newItem.id]: {
            ...existingItem,
            quantity: existingItem.quantity + itemQuantity,
          },
        }
      } else {
        return {
          ...prevItems,
          [newItem.id]: { item: newItem, quantity: itemQuantity },
        }
      }
    })
  }
  const handleAddToOrder = () => {
    if (!selectedOrder) {
      return
    }
    const newTotal = calculateTotal()
    const newItem: MenuItem = {
      ...selectedOrder,
      selectedOption,
      quantity,
      total: newTotal,
    }
    onAddToOrder(newItem)
    setQuantity(1)
    setSelectedOption('')
  }
  const canModifyOrder = () => {
    if (!selectedOrder) {
      return false
    }

    if (!selectedOrder.modifiers || selectedOrder.modifiers.length === 0) {
      return true
    }

    return !!selectedOption && selectedOrder.price !== undefined
  }
  const calculateItemTotal = (
    item: MenuItem,
    quantity: number,
    selectedOption: string | null,
  ) => {
    let price = item.price

    if (item.modifiers && selectedOption) {
      const selectedModifier = item.modifiers.find((mod) =>
        mod.items.some((modItem) => modItem.name === selectedOption),
      )
      if (selectedModifier) {
        const modifierItem = selectedModifier.items.find(
          (modItem) => modItem.name === selectedOption,
        )
        price = modifierItem ? modifierItem.price : price
      }
    }

    return price * quantity
  }
  const calculateCartTotal = () => {
    return Object.values(orderItems).reduce((total, { item, quantity }) => {
      const itemTotal = calculateItemTotal(
        item,
        quantity,
        item.selectedOption ?? null,
      )
      return total + itemTotal
    }, 0)
  }
  const toggleBasket = () => {
    setIsBasketOpen((prevState) => !prevState)
    return !isBasketOpen
  }
  const contextValue: OrderContextProps = {
    isBasketOpen,
    toggleBasket,
    orderItems,
    selectedOrder,
    setSelectedOrder,
    selectedOption,
    setSelectedOption,
    quantity,
    setQuantity,
    handleIncrementQuantity,
    handleDecrementQuantity,
    calculateTotal,
    handleAddToOrder,
    canModifyOrder,
    calculateItemTotal,
    calculateCartTotal,
  }

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  )
}

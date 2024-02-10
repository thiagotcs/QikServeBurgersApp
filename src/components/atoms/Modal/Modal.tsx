import closeIcon from '@/assets/close.png'
import { useOrderContext } from '@/hooks/useOrderContext'
import { formatCurrency } from '@/utils/formatCurrency'
import { Button } from '@components/atoms/Button'
import { Radio } from '@components/atoms/Radio'
import { RadioGroup } from '@components/molecules/RadioGroup'
import { Minus, Plus } from 'lucide-react'
import { useEffect } from 'react'
import { Actions, ModalBody, OrderDetails, Overlay } from './styles'
interface OrderModalProps {
  visible: boolean
  onClose: () => void
}

export const Modal = ({ visible, onClose }: OrderModalProps) => {
  const {
    selectedOption,
    setSelectedOption,
    selectedOrder,
    handleIncrementQuantity,
    handleDecrementQuantity,
    quantity,
    setQuantity,
    calculateTotal,
    handleAddToOrder,
    canModifyOrder,
  } = useOrderContext()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setQuantity(1)
        setSelectedOption('')
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, selectedOption, setQuantity, setSelectedOption])

  if (!visible || !selectedOrder) {
    return null
  }
  const total = calculateTotal()

  return (
    <Overlay onClick={onClose}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <header>
          {selectedOrder.images?.[0]?.image && (
            <img src={selectedOrder.images[0].image} alt={selectedOrder.name} />
          )}
          <button
            type="button"
            onClick={() => {
              setQuantity(1)
              setSelectedOption('')
              onClose()
            }}
          >
            <img src={closeIcon} alt="close" width={28} height={28} />
          </button>
        </header>
        <div className="description-container">
          <strong>{selectedOrder.name}</strong>
          <span>{selectedOrder.description}</span>
        </div>
        {selectedOrder.modifiers && selectedOrder.modifiers.length > 0 && (
          <div className="modifier-title">
            <strong>Choose your size</strong>
            <span>Select 1 option</span>
          </div>
        )}
        <OrderDetails>
          {Array.isArray(selectedOrder.modifiers) &&
            selectedOrder.modifiers.map((product) => (
              <div className="item" key={product.id}>
                {Array.isArray(product.items) &&
                  product.items.map((modifierItem) => (
                    <div key={modifierItem.id} className="product-details">
                      <div>
                        <strong>{modifierItem.name}</strong>
                        <span>{formatCurrency(modifierItem.price)}</span>
                      </div>
                      <div>
                        <RadioGroup
                          name={modifierItem.name}
                          selectedValue={selectedOption}
                          onClickRadioButton={() =>
                            setSelectedOption(modifierItem.name)
                          }
                        >
                          <Radio value={modifierItem.name} />
                        </RadioGroup>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </OrderDetails>
        <Actions>
          <div className="quantity">
            <Button
              variant="ghost"
              className="icon-minus"
              onClick={() => handleDecrementQuantity(`${selectedOrder.id}`)}
              disabled={quantity === 1 || !canModifyOrder()}
            >
              <Minus />
            </Button>
            <span>{quantity}</span>
            <Button
              variant="ghost"
              className="icon-plus"
              onClick={() => handleIncrementQuantity(`${selectedOrder.id}`)}
              disabled={!canModifyOrder()}
            >
              <Plus />
            </Button>
          </div>
          <Button
            className="add-order"
            variant="primary"
            disabled={
              !selectedOrder ||
              (selectedOrder.modifiers
                ? !selectedOption ||
                  !selectedOrder.modifiers.some(
                    (modifier) =>
                      modifier.items &&
                      modifier.items.some(
                        (item) => item.name === selectedOption,
                      ),
                  )
                : selectedOrder.price === undefined || quantity <= 0)
            }
            onClick={() => {
              handleAddToOrder()
              onClose()
            }}
          >
            <span>Add to Order • {formatCurrency(total)}</span>
          </Button>
        </Actions>
      </ModalBody>
    </Overlay>
  )
}

import { useOrderContext } from '../../../hooks/useOrderContext'
import { Button } from '../../atoms/Button'
import { Actions } from './styles'
export const FooterActions = () => {
  const { orderItems, isBasketOpen, toggleBasket } = useOrderContext()

  const totalItems = Object.values(orderItems).reduce(
    (total, item) => total + item.quantity,
    0,
  )
  const handleButtonClick = () => {
    toggleBasket()
  }
  return (
    <Actions>
      <div className="info">
        {!isBasketOpen && <span>View allergy information</span>}
      </div>
      <div>
        {totalItems > 0 && (
          <Button
            className="add-order"
            variant="primary"
            onClick={handleButtonClick}
          >
            {isBasketOpen ? (
              <span>Checkout now</span>
            ) : (
              <span>
                Your basket • {totalItems} item{totalItems > 1 ? 's' : ''}
              </span>
            )}
          </Button>
        )}
      </div>
    </Actions>
  )
}

import { Minus, Plus } from 'lucide-react'
import { useOrderContext } from '../../../hooks/useOrderContext'
import { formatCurrency } from '../../../utils/formatCurrency'
import { Button } from '../../atoms/Button'
import {
  Actions,
  BasketStyled,
  FooterContainer,
  OrdersContainer,
  StyledHeader,
} from './styles'

export const Basket = () => {
  const {
    orderItems,
    handleIncrementQuantity,
    handleDecrementQuantity,
    calculateItemTotal,
    calculateCartTotal,
    isBasketOpen,
  } = useOrderContext()
  const total = calculateCartTotal()
  const isCartEmpty = Object.keys(orderItems).length === 0

  return (
    <BasketStyled isEmpty={isCartEmpty}>
      <StyledHeader isBasketOpen={isBasketOpen}>
        <h1>Carrinho</h1>
      </StyledHeader>
      <OrdersContainer>
        {isCartEmpty && (
          <div>
            <span>Seu carrinho está vazio</span>
          </div>
        )}
        {Object.keys(orderItems).map((itemId) => {
          const { item, quantity } = orderItems[itemId]
          return (
            <div className="order-description" key={itemId}>
              <div className="item">
                <div className="item-description">
                  <div className="description">
                    <strong>{item.name}</strong>
                    <span>{item.selectedOption}</span>
                  </div>
                  <div className="price">
                    <strong>
                      {formatCurrency(
                        calculateItemTotal(
                          item,
                          quantity,
                          item.selectedOption ?? null,
                        ),
                      )}
                    </strong>
                  </div>
                </div>
                <Actions>
                  <div className="quantity">
                    <Button
                      variant="ghost"
                      className="icon-minus"
                      onClick={() => handleDecrementQuantity(itemId)}
                    >
                      <Minus />
                    </Button>
                    <span>{quantity}</span>
                    <Button
                      variant="ghost"
                      className="icon-plus"
                      onClick={() => handleIncrementQuantity(itemId)}
                    >
                      <Plus />
                    </Button>
                  </div>
                </Actions>
              </div>
            </div>
          )
        })}
      </OrdersContainer>
      {!isCartEmpty && (
        <FooterContainer>
          <div className="subtotal">
            <span>Sub total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
          <div className="total">
            <span>Total:</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </FooterContainer>
      )}
    </BasketStyled>
  )
}

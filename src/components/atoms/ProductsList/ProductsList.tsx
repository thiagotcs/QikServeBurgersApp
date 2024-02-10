import { useOrderContext } from '@/hooks/useOrderContext'
import { useThemeContext } from '@/hooks/useThemeContext'
import { MenuItem } from '@/types/apiTypes'
import { formatCurrency } from '@/utils/formatCurrency'
import { Modal } from '@components/atoms/Modal'
import { useState } from 'react'
import { ProductsListStyle } from './styles'

interface ProductsListProps {
  items: MenuItem[]
}

export const ProductsList = ({ items }: ProductsListProps) => {
  const themeContext = useThemeContext()
  const { orderItems, setSelectedOrder } = useOrderContext()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOpenModal = (product: MenuItem) => {
    setIsModalVisible(true)
    setSelectedOrder(product)
  }
  const handleCloseModal = () => {
    setIsModalVisible(false)
    setSelectedOrder(null)
  }
  if (!themeContext || !themeContext.webSettings) {
    return null
  }
  return (
    <ProductsListStyle $primaryColour={themeContext.webSettings.primaryColour}>
      <Modal visible={isModalVisible} onClose={handleCloseModal} />
      <div className="product-items">
        <div className="item">
          {items.map((product) => (
            <div
              key={product.id}
              className="product-details"
              onClick={() => handleOpenModal(product)}
            >
              <div className="item-description">
                <div className="product-quantity">
                  {orderItems[product.id]?.quantity > 0 && (
                    <div className="quantity">
                      <span>{orderItems[product.id]?.quantity}</span>
                    </div>
                  )}
                  <strong>{product.name}</strong>
                </div>
                <span className="description">{product.description}</span>
                <strong>{formatCurrency(product.price)}</strong>
              </div>
              {product.images && product.images.length > 0 && (
                <div className="img-item">
                  <img
                    src={product.images[0].image}
                    alt={`product-${product.name}`}
                    width={128}
                    height={85}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ProductsListStyle>
  )
}

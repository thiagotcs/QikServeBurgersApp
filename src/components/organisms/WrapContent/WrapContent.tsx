import { useOrderContext } from '../../../hooks/useOrderContext'
import { Basket } from '../Basket'
import { MainContent } from '../MainContent'
import { WrapContentStyled, MainContentStyled, BasketStyled } from './styles'

export const WrapContent = () => {
  const { isBasketOpen } = useOrderContext()
  return (
    <WrapContentStyled>
      <MainContentStyled isBasketOpen={isBasketOpen}>
        <MainContent />
      </MainContentStyled>
      <BasketStyled isBasketOpen={isBasketOpen}>
        <Basket />
      </BasketStyled>
    </WrapContentStyled>
  )
}

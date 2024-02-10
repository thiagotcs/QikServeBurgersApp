import { useOrderContext } from '@/hooks/useOrderContext'
import { Basket } from '@components/organisms/Basket'
import { MainContent } from '@components/organisms/MainContent'
import { BasketStyled, MainContentStyled, WrapContentStyled } from './styles'

export const WrapContent = () => {
  const { isBasketOpen } = useOrderContext()
  return (
    <WrapContentStyled>
      <MainContentStyled $isBasketOpen={isBasketOpen}>
        <MainContent />
      </MainContentStyled>
      <BasketStyled $isBasketOpen={isBasketOpen}>
        <Basket />
      </BasketStyled>
    </WrapContentStyled>
  )
}

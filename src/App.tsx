import { OrderProvider } from '@/context/OrderContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { FooterActions } from '@components/molecules/FooterActions'
import { HeaderActions } from '@components/molecules/HeaderActions'
import { SearchInput } from '@components/molecules/SearchInput'
import { WrapContent } from '@components/organisms/WrapContent'
import { FC } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'

export const App: FC = () => {
  return (
    <>
      <ThemeProvider isLoading={false} error={null}>
        <OrderProvider>
          <GlobalStyles />
          <HeaderActions />
          <SearchInput />
          <WrapContent />
          <FooterActions />
        </OrderProvider>
      </ThemeProvider>
    </>
  )
}

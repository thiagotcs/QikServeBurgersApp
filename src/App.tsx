import { FC } from 'react'
import { FooterActions } from './components/molecules/FooterActions'
import { HeaderActions } from './components/molecules/HeaderActions'
import { SearchInput } from './components/molecules/SearchInput'
import { WrapContent } from './components/organisms/WrapContent'
import { OrderProvider } from './context/OrderContext'
import { ThemeProvider } from './context/ThemeContext'
import { GlobalStyles } from './styles/GlobalStyles'

export const App: FC = () => {
  return (
    <>
      <ThemeProvider>
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

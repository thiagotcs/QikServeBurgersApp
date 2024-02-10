import { useOrderContext } from '@/hooks/useOrderContext'
import { useThemeContext } from '@/hooks/useThemeContext'
import { SettingsTabs } from '@components/atoms/SettingsTabs/SettingsTabs'
import { AlignJustify, X } from 'lucide-react'
import { ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyleSheetManager } from 'styled-components'
import { HeaderContainer, IconContainer, TopBarStyles } from './styles'

interface ForwardPropsProviderProps {
  children: ReactNode
}
export const HeaderActions = () => {
  const themeContext = useThemeContext()
  const { isBasketOpen } = useOrderContext()
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const ForwardPropsProvider = ({ children }: ForwardPropsProviderProps) => (
    <StyleSheetManager
      shouldForwardProp={(prop) => prop !== 'navBackgroundColour'}
    >
      {children}
    </StyleSheetManager>
  )

  if (!themeContext || !themeContext.webSettings) {
    return null
  }

  return (
    <>
      <ForwardPropsProvider>
        <TopBarStyles
          $navBackgroundColour={themeContext.webSettings.navBackgroundColour}
          $isBasketOpen={isBasketOpen}
        >
          <IconContainer $isBasketOpen={isBasketOpen}>
            <h1>{isBasketOpen ? 'Basket' : 'Menu'}</h1>
            {isBasketOpen ? (
              <X width={16} height={16} />
            ) : (
              <AlignJustify width={16} height={16} />
            )}
          </IconContainer>
          <SettingsTabs />
        </TopBarStyles>
      </ForwardPropsProvider>
      {!(isMobile && isBasketOpen) && (
        <HeaderContainer
          $bannerImage={themeContext.webSettings.bannerImage}
          $isBasketOpen={isBasketOpen}
        />
      )}
    </>
  )
}

import { Search } from 'lucide-react'
import { useOrderContext } from '@/hooks/useOrderContext'
import * as Input from '@components/atoms/Input'
import { SearchInputStyled } from './styles'

export const SearchInput = () => {
  const { isBasketOpen } = useOrderContext()

  return (
    <SearchInputStyled $isBasketOpen={isBasketOpen}>
      <Input.Root>
        <Input.Prefix>
          <Search />
        </Input.Prefix>
        <Input.Control type="text" placeholder="Search menu items" />
      </Input.Root>
    </SearchInputStyled>
  )
}

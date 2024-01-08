import { Search } from 'lucide-react'
import * as Input from '../../atoms/Input'
import { SearchInputStyled } from './styles'
import { useOrderContext } from '../../../hooks/useOrderContext'

export const SearchInput = () => {
  const { isBasketOpen } = useOrderContext()

  return (
    <SearchInputStyled isBasketOpen={isBasketOpen}>
      <Input.Root>
        <Input.Prefix>
          <Search />
        </Input.Prefix>
        <Input.Control type="text" placeholder="Search menu items" />
      </Input.Root>
    </SearchInputStyled>
  )
}

import { useThemeContext } from '../../../hooks/useThemeContext'
import { ImageCategories } from '../../atoms/ImageCategories'
import { TextCategories } from '../../atoms/TextCategories'
import { CardStyled } from './styles'

interface CategoryCardProps {
  imageSrc: string
  categoryName: string
  onClick: () => void
}

export const CategoryCard = ({
  imageSrc,
  categoryName,
  onClick,
}: CategoryCardProps) => {
  const themeContext = useThemeContext()
  return (
    <CardStyled onClick={onClick} $primaryColour={themeContext.primaryColour}>
      <ImageCategories src={imageSrc} alt={categoryName} />
      <TextCategories text={categoryName} />
    </CardStyled>
  )
}

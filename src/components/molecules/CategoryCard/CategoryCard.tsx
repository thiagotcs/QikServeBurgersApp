import { useThemeContext } from '@/hooks/useThemeContext'
import { ImageCategories } from '@components/atoms/ImageCategories'
import { TextCategories } from '@components/atoms/TextCategories'
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
  if (!themeContext || !themeContext.webSettings) {
    return null
  }
  return (
    <CardStyled
      onClick={onClick}
      $primaryColour={themeContext.webSettings.primaryColour}
    >
      <ImageCategories src={imageSrc} alt={categoryName} />
      <TextCategories text={categoryName} />
    </CardStyled>
  )
}

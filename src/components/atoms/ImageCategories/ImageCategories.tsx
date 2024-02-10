import { useThemeContext } from '@/hooks/useThemeContext'
import { ImageStyles } from './styles'

interface ImageProps {
  src: string
  alt: string
}

export const ImageCategories = ({ src, alt }: ImageProps) => {
  const themeContext = useThemeContext()
  if (!themeContext || !themeContext.webSettings) {
    return null
  }
  return (
    <ImageStyles $primaryColour={themeContext.webSettings.primaryColour}>
      <div className="container">
        <img src={src} alt={alt} />
      </div>
    </ImageStyles>
  )
}

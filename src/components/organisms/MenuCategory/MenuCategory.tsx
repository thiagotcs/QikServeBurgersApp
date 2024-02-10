import { useFetch } from '@/hooks/useFetch'
import { useMenuContext } from '@/hooks/useMenuContext'
import { menuApi } from '@/services/api'
import { ApiResponse } from '@/types/apiTypes'
import { CategoryCard } from '@components/molecules/CategoryCard'
import { Loader } from 'lucide-react'
import { CategoryCardStyled, LoaderStyled } from './styles'

interface ImageProps {
  id: number
  image: string
}

interface SectionProps {
  id: number
  name: string
  images: ImageProps[]
}

export const MenuCategory = () => {
  const { setOpenSections } = useMenuContext()
  const { apiData, error, isLoading } = useFetch<ApiResponse>(menuApi)
  if (isLoading) {
    return (
      <LoaderStyled>
        <Loader className="animate-spin" />
      </LoaderStyled>
    )
  }

  if (error || !apiData) {
    return <div>Error loading data</div>
  }

  const sections = (apiData as { sections: SectionProps[] }).sections || []
  const categories = sections.map((section: SectionProps, index) => {
    const categoryName = section.name
    const imageSrc = section.images?.[0]?.image || ''
    return { categoryName, imageSrc, index }
  })

  const handleCategoryClick = (categoryName: string) => {
    setOpenSections((prevOpenSections) => {
      if (prevOpenSections.includes(categoryName)) {
        return prevOpenSections.filter((section) => section !== categoryName)
      } else {
        return [...prevOpenSections, categoryName]
      }
    })
  }

  return (
    <CategoryCardStyled>
      {categories.map((category) => (
        <CategoryCard
          key={category.index}
          imageSrc={category.imageSrc}
          categoryName={category.categoryName}
          onClick={() => handleCategoryClick(category.categoryName)}
        />
      ))}
    </CategoryCardStyled>
  )
}

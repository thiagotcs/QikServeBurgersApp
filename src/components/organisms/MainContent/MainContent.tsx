import { MenuProvider } from '@/context/MenuContext'
import { useFetch } from '@/hooks/useFetch'
import { useMenuContext } from '@/hooks/useMenuContext'
import { menuApi } from '@/services/api'
import { ApiResponse } from '@/types/apiTypes'
import { Accordion } from '@components/atoms/Accordion'
import { ProductsList } from '@components/atoms/ProductsList'
import { MenuCategory } from '@components/organisms/MenuCategory'
import { Loader } from 'lucide-react'
import { Suspense, useMemo } from 'react'

import { LoaderStyled, MainContentStyled } from './styles'

const SectionLoader = ({ sectionName }: { sectionName: string }) => {
  const { toggleSection } = useMenuContext()
  const { apiData, error, isLoading } = useFetch<ApiResponse>(
    menuApi,
    sectionName,
  )

  const section = useMemo(() => {
    if (!apiData || !apiData.sections || apiData.sections.length === 0) {
      return null
    }

    return apiData.sections.find((section) => section.name === sectionName)
  }, [apiData, sectionName])

  if (isLoading) {
    return (
      <LoaderStyled>
        <Loader className="animate-spin" />
      </LoaderStyled>
    )
  }

  if (error || !section) {
    return <p>No sections available.</p>
  }
  return (
    <Accordion title={sectionName} onClick={() => toggleSection(sectionName)}>
      <ProductsList key={section.id} items={section.items} />
    </Accordion>
  )
}

export const MainContent = () => {
  return (
    <MenuProvider>
      <MainContentStyled>
        <MenuCategory />
        <Suspense
          fallback={
            <LoaderStyled>
              <Loader className="animate-spin" />
            </LoaderStyled>
          }
        >
          <SectionLoader sectionName="Burgers" />
        </Suspense>
        <Suspense
          fallback={
            <LoaderStyled>
              <Loader className="animate-spin" />
            </LoaderStyled>
          }
        >
          <SectionLoader sectionName="Drinks" />
        </Suspense>
        <Suspense
          fallback={
            <LoaderStyled>
              <Loader className="animate-spin" />
            </LoaderStyled>
          }
        >
          <SectionLoader sectionName="Desserts" />
        </Suspense>
      </MainContentStyled>
    </MenuProvider>
  )
}

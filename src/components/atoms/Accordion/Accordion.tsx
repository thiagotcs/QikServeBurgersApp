import { FC, useCallback, useContext } from 'react'
import { MenuContext, MenuContextProps } from '../../../context/MenuContext'
import { AccordionContent } from '../AccordionContent'
import { AccordionHeader } from '../AccordionHeader'
import { AccordionProps } from './interfaces'
import { AccordionStyled } from './styles'

export const Accordion: FC<AccordionProps> = ({ title, height, children }) => {
  const context = useContext<MenuContextProps>(MenuContext)
  const { openSections, toggleSection } = context
  const isExpanded = openSections.includes(title)

  const handleAccordionClick = useCallback(() => {
    toggleSection(title)
  }, [title, toggleSection])
  return (
    <AccordionStyled
      $expanded={isExpanded}
      height={height}
      onClick={handleAccordionClick}
    >
      <AccordionHeader>{title}</AccordionHeader>
      <AccordionContent>{children}</AccordionContent>
    </AccordionStyled>
  )
}

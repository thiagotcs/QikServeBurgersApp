import React, { createContext, FC, ReactNode, useState } from 'react'

interface MenuProviderProps {
  children: ReactNode
}
export interface MenuContextProps {
  openSections: string[]
  setOpenSections: React.Dispatch<React.SetStateAction<string[]>>
  toggleSection: (sectionName: string) => void
}

export const MenuContext = createContext<MenuContextProps>({
  openSections: [],
  setOpenSections: () => {},
  toggleSection: () => {},
})

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (sectionName: string) => {
    setOpenSections((prevOpenSections) => {
      if (prevOpenSections.includes(sectionName)) {
        return prevOpenSections.filter((section) => section !== sectionName)
      } else {
        return [...prevOpenSections, sectionName]
      }
    })
  }

  const contextValue: MenuContextProps = {
    openSections,
    setOpenSections,
    toggleSection,
  }
  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  )
}

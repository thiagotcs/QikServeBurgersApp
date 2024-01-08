import React, { ReactNode, useState } from 'react'
import { TabButton, TabContentStyled } from './styles'

export interface ListProps {
  children?: ReactNode
}
export interface TabProps {
  value: string
  title: React.ReactNode
  children?: React.ReactNode
  defaultValue?: boolean
}

export const List = ({ children }: ListProps) => {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const changeTab = (value: string) => {
    setActiveTab(value)
  }
  const defaultTab = React.Children.toArray(children)[0]
  const defaultTabValue = React.isValidElement<TabProps>(defaultTab)
    ? defaultTab.props.value
    : null
  const activeTabValue = activeTab || defaultTabValue

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<TabProps>(child)) {
          return (
            <TabButton
              key={index}
              $isActive={child.props.value === activeTabValue}
              onClick={() => changeTab(child.props.value)}
            >
              {child.props.title}
            </TabButton>
          )
        }
        return null
      })}
      {React.Children.map(children, (child) =>
        React.isValidElement<TabProps>(child) &&
        child.props.value === activeTabValue ? (
          <TabContentStyled key={child.props.value}>
            {child.props.children}
          </TabContentStyled>
        ) : null,
      )}
    </>
  )
}

export const Trigger: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>
}

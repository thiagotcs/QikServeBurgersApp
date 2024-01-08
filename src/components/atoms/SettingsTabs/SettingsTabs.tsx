import React from 'react'
import * as Tabs from '../SettingsTabs'

export const SettingsTabs: React.FC = () => {
  return (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger value="tab1" title="MENU"></Tabs.Trigger>
        <Tabs.Trigger value="tab2" title="ENTRAR"></Tabs.Trigger>
        <Tabs.Trigger value="tab3" title="CONTATO"></Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}

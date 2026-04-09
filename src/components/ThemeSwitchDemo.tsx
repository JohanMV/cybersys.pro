import { Laptop, Moon, Sun } from 'lucide-react'

import { ThemeSwitch } from '@/components/ui/theme-switch'

export default function ThemeSwitchDemo() {
  return (
    <ThemeSwitch
      variant="icon-click"
      modes={['light', 'dark', 'system']}
      icons={[
        <Sun key="sun-icon" size={16} />,
        <Moon key="moon-icon" size={16} />,
        <Laptop key="laptop-icon" size={16} />,
      ]}
      showInactiveIcons="all"
    />
  )
}

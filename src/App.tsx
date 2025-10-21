import { useState } from 'react';
import './App.css'
import Input from './components/Input/Input'
import Toast from './components/Toast/Toast'
import SidebarMenu from './components/SidebarMenu/SideBar';
function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
     <>
      {/* Invisible hover area - adjust width and height */}
      <SidebarMenu menuItems={
        [
         {
        id: '1',
        label: 'Dashboard',
        submenu: [
          { id: '1-1', label: 'Overview' },
          { id: '1-2', label: 'Stats' },
        ],
      },
      {
        id: '2',
        label: 'Account',
        submenu: [
          { id: '2-1', label: 'Profile' },
          {
            id: '2-2',
            label: 'Preferences',
            submenu: [
              { id: '2-2-1', label: 'Notifications' },
              { id: '2-2-2', label: 'Privacy' },
            ],
          },
        ],
      },
        ]
      } />
    </>
  )
}

export default App

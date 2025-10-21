import type { Meta, StoryObj } from '@storybook/react';
import SidebarMenu from '../../../components/SidebarMenu/SideBar';

const meta = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneLevelMenu: Story = {
  args: {
    menuItems: [
      { id: '1', label: 'Home' },
      { id: '2', label: 'Profile' },
      { id: '3', label: 'Settings' },
    ],
  },
};

export const TwoLevelMenu: Story = {
  args: {
    menuItems: [
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
          { id: '1', label: 'Profile' },
          {
            id: '2',
            label: 'Preferences',
            submenu: [
              { id: '1', label: 'Notifications' },
              { id: '2', label: 'Privacy' },
            ],
          },
        ],
      },
      { id: '3', label: 'Help' },
    ],
  },
};

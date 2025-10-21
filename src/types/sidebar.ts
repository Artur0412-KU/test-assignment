export type MenuItem = {
  id: string;
  label: string;
  submenu?: MenuItem[];
};

export type SidebarMenuProps = {
  menuItems: MenuItem[];
};
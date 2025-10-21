import React, { useState, type JSX } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from 'react-icons/fa';
import type {MenuItem}  from '../../types/sidebar';
import type { SidebarMenuProps } from '../../types/sidebar';

const SidebarMenu: React.FC<SidebarMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['2', '3']));

  const toggleExpand = (id: string): void => {
    setExpanded((prev) => {
      const copy = new Set(prev);
      if (copy.has(id)) {
        copy.delete(id);
      } else {
        copy.add(id);
      }
      return copy;
    });
  };

  const renderItems = (items: MenuItem[]): JSX.Element[] =>
    items.map(({ id, label, submenu }) => (
      <li key={id} style={{ marginBottom: 8 }}>
        <div
          onClick={() => {
            if (submenu) {
              toggleExpand(id);
            } else {
              console.log('Clicked menu item:', id, label);
              // Add your click action here
            }
          }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
            backgroundColor: submenu && expanded.has(id) ? '#f0f0f0' : undefined,
            padding: 8,
            borderRadius: 4,
            userSelect: 'none',
          }}
          onMouseEnter={(e) => {
            if (!submenu) {
              e.currentTarget.style.backgroundColor = '#f0f0f0';
            }
          }}
          onMouseLeave={(e) => {
            if (!submenu || !expanded.has(id)) {
              e.currentTarget.style.backgroundColor = '';
            }
          }}
        >
          <span>{label}</span>
          {submenu && <span>{expanded.has(id) ? <FaAngleUp /> : <FaAngleDown />}</span>}
        </div>
        {submenu && expanded.has(id) && (
          <ul 
            style={{ paddingLeft: 16, listStyle: 'none', margin: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {renderItems(submenu)}
          </ul>
        )}
      </li>
    ));

  return (
    <>
    
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: 290,
          zIndex: 10000,
          cursor: 'pointer',
        }}
      />
      <aside
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: 280,
          backgroundColor: '#fff',
          boxShadow: '-2px 0 8px rgba(0,0,0,0.2)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          transition: 'transform 0.3s ease',
          zIndex: 9999,
          padding: '1rem',
          overflowY: 'auto',
        }}
      >
        <nav>
          <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            {renderItems(menuItems)}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SidebarMenu;
# React Component Library with Storybook

## This repository contains a React component library with multiple reusable UI components, including a Sidebar Menu, Toast notification, and Input components. Each component is documented and tested with Storybook, enabling easy local development and visual testing.

## Setup Instructions

  1. Clone the repository:
  ```
  git clone <repo-url>
  cd <repo-directory>
  ```

  2. Install dependencies:
  ```npm install```

  3. Run Storybook locally: 
  ```npm run storybook```

  4. Open your web browser at ```http://localhost:6006``` to view the Storybook UI.

## Component Overview
### SidebarMenu

- A slide-in menu from the right.
- Supports multi-level nested accordion submenus.
- Opens when hovering over the right screen edge.
- Closes on mouse leave of sidebar and hover zone.
- Submenu items have independent click actions.
- Smooth CSS transitions for sliding and expansion.

### Toast

- Notification component appearing at bottom-right.
- Supports multiple types: success, error, info, warning.
- Auto-dismisses after configurable duration.
- Optional manual close button.
- Smooth fade and slide transitions on show/hide.
- System font-based styling for consistency.

### Input

- Styled input fields with password visibility toggle.
- Clear button to reset input content.
- Supports disabling password masking.


## Screenshots

## Input
### Base:
![image_alt](https://snipboard.io/kGJwql.jpg)

### Clearable:
![image](https://snipboard.io/RoS3is.jpg)

### Password:
![image](https://snipboard.io/6wgG7o.jpg)

### Clearable Password:
![image](https://snipboard.io/UWoiqZ.jpg)

### Number:
![image](https://snipboard.io/cseMw0.jpg)


## Toasts

### Success:
![image](https://snipboard.io/wIjv6t.jpg)

### Manual:
![image](https://snipboard.io/STCxIv.jpg)

### Error:
![image](https://snipboard.io/mwzSdf.jpg)

### Warning:
![image](https://snipboard.io/B8RAIC.jpg)


## SideBar Menu

### One Level:
![image](https://snipboard.io/lXoC9p.jpg)

### Two level with active items:
![image](https://snipboard.io/4SBnfu.jpg)


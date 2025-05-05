# E-commerce Admin Dashboard

A modern, feature-rich admin dashboard for e-commerce platforms built with React, Vite, and Tailwind CSS.

# DEMO

https://scintillating-caramel-b4f411.netlify.app/login

# USERS

email: "admin@ecommerce.com", password: "password", role: "admin"
email: "user@ecommerce.com", password: "userpass", role: "user"
email: "manager@ecommerce.com", password: "managerpass", role: "manager"

## Features

- 🌓 Dark/Light mode support with persistent theme storage
- 📊 Real-time analytics and charts
  - Inventory pie chart with stock status visualization
  - Live order tracking with weekly trends
  - Interactive revenue heatmap with daily data
  - Animated KPI counters showing key metrics
- 🏷️ Product management
  - Product listing with sorting and filtering
  - Inline product editing
  - Bulk product export to Excel
  - AI-powered product description generator
  - Real-time product stock tracking
- 📈 KPI monitoring and metrics
  - Total Orders tracking
  - Revenue analytics
  - Customer count
  - Product inventory levels
- 🔐 Secure authentication system
  - Role-based access control (Admin, User, Manager)
  - JWT token-based authentication
  - Protected routes
  - Automatic redirect to login
- 📱 Responsive design
  - Mobile-first approach
  - Collapsible sidebar navigation
  - Adaptive charts and tables
  - Touch-friendly interface

## Tech Stack

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Charts:** Chart.js
- **Authentication:** JWT
- **State Management:** Zustand & React Context

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
   \```bash
   git clone ["https://github.com/syedanasejaz/Ecommerce-Admin-Dashboard.git"]
   cd admin-panel-ecommerce
   \```

2. Install dependencies:
   \```bash
   npm install

# or

yarn install
\```

3. Start the development server:
   \```bash
   npm run dev

# or

yarn dev
\```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

\```
src/
├── assets/ # Icons, images, and other static assets
├── components/ # Reusable UI components
├── constants/ # Application constants
├── hooks/ # Custom React hooks
├── layouts/ # Layout components
├── pages/ # Page components
├── store/ # State management
└── utils/ # Utility functions
\```

### Architecture Overview

main.jsx
└── App.jsx
├── Layouts/
│ └── DashboardLayout
├── Pages/
│ ├── Dashboard/
│ │ └── Dashboard.jsx
│ ├── Login/
│ │ └── Login.jsx
│ └── Products/
│ └── Products.jsx
├── Components/
│ ├── Button
│ ├── DashboardCard
│ ├── Header
│ ├── Input
│ ├── InventoryPieChart
│ ├── KPISection
│ ├── LiveOrderChart
│ ├── ProductDescription
│ ├── ProductTable
│ ├── RevenueHeatmap
│ └── Sidebar
├── Store/ (Zustand)
│ └── productStore.jsx
├── Hooks/
│ └── UseContext/
│ └── ThemeContext.jsx
├── Utils/
│ ├── api.jsx
│ ├── chartjs-setup.jsx
│ └── mockProducts.jsx
└── Assets/
├── icons/
├── images/
└── logo/

## UX Rationale

### Design Philosophy

- **Intuitive Navigation**: The sidebar-based navigation provides easy access to all major sections while maintaining a clean, uncluttered interface.
- **Visual Hierarchy**: Important metrics and KPIs are prominently displayed at the top of the dashboard using animated counters to draw attention to critical business metrics.
- **Consistent Design Language**: Uses a cohesive color scheme with primary (#FA8103) and secondary colors throughout the interface for better visual recognition.

### Accessibility Features

- **Dark/Light Mode**: Supports system preferences and manual toggling for better visibility in different lighting conditions.
- **Responsive Typography**: Font sizes adapt to different screen sizes while maintaining readability.
- **Color Contrast**: Ensures WCAG compliance with carefully selected color combinations.

### User-Centric Features

1. **Intelligent Data Visualization**

   - Interactive charts that respond to user interactions
   - Data-dense displays like heatmaps for complex information
   - Real-time updates for live monitoring

2. **Smart Product Management**

   - Inline editing for quick updates
   - Bulk actions for efficiency
   - AI-assisted content generation
   - Excel export for offline analysis

3. **Responsive Design Considerations**

   - Collapsible sidebar for mobile users
   - Touch-friendly interface elements
   - Adaptive charts that remain readable on small screens
   - Mobile-first approach ensuring functionality across all devices

4. **Error Prevention & Recovery**

   - Form validation with clear error messages
   - Confirmation dialogs for critical actions
   - Automatic data saving
   - Session management with secure authentication

5. **Performance Optimizations**
   - Lazy loading of components
   - Optimized re-renders using React best practices
   - Efficient state management with Zustand
   - Cached theme preferences

### User Feedback Integration

- Animated interactions provide visual feedback
- Loading states indicate system status
- Toast notifications for action confirmations
- Clear success/error states for user actions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests

### Test Coverage

All test cases are passing successfully. The test suite includes:

- Login functionality tests
- Dashboard component tests
- Product store management tests

Current test coverage:
✓ Login component tests (3/3)
✓ Dashboard component tests (2/2)
✓ Product store tests (4/4)

# E-commerce Admin Dashboard

A modern, feature-rich admin dashboard for e-commerce platforms built with React, Vite, and Tailwind CSS.

# USERS

email: "admin@ecommerce.com", password: "password", role: "admin"
email: "user@ecommerce.com", password: "userpass", role: "user"
email: "manager@ecommerce.com", password: "managerpass", role: "manager"

## Features

- 🌓 Dark/Light mode support
- 📊 Real-time analytics and charts
  - Inventory pie chart
  - Live order tracking
  - Revenue heatmap
- 🏷️ Product management
  - Product listing and details
  - AI-powered product description generator
- 📈 KPI monitoring and metrics
- 🔐 Secure authentication system
- 📱 Responsive design

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
   git clone []
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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

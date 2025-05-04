import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/header";
import Products from "./pages/Products/products";
import { ThemeProvider } from "./hooks/UseContext/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <div className="flex min-h-screen">
                  <Sidebar />
                  <div className="flex-1">
                    <Header />
                    <div className="bg-gray-50 dark:bg-gray-900">
                      <Dashboard />
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="/products"
              element={
                <div className="flex min-h-screen">
                  <Sidebar />
                  <div className="flex-1">
                    <Header />

                    <div className="bg-gray-50 dark:bg-gray-900">
                      <Products />
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

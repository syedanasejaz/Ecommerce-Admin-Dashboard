import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/UseContext/ThemeContext";
import Button from "../Button/Button";
import LightModeIcon from "../../assets/icons/light-mode-icon";
import DarkModeIcon from "../../assets/icons/dark-mode-icon";

function Header({ isOpen }) {
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("user_role");
    navigate("/login");
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold dark:text-white">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
          <Button onClick={handleLogout} variant="outline" size="md">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

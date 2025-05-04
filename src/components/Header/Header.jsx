import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/UseContext/ThemeContext";
import Button from "../Button/Button";
import LightModeIcon from "../../assets/icons/light-mode-icon";
import DarkModeIcon from "../../assets/icons/dark-mode-icon";

function Header() {
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
        <h1 className="text-xl font-semibold dark:text-white"> Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              // Light mode icon
              <LightModeIcon />
            ) : (
              // Dark mode icon
              <DarkModeIcon />
            )}
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

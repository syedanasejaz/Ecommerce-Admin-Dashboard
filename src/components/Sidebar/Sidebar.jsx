import { Link, useLocation } from "react-router-dom";
import CartIcon from "../../assets/icons/cart-icon";
import DashboardIcon from "../../assets/icons/dashboard-icon";
import ProductIcon from "../../assets/icons/product-icon";

export default function Sidebar() {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <aside className="bg-primary dark:bg-gray-800 text-white w-64 min-h-screen p-6 flex flex-col shadow-lg">
      <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
        <CartIcon />
        Menu
      </h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
              isActive("/dashboard")
                ? "bg-white dark:bg-gray-700 text-primary dark:text-white font-semibold"
                : "bg-primary hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 text-white"
            }`}
          >
            <DashboardIcon />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
              isActive("/products")
                ? "bg-white dark:bg-gray-700 text-primary dark:text-white font-semibold"
                : "bg-primary hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 text-white"
            }`}
          >
            <ProductIcon />
            Products
          </Link>
        </li>
      </ul>
    </aside>
  );
}

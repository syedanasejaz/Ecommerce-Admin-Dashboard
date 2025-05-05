import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "../../assets/icons/cart-icon";
import DashboardIcon from "../../assets/icons/dashboard-icon";
import ProductIcon from "../../assets/icons/product-icon";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-20 p-2 rounded-lg bg-primary dark:bg-gray-800 text-white"
      >
        <svg
          className="w-6 h-6"
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
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static bg-primary dark:bg-gray-800 text-white w-64 min-h-screen p-4 sm:p-6 flex flex-col shadow-lg transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
          <CartIcon />
          Menu
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 p-2 sm:p-3 rounded-lg transition-all duration-200 text-sm sm:text-base ${
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
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 p-2 sm:p-3 rounded-lg transition-all duration-200 text-sm sm:text-base ${
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
    </>
  );
}

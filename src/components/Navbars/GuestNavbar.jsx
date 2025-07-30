import { Link } from "react-router-dom";

export default function GuestNavbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
        💊 Medishelf Monitor
      </Link>

      {/* Right Side */}
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 rounded-md text-sm font-medium border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

import { Link, useLocation } from "react-router-dom";
import { FiHome, FiPlusCircle, FiUser } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";

export default function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", icon: <FiHome />, path: "/dashboard" },
    { label: "Post Medicine", icon: <FiPlusCircle />, path: "/dashboard/your-medicines" },
    { label: "Messages", icon: <LuMessagesSquare />, path: "/dashboard/messages" },
    { label: "Profile", icon: <FiUser />, path: "/dashboard/profile" },
  ];

  return (
    <aside className="h-screen w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700 p-6 space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">💊 Medishelf</h2>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition 
              ${
                pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

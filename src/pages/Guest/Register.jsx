import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";

export default function Register() {
  const navigate = useNavigate();
  const { registerUser, loading, errors } = useUserStore();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      console.log(err?.response?.data?.error || "Registration failed");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 transition-all duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Create Account 📝
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Join Medishelf Monitor to share or find medicines
        </p>

        {errors && (
          <div className="mb-4 text-sm text-red-500 text-center">
            {typeof errors === "string" ? errors : "Registration failed."}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm mb-1 text-gray-700 dark:text-gray-300"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="john_doe"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-1 text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm mb-1 text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirm_password"
              className="block text-sm mb-1 text-gray-700 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              placeholder="••••••••"
              value={form.confirm_password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-medium transition ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            } text-white`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

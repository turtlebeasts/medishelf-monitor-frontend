import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useUserStore = create(
  persist(
    (set) => ({
      user: {},
      user_id: null,
      loading: false,
      errors: null,

      getUserDetails: async (id) => {
        try {
          set({ loading: true, errors: null });

          const res = await axios.get(`${BASE_URL}/profile/${id}/`, {
            withCredentials: true, // ✅ now in config, not in request body
          });

          set({ user: res.data, loading: false });
        } catch (err) {
          set({
            user: {},
            errors: err.response?.data || "Failed to fetch user",
            loading: false,
          });
        }
      },

      loginUser: async (credentials) => {
        try {
          set({ loading: true, errors: null });

          const res = await axios.post(`${BASE_URL}/login/`, credentials, {
            withCredentials: true,
          });

          set({ user_id: res.data.user_id, loading: false });

          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }

          return res.data.message;
        } catch (err) {
          set({ errors: err.response?.data || "Login failed", loading: false });
          throw err;
        }
      },

      registerUser: async (userData) => {
        try {
          set({ loading: true, errors: null });

          const res = await axios.post(`${BASE_URL}/register/`, userData);

          set({ loading: false });
          return res.data.message;
        } catch (err) {
          set({
            errors: err.response?.data || "Registration failed",
            loading: false,
          });
          throw err;
        }
      },

      logoutUser: async () => {
        try {
          await axios.post(`${BASE_URL}/logout/`, null, {
            withCredentials: true,
          });

          set({ user: {}, loading: false, errors: null });
          localStorage.removeItem("token");
        } catch (err) {
          set({
            errors: err.response?.data || "Logout failed",
            loading: false,
          });
        }
      },

      clearUser: () => set({ user: {}, loading: false, errors: null }),
    }),
    {
      name: "user-session", // key in sessionStorage
      storage: {
        getItem: (name) => {
          const value = sessionStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => sessionStorage.removeItem(name),
      },
    }
  )
);

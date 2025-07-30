import { create } from "zustand";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useUserStore = create((set) => ({
  user: {},
  loading: false,
  errors: null,

  getUserDetails: async (id) => {
    try {
      set({ loading: true, errors: null });

      const res = await axios.get(`${BASE_URL}/users/${id}`, {
        withCredentials: true,
      });

      set({ user: res.data, loading: false });
    } catch (err) {
      set({ user: {}, errors: err.response?.data || "Failed to fetch user", loading: false });
    }
  },

  loginUser: async (credentials) => {
    try {
      set({ loading: true, errors: null });

      const res = await axios.post(`${BASE_URL}/login/`, credentials, {
        withCredentials: true,
      });

      set({ user: res.data.user, loading: false });
    } catch (err) {
      set({ errors: err.response?.data || "Login failed", loading: false });
    }
  },

  registerUser: async (userData) => {
    try {
      set({ loading: true, errors: null });

      const res = await axios.post(`${BASE_URL}/register/`, userData, {
        withCredentials: true,
      });

      set({ user: res.data.user, loading: false });
    } catch (err) {
      set({ errors: err.response?.data || "Registration failed", loading: false });
    }
  },

  logoutUser: async () => {
    try {
      await axios.post(`${BASE_URL}/logout/`, null, {
        withCredentials: true,
      });

      set({ user: {}, loading: false, errors: null });
    } catch (err) {
      set({ errors: err.response?.data || "Logout failed", loading: false });
    }
  },

  clearUser: () => set({ user: {}, loading: false, errors: null }),
}));

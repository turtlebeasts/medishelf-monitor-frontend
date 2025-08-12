import axios from "axios";
import { create } from "zustand";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchStore = create((set) => ({
  results: [],
  loading: false,
  errors: null,
  fetchResults: async (searchQuery) => {
    try {
      set({ loading: true, errors: null });
      const res = await axios.get(`${BASE_URL}/posts/search?q=${searchQuery}`);
      set({ loading: false, results: res.data });
    } catch (err) {
      set({ loading: false, results: [], errors: err });
    }
  },
}));

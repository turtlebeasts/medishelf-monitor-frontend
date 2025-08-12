import axios from "axios";
import { create } from "zustand";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const usePostStore = create((set, get) => ({
  medicines: [],
  errors: null,
  loading: false,
  fetchMedicines: async () => {
    try {
      set({ loading: true, errors: null });
      const response = await axios.get(`${BASE_URL}/posts/all/`, {
        withCredentials: true,
      });
      set({ medicines: response.data, loading: false });
    } catch (errors) {
      console.log(errors);
      set({ medicines: [], loading: false, errors });
    }
  },
}));

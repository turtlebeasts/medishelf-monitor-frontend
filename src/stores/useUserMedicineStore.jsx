import axios from "axios";
import { create } from "zustand";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useUserMedicineStore = create((set, get) => ({
  userMedicines: [],
  loading: false,
  errors: null,

  fetchUserMedicines: async () => {
    try {
      set({ loading: true, errors: null });
      const response = await axios.get(`${BASE_URL}/posts/mine/`, {
        withCredentials: true,
      });
      set({ userMedicines: response.data, loading: false });
    } catch (errors) {
      set({ userMedicines: [], loading: false, errors });
    }
  },

  addMedicine: async (medicineData) => {
    try {
      set({ loading: true, errors: null });
      const res = await axios.post(`${BASE_URL}/posts/create/`, medicineData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      const newMedicine = res.data;

      set((state) => ({
        userMedicines: [...state.userMedicines, newMedicine.data],
        loading: false,
      }));
    } catch (error) {
      set({
        errors: error.response?.data || "Failed to add medicine",
        loading: false,
      });
    }
  },

  deleteMedicine: async (id) => {
    try {
      set({ loading: true, errors: null });

      await axios.delete(`${BASE_URL}/posts/delete/${id}/`, {
        withCredentials: true,
      });

      set((state) => ({
        userMedicines: state.userMedicines.filter(
          (medicine) => medicine.id !== id
        ),
        loading: false,
      }));
    } catch (error) {
      set({
        errors: error.response?.data || "Failed to delete medicine",
        loading: false,
      });
    }
  },

  resetUserMedicines: () => set({ userMedicines: [] }),
}));

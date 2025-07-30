import { create } from "zustand";

export const useUserMedicineStore = create((set, get) => ({
    userMedicines: [],
    loading: false,
    errors: null,
    fetchUserMedicines: async () => {
        try {
            set({ loading: true, errors: null })
            const myMedicines = [
                {
                    id: 101,
                    name: "Metformin 500mg",
                    quantity: "2 strips",
                    expiry: "2025-03",
                    image: "https://placehold.co/400",
                    owner: "You",
                },
                {
                    id: 102,
                    name: "Ibuprofen 400mg",
                    quantity: "1 strip",
                    expiry: "2024-11",
                    image: "https://placehold.co/400",
                    owner: "You",
                },
            ];
            set({ userMedicines: myMedicines, loading: false })
        } catch (errors) {
            set({ userMedicines: [], loading: false, errors: errors })
        }
    },
    resetUserMedicines: () => set({ userMedicines: [] }),
}))
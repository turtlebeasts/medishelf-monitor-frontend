import { create } from "zustand";

export const usePostStore = create((set, get) => ({
    medicines: [],
    errors: null,
    loading: false,
    fetchMedicines: async () => {
        try {
            set({errors: null, loading: true})
            const dummyPosts = [
                {
                    id: 1,
                    name: "Paracetamol 500mg",
                    quantity: "10 tablets",
                    expiry: "2025-12",
                    image: "https://placehold.co/400",
                    owner: "Rahul, Kolkata",
                },
                {
                    id: 2,
                    name: "Cetrizine",
                    quantity: "5 tablets",
                    expiry: "2024-10",
                    image: "https://placehold.co/400",
                    owner: "Anita, Delhi",
                },
                {
                    id: 3,
                    name: "Amoxicillin 250mg",
                    quantity: "1 strip",
                    expiry: "2026-01",
                    image: "https://placehold.co/400",
                    owner: "Vikas, Pune",
                },
            ]
            set({ medicines: dummyPosts, loading: false })
        } catch (error) {
            set({ errors: error, loading: false })
        }
    }
}))
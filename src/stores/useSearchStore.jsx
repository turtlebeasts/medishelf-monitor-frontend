import { create } from "zustand";

export const useSearchStore = create((set) => ({
    results: [],
    loading: false,
    errors: null,
    fetchResults: async (searchQuery) => {
        try {
            set({ loading: true, errors: null })
            // const res = await axios.get(`/api/medicines/search?q=${searchQuery}`);
            const res = {
                data: [
                    { id: 1, name: "Paracetamol 500mg" },
                    { id: 2, name: "Cetrizine" },
                    { id: 3, name: "Amoxicillin 250mg" },
                ].filter((item) =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                ),
            };
            set({ loading: false, results: res.data })
        } catch (err) {
            set({ loading: false, results: [], errors: err })
        }
    }
}))
import { useEffect } from "react";
import PostCard from "../../components/Cards/PostCard";
import { usePostStore } from "../../stores/usePostStore";
import SectionHeading from "../../components/SectionHeading";
import SearchAutocomplete from "../../components/SearchBar/SearchAutoComplete";

export default function DashboardHome() {

    const { medicines, fetchMedicines } = usePostStore()

    useEffect(() => {
        fetchMedicines()
    }, [])

    return (
        <div className="w-full">
            <div className="flex items-start justify-between py-2">
                <SectionHeading text={"Newly Posted Medicines"} />
                <SearchAutocomplete />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {medicines.map((med, key) => (<PostCard medicine={med} key={key} />))}
            </div>
        </div>
    );
}

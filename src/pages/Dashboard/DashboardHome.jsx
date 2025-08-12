import { useEffect } from "react";
import { usePostStore } from "../../stores/usePostStore";
import SectionHeading from "../../components/SectionHeading";
import SearchAutocomplete from "../../components/SearchBar/SearchAutoComplete";
import MedicineCard from "../../components/Cards/MedicineCard";

export default function DashboardHome() {
  const { medicines, fetchMedicines } = usePostStore();

  useEffect(() => {
    fetchMedicines();
  }, []);

  return (
    <div className="w-full pl-64">
      <div className="flex items-start justify-between py-2">
        <SectionHeading text={"Newly Posted Medicines"} />
        <SearchAutocomplete />
      </div>

      <div className="grid grid-cols-1 gap-6 px-40">
        {medicines.map((med, key) => (
          <MedicineCard medicine={med} key={key} />
        ))}
      </div>
    </div>
  );
}

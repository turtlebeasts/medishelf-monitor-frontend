import SectionHeading from "../../components/SectionHeading";
import PostCard from "../../components/Cards/PostCard";
import { useUserMedicineStore } from "../../stores/useUserMedicineStore";
import { useEffect } from "react";

export default function MyMedicines() {
  
    const {userMedicines, loading, fetchUserMedicines} = useUserMedicineStore()

    useEffect(()=>{
        fetchUserMedicines()
    },[])

  return (
    <div className="w-full">
      <SectionHeading text="Medicines You've Posted" />

      {!loading && userMedicines.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          You haven't posted any medicines yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {userMedicines.map((med) => (
            <PostCard key={med.id} medicine={med} />
          ))}
        </div>
      )}
    </div>
  );
}

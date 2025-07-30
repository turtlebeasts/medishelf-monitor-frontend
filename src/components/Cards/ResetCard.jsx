import { useUserMedicineStore } from "../../stores/useUserMedicineStore";

export default function ResetPostHistoryButton() {
  const { resetUserMedicines } = useUserMedicineStore();

  const handleReset = () => {
    const confirm = window.confirm("Are you sure you want to delete your post history?");
    if (confirm) {
      resetUserMedicines();
      alert("Your post history has been cleared.");
    }
  };

  return (
    <button
      onClick={handleReset}
      className="px-4 py-2 mt-6 bg-red-600 text-white rounded hover:bg-red-700 transition"
    >
      🗑️ Reset Post History
    </button>
  );
}

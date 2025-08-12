import { useUserMedicineStore } from "../stores/useUserMedicineStore";

export default function ConfirmDeleteForm({ onClose, item }) {
  const { deleteMedicine } = useUserMedicineStore();
  const handleDelete = () => {
    deleteMedicine(item.id);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Confirm Deletion
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Are you sure you want to delete{" "}
          <span className="font-bold">{item.title}</span>? This action cannot be
          undone.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

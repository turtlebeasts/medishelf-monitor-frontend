import ConfirmDeleteForm from "../../forms/ConfirmDeleteForm";
import { useUserStore } from "../../stores/useUserStore";
import SimpleModal from "../Modals/SimpleModal";

export default function PostCard({ medicine }) {
  const { user_id } = useUserStore();
  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
      <img
        src={medicine.image}
        alt={medicine.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{medicine.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          Expiry Date: {medicine.expiry_date}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Description: {medicine.description}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Posted on: {new Date(medicine.created_at).toLocaleDateString()}
        </p>
        <div className="flex justify-between">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            View / Buy
          </button>
          {user_id == medicine.user && (
            <SimpleModal buttonLabel={"Delete"} color="red">
              {({ closeModal }) => (
                <ConfirmDeleteForm onClose={closeModal} item={medicine} />
              )}
            </SimpleModal>
          )}
        </div>
      </div>
    </div>
  );
}

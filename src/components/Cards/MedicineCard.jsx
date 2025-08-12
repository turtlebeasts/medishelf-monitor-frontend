export default function MedicineCard({ medicine }) {
  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="md:w-2/3 w-full">
        <img
          src={medicine.image}
          alt={medicine.title}
          className="w-full h-48 md:h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col justify-between md:w-2/3 w-full">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {medicine.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            <span className="font-semibold">Posted by:</span>{" "}
            {medicine.username}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            {medicine.description}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Expiry Date:</span>{" "}
            {new Date(medicine.expiry_date).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Created At:</span>{" "}
            {new Date(medicine.created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

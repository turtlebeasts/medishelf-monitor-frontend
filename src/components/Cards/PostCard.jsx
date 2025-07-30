export default function PostCard({ medicine }) {
  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
      <img
        src={medicine.image}
        alt={medicine.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{medicine.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Quantity: {medicine.quantity}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Expiry: {medicine.expiry}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Owner: {medicine.owner}
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          View / Buy
        </button>
      </div>
    </div>
  );
}

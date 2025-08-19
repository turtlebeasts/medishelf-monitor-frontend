import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function MedicineView() {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/posts/detail/${id}/`);
        setMedicine(res.data);
      } catch (err) {
        setError("Failed to load medicine details");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicine();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (!medicine) {
    return <p className="text-center mt-10">Medicine not found</p>;
  }

  return (
    <div className="w-full mx-auto pl-64">
      <div className="flex flex-col md:flex-row bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Image */}
        <div className="md:w-1/2 relative">
          <img
            src={medicine.image}
            alt={medicine.title}
            className="w-full h-72 md:h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-gray-900/70 text-white text-xs px-3 py-1 rounded-full">
            Exp: {new Date(medicine.expiry_date).toLocaleDateString()}
          </div>
        </div>

        {/* Details */}
        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
              {medicine.title}
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="font-semibold">By:</span>{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                {medicine.username}
              </span>
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {medicine.description}
            </p>
          </div>

          {/* Footer Info */}
          <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <span>
              <span className="font-semibold">Posted:</span>{" "}
              {new Date(medicine.created_at).toLocaleString()}
            </span>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

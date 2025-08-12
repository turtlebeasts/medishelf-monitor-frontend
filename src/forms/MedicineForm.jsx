import { useState } from "react";
import { useUserMedicineStore } from "../stores/useUserMedicineStore";

export default function MedicineForm({ closeModal }) {
  const [title, setTitle] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { addMedicine } = useUserMedicineStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !expiryDate || !image || !description) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("expiry_date", expiryDate);
    formData.append("image", image);
    formData.append("description", description);

    try {
      await addMedicine(formData);
      closeModal();

      // Optionally clear form or notify success here
    } catch (err) {
      setError(err.message || "Failed to post medicine");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="rounded-lg max-w-md mx-auto text-gray-900"
    >
      {error && (
        <div className="mb-6 px-4 py-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <h1 className="text-2xl mb-5">Post a medicine</h1>
      <div className="mb-5">
        <label htmlFor="title" className="block text-sm font-semibold mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter medicine title"
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="expiry_date"
          className="block text-sm font-semibold mb-1"
        >
          Expiry Date
        </label>
        <input
          id="expiry_date"
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="image" className="block text-sm font-semibold mb-1">
          Image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-sm font-semibold mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add description about the medicine"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition ${
          loading ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Posting..." : "Post Medicine"}
      </button>
    </form>
  );
}

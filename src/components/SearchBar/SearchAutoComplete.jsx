import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import debounce from "lodash.debounce"; // run: npm i lodash.debounce
import { useSearchStore } from "../../stores/useSearchStore";

export default function SearchAutocomplete() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null)

  const {results, fetchResults, loading} = useSearchStore()

  const debouncedSearch = debounce((val) => {
    if (val.trim().length > 0) {
      fetchResults(val);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, 300);

  useEffect(() => {
    if(!selectedMedicine){
      debouncedSearch(query);
    }
    return () => debouncedSearch.cancel();
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Search medicines..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {showDropdown && (
        <div className="absolute mt-1 left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-50 max-h-60 overflow-auto">
          {loading ? (
            <div className="px-4 py-2 text-sm text-gray-500">Searching...</div>
          ) : results.length === 0 ? (
            <div className="px-4 py-2 text-sm text-gray-500">No results found.</div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer text-sm"
                onClick={() => {
                  setQuery(item.name);
                  setSelectedMedicine(item)
                  setShowDropdown(false);
                  console.log("Selected:", item);
                }}
              >
                {item.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

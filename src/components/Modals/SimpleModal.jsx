import { useState } from "react";

export default function SimpleModal({
  buttonLabel,
  color = "green",
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className={`px-4 py-2 bg-${color}-600 text-white rounded hover:bg-${color}-700`}
      >
        {buttonLabel}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-700 hover:text-gray-900 font-bold text-xl"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Render whatever is passed as children */}
            {children({ closeModal })}
          </div>
        </div>
      )}
    </>
  );
}

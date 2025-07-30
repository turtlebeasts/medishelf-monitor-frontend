export default function ChatWindow({ messages, loading }) {
  return (
    <div className="flex-1 flex flex-col justify-between bg-white dark:bg-gray-800">
      <div className="p-4 border-b dark:border-gray-700 font-semibold text-gray-800 dark:text-white">
        Chat
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {loading ? (
          <div className="text-gray-500 dark:text-gray-400">Loading messages...</div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.from === "you"
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white self-start"
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>

      <div className="border-t dark:border-gray-700 p-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full px-4 py-2 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none"
        />
      </div>
    </div>
  );
}

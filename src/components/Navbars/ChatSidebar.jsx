import { useNavigate } from "react-router-dom";

export default function ChatSidebar() {
  const navigate = useNavigate();

  const conversations = [
    { id: "123", name: "Rahul Sharma", lastMessage: "Hey, is it still available?" },
    { id: "456", name: "Anita Das", lastMessage: "Thanks for the medicine!" },
    { id: "789", name: "Vikas", lastMessage: "How many strips left?" },
  ];

  return (
    <aside className="w-1/3 sm:w-1/4 bg-gray-100 dark:bg-gray-900 border-r dark:border-gray-700 overflow-y-auto">
      <h2 className="text-lg font-semibold p-4 border-b dark:border-gray-700">Chats</h2>
      <ul>
        {conversations.map((chat) => (
          <li
            key={chat.id}
            onClick={() => navigate(`/dashboard/messages/${chat.id}`)}
            className="px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
          >
            <div className="font-medium text-gray-800 dark:text-white">{chat.name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 truncate">{chat.lastMessage}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

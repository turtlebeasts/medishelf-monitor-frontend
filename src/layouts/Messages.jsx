import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ChatSidebar from "../components/Navbars/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import { useChatStore } from "../stores/useChatStore";

export default function Messages() {
  const { conversationId } = useParams();
  const { setActiveConversation, fetchConversation, conversations, loading } =
    useChatStore();

  useEffect(() => {
    if (conversationId) {
      setActiveConversation(conversationId);
      fetchConversation(conversationId);
    }
  }, [conversationId]);

  const messages = conversations[conversationId] || [];

  return (
    <div className="w-full h-[calc(100vh-64px)] flex border dark:border-gray-700 rounded-md overflow-hidden pl-64">
      <ChatSidebar />

      {conversationId ? (
        <ChatWindow messages={messages} loading={loading} />
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
          Select a conversation to start chatting.
        </div>
      )}
    </div>
  );
}

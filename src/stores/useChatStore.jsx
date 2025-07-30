import { create } from "zustand";
import axios from "axios";

export const useChatStore = create((set, get) => ({
  conversations: {},
  activeConversationId: null,
  loading: false,
  errors: null,

  setActiveConversation: (id) => set({ activeConversationId: id }),

  fetchConversation: async (id) => {
    const { conversations } = get();

    if (conversations[id]) return

    try {
      set({ loading: true, errors: null });


      const dummyMessages = [
        { id: 1, from: "Rahul", to: "you", text: "Hey, is this medicine available?", time: "12:00" },
        { id: 2, from: "you", to: "Rahul", text: "Yes, it is.", time: "12:01" },
        { id: 3, from: "Rahul", to: "you", text: "Awesome!", time: "12:02" },
      ];

      set((state) => ({
        conversations: {
          ...state.conversations,
          [id]: dummyMessages,
        },
        loading: false,
      }));
    } catch (err) {
      set({ loading: false, errors: err });
    }
  },

  appendMessage: (id, newMessage) => {
    const { conversations } = get();

    if (!conversations[id]) return;

    set({
      conversations: {
        ...conversations,
        [id]: [...conversations[id], newMessage],
      },
    });
  },

  resetConversations: () => set({ conversations: {}, activeConversationId: null }),
}));

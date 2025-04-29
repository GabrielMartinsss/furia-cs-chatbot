'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface ChatContextType {
  quickMessage: null | string;
  setQuickMessage: (message: string | null) => void;
}
const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatContextProviderProps {
  children: ReactNode;
}
export function ChatProvider({ children }: ChatContextProviderProps) {
  const [quickMessage, setQuickMessage] = useState<null | string>(null);

  return (
    <ChatContext.Provider value={{ quickMessage, setQuickMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}
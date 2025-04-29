import { ChatProvider } from "@/context/chat-context";

export default function Home() {
  return (
    <main>
      <ChatProvider>
        <div></div>
      </ChatProvider>
    </main>
  );
}

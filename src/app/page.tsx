import { QuickMessages } from "@/components/quick-messages";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatProvider } from "@/context/chat-context";

export default function Home() {
  return (
    <main className="h-screen lg:grid grid-cols-[max-content_minmax(300px,_1fr)]">
      <ChatProvider>
        <div className="hidden lg:flex bg-stone-900">
          <ScrollArea className="">
            <QuickMessages />

          </ScrollArea>
        </div>
      </ChatProvider>
    </main>
  );
}

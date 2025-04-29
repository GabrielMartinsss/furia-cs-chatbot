import { QuickMessages } from "@/components/quick-messages";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
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

        <div>
        <header className="flex justify-between items-end p-4 border-b border-stone-700">
            <h1 className="font-bold text-2xl">Furia CS chatbot</h1>
            <span className="hidden lg:inline-block text-sm text-stone-500 ">Vers: 0.0.1</span>
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-96">
                  <QuickMessages />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
        </div>
      </ChatProvider>
    </main>
  );
}

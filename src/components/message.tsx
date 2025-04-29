import Markdown from "react-markdown";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MessageProps {
  message: string;
  role: string;
  position: "left" | "right";
}
export function Message({message, role, position}: MessageProps) {
  return (
    <div className={`flex gap-5 items-start ${position === "right" ? "justify-end" : "justify-start"} mb-5`}>
      { position === "left" && (
         <Avatar>
          <AvatarFallback>BT</AvatarFallback>
          <AvatarImage src="/Furia_Esports_logo.png" alt="logo da furia" />
        </Avatar>
      )}
      <div className={`max-w-3/4 ${role === "user" ? "bg-stone-700 p-2 rounded-md" : "prose text-stone-100 prose-strong:text-stone-50 prose-headings:text-stone-100"}`}>
        { role === "assistant" ? (<Markdown>{ message }</Markdown>) : <p className="text-stone-100">{ message }</p>}
      </div>
      { position === "right" && (
        <Avatar>
          <AvatarFallback>US</AvatarFallback>
          <AvatarImage src="/user.png" />
        </Avatar>
      )}
    </div>
  )
}
'use client'

import { useChat } from '@ai-sdk/react'

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useChatContext } from '@/context/chat-context';
import { useEffect } from 'react';
import { Message } from './message';
import { LoadSpinner } from './load-spinner';

export function Chat() {
  const { messages, input, setInput, handleInputChange, handleSubmit, status, error, reload  } = useChat({})
  const { quickMessage, setQuickMessage } = useChatContext();

  useEffect(() => {
    if (quickMessage){
      setInput(quickMessage);
      setQuickMessage(null);
    }
  }, [quickMessage, setQuickMessage]);

  return (
    <Card className="flex min-w-sm md:w-full xl:w-3/4 bg-stone-800 shadow-none text-stone-100 border-0 mx-auto">
      <CardContent>
        <ScrollArea className="h-[calc(100vh_-_180px)] pr-5">
          <div className="space-y-12">
            {messages.map((message) => {
              return <Message key={message.id} message={message.content} role={message.role} position={message.role === 'user' ? 'right' : 'left'} />
            })}
            {(status === 'submitted' || status === 'streaming') && (
              <div>
                {status === 'submitted' && <LoadSpinner />}
              </div>
            )}
            {error && (
              <>
                <span className='text-sm text-red-400 inline-block mr-4'>Ocorreu um erro!</span>
                <Button type='button' onClick={() => reload()}>Tentar novamente</Button>
              </>
            )}            
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form id='chatbot' className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input autoFocus value={input} onChange={handleInputChange} /> 
          <Button type='submit' disabled={status !== 'ready'} className="bg-stone-900 disabled:bg-stone-900/70">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
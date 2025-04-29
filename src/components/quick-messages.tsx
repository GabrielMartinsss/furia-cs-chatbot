'use client'

import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Milestone, Info, Target } from 'lucide-react';
import { useChatContext } from "@/context/chat-context";

export function QuickMessages() {
  const { setQuickMessage } =  useChatContext();

  function handleQuickMessage(message: string) {
    setQuickMessage(message);
  }

  return (
    <nav className="bg-stone-900 py-4 max-w-96 h-screen">
      <div className="flex items-end gap-2 px-5 pb-4 text-stone-200 border-b border-stone-800">
        <h2 className="font-bold text-2xl">Perguntas rápidas</h2>
        <Target className="size-6" />
      </div>
      <div className="p-4 space-y-6">
        {quickMessages.map(item => {
          return (
            <div key={item.icon} className="space-y-4 ">
              <h2 className="text-normal text-stone-100 font-bold flex items-center gap-2">
                {item.icon === "info" && <Info className="size-5" />} 
                {item.icon === "map" && <Milestone className="size-5"/>}
                {item.icon === "furia" && (
                  <Avatar className="size-5">
                    <AvatarFallback>BT</AvatarFallback>
                    <AvatarImage src="/Furia_Esports_logo.png" alt="logo da furia" />
                  </Avatar>
                )}
                {item.category}
              </h2>
              {item.messages.map((message, index) => {
                return (
                  <Button key={index} variant="secondary" onClick={() => handleQuickMessage(message.content)}>
                    {message.title}
                  </Button>
                )
              } )}    
            </div>
          )
        })}    
      </div>   
    </nav>
  );
}

interface QuickMessagesProps {
  category: string;
  icon: "info" | "map" | "furia";
  messages: Record<string, string>[];  
}

const quickMessages: QuickMessagesProps[] = [
  { category: "Informações Gerais", 
    icon: "info",
    messages: [
      {
        title: "Regras básicas e modos de jogo.",
        content: "Explique de forma clara e objetiva as regras básicas do jogo Counter-Strike (CS) e descreva os principais modos de jogo, incluindo Casual, Competitivo, Danger Zone, Wingman, entre outros. Para cada modo, forneça uma breve descrição de como funciona, o objetivo principal e o que o diferencia dos demais."
      },
      {
        title: "Glossário de termos.",
        content: "Crie um glossário completo com os principais termos utilizados no jogo Counter-Strike (CS). Para cada termo, forneça: - O nome do termo. - Uma definição clara e resumida. Inclua termos como: eco, clutch, lurker, entry fragger, IGL, default, fake, entry kill, save, entre outros termos comuns no cenário competitivo e casual. Organize o glossário de forma que fique fácil de ler e entender."
      },
    ]
  },
  { category: "Guias de Mapas & Táticas", 
    icon: "map",
    messages: [
      {
        title: "Callouts de mapas populares",
        content: "Liste e descreva os principais callouts dos mapas mais populares de Counter-Strike (CS), como Dust II, Mirage, Inferno, Nuke e Overpass. Para cada mapa, apresente os callouts mais importantes, explicando brevemente a localização e a utilidade de cada área."
      },
      {
        title: "Smokes, flashes e molotovs.",
        content: "Explique e liste as principais smokes, flashes e molotovs usadas em Counter-Strike (CS) nos mapas populares. Para cada utilitário, indique a posição de onde deve ser lançado, o local de destino e em quais situações táticas ele é mais utilizado."
      },
      {
        title: "Setups de CT/ TR para cada mapa.",
        content: "Descreva setups comuns de CT e TR para os mapas mais populares de Counter-Strike (CS), como Dust II, Mirage, Inferno e Nuke. Para cada mapa, forneça exemplos de posicionamentos, funções dos jogadores e estratégias iniciais usadas por cada lado."
      },
    ]
  },
  { category: "Furia CS",
    icon: "furia",
    messages: [
      {
        title: "História do time.",
        content: "Conte a história da equipe de Counter-Strike (CS) da FURIA, incluindo sua fundação, evolução no cenário competitivo, principais conquistas e momentos marcantes."
      },
      {
        title: "Time atual.",
        content: "Liste os jogadores atuais da equipe de Counter-Strike (CS) da FURIA, incluindo as posições que cada jogador exerce e o coach atual se houver."
      },
      {
        title: "Maiores conquistas.",
        content: "Liste as principais conquistas da equipe de Counter-Strike (CS) da FURIA em campeonatos importantes, indicando o nome do torneio, o ano e a colocação alcançada."
      },
      {
        title: "Mudanças de line-up importantes.",
        content: "Liste as mudanças mais relevantes na line-up de jogadores da equipe de Counter-Strike (CS) da FURIA ao longo dos anos, mencionando quais jogadores saíram, entraram e o impacto dessas mudanças."
      }
    ]
  }
]


'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { parseICS } from "@/lib/parseIcs";
import CalendarComponent from "@/components/Calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

type Event = {
  title: string;
  start: Date;
  end: Date;
  [key: string]: any;
};

type CalendarComponentProps = {
  events: Event[];
};

function Navbar({ option, setOption }: { option: 'dev' | 'reseaux', setOption: (o: 'dev' | 'reseaux') => void }) {
  return (
    <nav className="w-full bg-white/80 dark:bg-zinc-900/80 shadow flex items-center justify-between px-6 py-3 mb-8 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 bg-blue-100">
          <AvatarImage src="/calendar.svg" alt="Calendrier" />
          <AvatarFallback>📅</AvatarFallback>
        </Avatar>
        <span className="text-xl font-bold text-blue-700 dark:text-blue-300">Mon calendrier scolaire</span>
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="px-4 py-2 rounded-lg font-semibold border bg-white text-blue-700 border-blue-700 dark:bg-zinc-900 dark:text-blue-300">
              {option === 'dev' ? 'Développement' : 'Réseaux'}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setOption('dev')}>Développement</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOption('reseaux')}>Réseaux</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [option, setOption] = useState<'dev' | 'reseaux'>('dev');

  useEffect(() => {
    const fetchICS = async () => {
      try {
        const res = await axios.get(`/api/ical?option=${option}`);
        const parsed = parseICS(res.data.data);
        setEvents(parsed);
      } catch (err) {
        console.error("Erreur ICS:", err);
      }
    };
    fetchICS();
  }, [option]);

  return (
    <div>
      <Navbar option={option} setOption={setOption} />
      <main className="min-h-screen p-4 flex flex-col items-center justify-start">
        <Card className="w-full max-w-5xl bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-2xl">
          <CardContent className="p-4">
            <CalendarComponent events={events} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

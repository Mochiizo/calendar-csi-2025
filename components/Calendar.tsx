// components/Calendar.tsx
import { Calendar as ShadCalendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

// Palette de couleurs par matière
const matiereColors: Record<string, string> = {
  "Administration Hébergement Web": "bg-blue-900",
  "Administration Système et Virtualisation": "bg-gray-700",
  "Anglais": "bg-green-400 text-black",
  "Architecture d'Application": "bg-purple-700",
  "Base de données": "bg-yellow-600 text-black",
  "Base de données - Administration": "bg-yellow-800",
  "Base du réseau": "bg-cyan-700",
  "Clés de la réussite": "bg-pink-400 text-black",
  "Communication": "bg-orange-400 text-black",
  "Cybersécurité": "bg-red-700",
  "Développement Back end": "bg-blue-600",
  "Développement Front end": "bg-blue-400 text-black",
  "Développement orienté objet": "bg-indigo-700",
  "Développement sur mobile": "bg-teal-600",
  "Droit informatique": "bg-gray-900",
  "Ergonomie": "bg-pink-700",
  "Gestion": "bg-lime-600 text-black",
  "Gestion de projet": "bg-amber-700",
  "Gestion du Code Source": "bg-gray-500",
  "Gestion du système d'information": "bg-emerald-700",
  "Gestion Poste Client": "bg-slate-700",
  "Langages du WEB": "bg-blue-300 text-black",
  "Méthode UML": "bg-fuchsia-700",
  "Méthodologie de rédaction de mémoire": "bg-rose-700",
  "Missions en entreprise": "bg-amber-400 text-black",
  "Préparation soutenance": "bg-violet-700",
  "Projets": "bg-cyan-400 text-black",
  "Python": "bg-green-700",
  "Rentrée": "bg-gray-300 text-black",
  "Réseaux étendus, haute disponibilité et sécurité": "bg-cyan-900",
  "Réseaux informatiques": "bg-cyan-600",
  "Scripting Système": "bg-zinc-700",
  "Soutenance": "bg-violet-900",
  "Veille technologique": "bg-orange-700",
};

type Event = {
  title: string;
  start: Date;
  end: Date;
  matiere?: string;
  location?: string;
  [key: string]: any;
};

export default function CalendarComponent({ events }: { events: Event[] }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  // Filtrer les événements du jour sélectionné
  const eventsOfDay = events.filter(ev =>
    moment(ev.start).isSame(date, 'day')
  );

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 bg-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-800">
        <div className="flex flex-col items-center">
          <ShadCalendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-xl border border-zinc-700 bg-zinc-800 text-white shadow-md"
            month={date}
          />
        </div>
        <div className="flex-1 min-w-[260px] flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-white text-center md:text-left">Cours du {moment(date).format('dddd D MMMM YYYY')}</h2>
          {eventsOfDay.length === 0 ? (
            <p className="text-zinc-400 text-center">Aucun cours ce jour-là.</p>
          ) : (
            <ul className="space-y-4">
              {eventsOfDay.map((ev, i) => (
                <li key={i} className="flex items-center gap-4 bg-zinc-800 rounded-lg p-4 shadow border border-zinc-700">
                  <Badge className={matiereColors[ev.matiere ?? 'Autre'] + ' text-white text-base px-3 py-1'}>
                    {ev.matiere ?? 'Autre'}
                  </Badge>
                  <div>
                    <div className="font-semibold text-white text-lg">{ev.title}</div>
                    {ev.location && (
                      <div className="text-blue-300 text-sm font-medium">{ev.location}</div>
                    )}
                    <div className="text-zinc-300 text-sm">
                      {moment(ev.start).format('HH:mm')} - {moment(ev.end).format('HH:mm')}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* Légende */}
      {/* <div className="flex flex-wrap gap-4 justify-center mt-2 w-full max-w-3xl">
        {Object.entries(matiereColors).map(([matiere, color]) => (
          <Badge key={matiere} className={color + ' text-base px-3 py-1'}>
            {matiere}
          </Badge>
        ))}
      </div> */}
    </div>
  );
}

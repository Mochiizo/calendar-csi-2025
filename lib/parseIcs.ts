import ICAL from 'ical.js';

const MATIERES = [
  "Administration Hébergement Web",
  "Administration Système et Virtualisation",
  "Anglais",
  "Architecture d'Application",
  "Base de données",
  "Base de données - Administration",
  "Base du réseau",
  "Clés de la réussite",
  "Communication",
  "Cybersécurité",
  "Développement Back end",
  "Développement Front end",
  "Développement orienté objet",
  "Développement sur mobile",
  "Droit informatique",
  "Ergonomie",
  "Gestion",
  "Gestion de projet",
  "Gestion du Code Source",
  "Gestion du système d'information",
  "Gestion Poste Client",
  "Langages du WEB",
  "Méthode UML",
  "Méthodologie de rédaction de mémoire",
  "Missions en entreprise",
  "Préparation soutenance",
  "Projets",
  "Python",
  "Rentrée",
  "Réseaux étendus, haute disponibilité et sécurité",
  "Réseaux informatiques",
  "Scripting Système",
  "Soutenance",
  "Veille technologique"
];

export function parseICS(ics: string) {
  const jcalData = ICAL.parse(ics);
  const comp = new ICAL.Component(jcalData);
  const vevents = comp.getAllSubcomponents("vevent");

  return vevents.map((vevent) => {
    const event = new ICAL.Event(vevent);
    const title = event.summary;
    // Détection automatique de la matière
    const matiere = MATIERES.find(m => title && title.toLowerCase().includes(m.toLowerCase())) || "Autre";
    return {
      title: event.summary,
      start: event.startDate.toJSDate(),
      end: event.endDate.toJSDate(),
      location: event.location,
      description: event.description,
      matiere,
    };
  });
}

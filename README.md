# ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) ![Vercel](https://img.shields.io/badge/Deploy%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)

# calendar-csi-2025

## Description du projet
calendar-csi-2025 est une application de calendrier développée avec Next.js et TypeScript, conçue pour offrir une interface utilisateur intuitive et dynamique pour la gestion d'événements. Ce projet permet aux utilisateurs d'afficher et d'interagir avec des calendriers, tout en intégrant des fonctionnalités avancées telles que l'importation d'événements via des fichiers ICS.

### Fonctionnalités clés
- Affichage d'un calendrier interactif
- Importation d'événements à partir de fichiers ICS
- Interface utilisateur réactive et moderne
- Thèmes personnalisables

## Tech Stack
| Technologie      | Description                                         |
|------------------|-----------------------------------------------------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) | Framework React pour le rendu côté serveur |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Superset de JavaScript pour des applications plus robustes |
| ![Vercel](https://img.shields.io/badge/Deploy%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white) | Plateforme de déploiement pour les applications Next.js |

## Instructions d'installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou pnpm

### Étapes d'installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Mochiizo/calendar-csi-2025.git
   cd calendar-csi-2025
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```
   ou si vous utilisez pnpm :
   ```bash
   pnpm install
   ```

3. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```
   ou avec pnpm :
   ```bash
   pnpm dev
   ```

4. Ouvrez votre navigateur et accédez à `http://localhost:3000`.

## Utilisation
Une fois le projet démarré, vous pouvez interagir avec le calendrier directement dans votre navigateur. Pour importer des événements, utilisez l'API fournie pour traiter les fichiers ICS.

## Structure du projet
Voici un aperçu de la structure du projet :

```
calendar-csi-2025/
├── app/
│   ├── api/                  # Endpoints API
│   │   └── ical/            # Gestion des fichiers ICS
│   │       └── route.ts
│   ├── favicon.ico           # Icône de l'application
│   ├── globals.css           # Styles globaux
│   ├── layout.tsx            # Mise en page principale
│   └── page.tsx              # Page d'accueil
├── components/               # Composants React
│   ├── ui/                   # Composants UI réutilisables
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── separator.tsx
│   ├── Calendar.tsx          # Composant principal du calendrier
│   ├── mode-toggle.tsx       # Composant pour changer de mode (jour/nuit)
│   └── theme-provider.tsx     # Gestion des thèmes
├── lib/                      # Bibliothèque utilitaire
│   ├── parseIcs.ts          # Fonction pour parser les fichiers ICS
│   └── utils.ts             # Fonctions utilitaires
├── public/                   # Ressources publiques
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore                # Fichiers à ignorer par Git
├── components.json           # Configuration des composants
├── eslint.config.mjs         # Configuration ESLint
├── next.config.ts            # Configuration Next.js
├── package-lock.json         # Gestion des versions des dépendances
├── package.json              # Dépendances du projet
├── pnpm-lock.yaml            # Gestion des versions pour pnpm
├── postcss.config.mjs        # Configuration PostCSS
├── README.md                 # Documentation du projet
└── tsconfig.json             # Configuration TypeScript
```

### Explication des principaux fichiers et répertoires
- **app/** : Contient les fichiers principaux de l'application, y compris l'API et les pages.
- **components/** : Regroupe les composants React, y compris les composants réutilisables et spécifiques au calendrier.
- **lib/** : Contient des fonctions utilitaires et des parseurs pour les fichiers ICS.
- **public/** : Contient des ressources statiques accessibles publiquement.

## Contribuer
Les contributions sont les bienvenues ! Pour contribuer, veuillez suivre ces étapes :
1. Forkez le projet.
2. Créez votre branche (`git checkout -b feature/YourFeature`).
3. Commitez vos modifications (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/YourFeature`).
5. Ouvrez une Pull Request.

Merci de contribuer à ce projet !

# Fit On The Road – Rapport d’audit (21 février 2026)

## Aperçu rapide
- Vitrine React 18 + TypeScript (Vite) avec Material UI et un peu de Tailwind.  
- Routage généré automatiquement via `generouted` à partir de `src/pages`.  
- Pages principales : accueil (`src/pages/index.tsx`), entreprises, particuliers, about, terms (toutes enveloppées par le layout `_app.tsx` qui injecte l’`AppBar` et le `Footer`).  
- Thème MUI forcé en mode sombre via `src/styles/theme-material/style.ts` (les fichiers light/dark CSS importés dans `src/styles/index.css` semblent inutilisés).  
- Aucune suite de tests implémentée (script `test` présent mais aucun fichier de test repéré).

## Points forts
- Structure claire et homogène des sections (Hero/Features/Pricing/Testimonials/FAQ/Contact).  
- Navigation sticky avec ancrages sectionnels et fallback drawer mobile.  
- Contenu éditorial riche, déjà décliné entreprises vs particuliers.  
- Palette cohérente (rouge primaire, accents bruns) et typographie personnalisée Proxima Nova.

## Problèmes et risques détectés (état courant)
- **Consentement** : tarteaucitron chargé depuis `public/assets/js`, icône remplacée par le favicon rouge; vérifier en prod que la bannière s’affiche bien et que GTM est conditionné au consentement.  
- **Sémantique/SEO** : h1/h2/h3 corrigés, OG/Twitter ajoutés, id `contact` dédoublé résolu; reste à ajouter des clés uniques partout (fait), et compléter les balises `alt` si besoin.  
- **Formulaire de contact** : validation email/message et retour utilisateur (succès/erreur) ajoutés, mais l’envoi reste un POST Google Forms sans confirmation serveur; prévoir un petit endpoint si besoin de fiabiliser.  
- **Performance médias** : variantes WebP générées et `loading="lazy"` + dimensions ajoutées; les JPEG lourds restent en fallback (à compresser ou remplacer par AVIF si nécessaire).  
- **Qualité/maintenance** : husky pré-commit `npm run lint`, workflow CI (lint + tests Vitest) prêt mais push GitHub bloqué sans scope `workflow`; premiers tests smoke Vitest en place.

## Actions rapides recommandées
1) **Consentement** : vérifier en prod l’affichage tarteaucitron (icône rouge ok), s’assurer du déclenchement GTM post-consentement uniquement.  
2) **Sémantique/SEO** : revérifier l’unicité des h1 par page, compléter les `alt` descriptifs restants, ajouter si besoin OG image dédiée.  
3) **Médias** : compresser ou convertir en AVIF les JPEG fallback lourds (>600 kB) pour réduire le first load.  
4) **Formulaire** : migrer vers un endpoint (serverless/SMTP) pour obtenir un vrai statut retour et éviter les limites Google Forms.  
5) **Outillage** : activer la CI GitHub (push nécessitant un PAT avec scope `workflow`), étendre les tests Vitest (routing + sections clés).  
6) **Tarteaucitron** : icône rouge appliquée via `iconSrc` = `/favicon/favicon-kettle-red.png`; si besoin de recolorer plus finement le sprite, éditer `public/assets/js/tarteaucitronjs/css/tarteaucitron.css` ou remplacer l’image base64 dans `tarteaucitron.js`.

## Structure à connaître
- Layout global : `src/pages/_app.tsx` (AppBar + Footer + ThemeProvider).  
- Landing : `src/pages/index.tsx` avec sections `Hero`, `EnterpriseFeatures`, `IndividualFeatures`, `Video`, `Highlights`, `Pricing`, `Testimonials`, `FAQ`, `Contact`, `PhoneApp`.  
- Pages dédiées : `src/pages/entreprises.tsx`, `src/pages/particuliers.tsx`, `src/pages/about-us.tsx`, `src/pages/terms.tsx`.  
- Styles : `src/styles/index.css` (imports Tailwind + font-face), thème MUI dans `src/styles/theme-material/style.ts`.  
- Assets : nombreuses images sous `src/assets/images`, polices Proxima Nova sous `src/assets/fonts`.

## Pistes d’évolution ultérieure
- Mettre en place une PWA légère (manifest + icônes + offline shell limité).  
- Ajouter une section “planning des cours” alimentée par une source dynamique (React Query déjà listé en dépendance).  
- Factoriser les répétitions de composants cartes/sections (Enterprise/Individual cards très similaires).
- Optimiser le site internet fit-ontheroad.fr (perf, SEO, accessibilité et tracking conforme).

*Rapport généré automatiquement; n’hésitez pas à demander un focus détaillé sur une section ou un plan d’actions priorisé.* 

## Note de maintenance
- Lors de toute modification du projet Fit-On-The-Road_V2, mettre à jour ce `README.md` si nécessaire.

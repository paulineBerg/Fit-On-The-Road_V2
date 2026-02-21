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

## Problèmes et risques détectés
- **Bannière cookies inopérante** : `index.html` charge `/assets/js/tarteaucitronjs/advertising.js` qui n’existe pas dans le repo, et `src/assets/js/tarteaucitronInit.js` contient du HTML (`<div>`) au milieu du JS → le fichier ne peut pas être interprété et n’est pas servi par Vite (placé dans `src/` au lieu de `public/`). Résultat : pas de consentement affiché, GTM non chargé, conformité RGPD douteuse.  
- **Accessibilité/SEO** : multiples `h1` par page (ex. `src/modules/landing/Hero.tsx`, `src/pages/*`), absence d’OpenGraph/Twitter cards, images décoratives sans `alt` explicite, duplication d’`id="contact"` sur le conteneur et le formulaire (`src/modules/shared/Contact.tsx`) générant un HTML invalide.  
- **Formulaire de contact fragile** : envoie en `no-cors` vers Google Forms, sans retour utilisateur ni gestion d’erreur; aucune validation côté client (sauf `required`).  
- **Performance** : images lourdes (JPEG non optimisés, aucune stratégie de lazy‑loading), polices OTF non subsettées; tout est chargé dès l’atterrissage (Hero plein écran + vidéo YouTube iframe).  
- **Qualité/maintenance** : pas de tests ni de lint exécutés automatiquement; dépendances assez anciennes (React 18, MUI v5) et patch-package appliqué mais non documenté; aucune vérification CI.

## Actions rapides recommandées
1) **Corriger le consentement** : déplacer `tarteaucitronInit.js` et les assets requis dans `public/assets/js/`, enlever le bloc `<div>` illégal, ajouter le vrai `advertising.js` ou supprimer son import, puis vérifier l’initialisation GTM (GTM‑NHKKQ7NT).  
2) **Nettoyer la sémantique** : conserver un seul `h1` par page, supprimer la double utilisation de `id="contact"`, ajouter des `alt` descriptifs aux images clés et des métadonnées OG/Twitter.  
3) **Optimiser les médias** : compresser les JPEG, fournir des variantes WebP/AVIF, déclarer `loading="lazy"` pour les images non critiques et fixer des tailles pour éviter les CLS.  
4) **Renforcer le formulaire** : afficher un état “message envoyé/erreur”, valider email/texte côté client, ou basculer vers une API serveur légère pour fiabiliser l’envoi.  
5) **Outillage** : activer `npm run lint` en pré-commit/CI, ajouter quelques tests Vitest (smoke sur routes et rendu des sections), documenter patch-package si nécessaire.

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

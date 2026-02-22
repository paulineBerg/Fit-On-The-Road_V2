# app en Version 1, initiée par Clémence Bergon via https://github.com/cbergon/Fit-On-The-Road
# app en Version 2 : https://github.com/paulineBerg/Fit-On-The-Road_V2

# Fit On The Road – Rapport d’audit (22 février 2026)

## Aperçu rapide
- Vitrine React 18 + TypeScript (Vite) avec Material UI + un peu de Tailwind.  
- Routage explicite via `createBrowserRouter` (React Router 6.30) dans `src/App.tsx` avec `Suspense` global et routes lazy.  
- Pages principales : `/`, `/entreprises`, `/particuliers`, `/about-us`, `/terms`, toutes enveloppées par le layout `_app.tsx` (AppBar + Footer + providers).  
- Thème MUI sombre centralisé dans `src/styles/theme-material/style.ts`.  
- Husky + ESLint + Vitest configurés; sourcemaps désactivées en production.

## Changements récents (févr. 2026)
- SEO/Meta : index.html enrichi (title/description/robots/OG/Twitter), canonical corrigé, JSON-LD Organization + LocalBusiness (SportsActivityLocation) + FAQ avec contactPoint `contact@fit-ontheroad.fr`.  
- Crawl IA + SEO technique : génération post-build de `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` depuis `scripts/generate-sitemap.js` + `src/shared/routes.config.json` (utiliser `SITE_URL` pour surcharger le domaine).  
- Performance LCP : hero converti en AVIF/WEBP multi-tailles (480→1600), `<picture>` + `loading="eager"` + `fetchpriority` forcé côté DOM; CSS principal préchargé via plugin Vite; sourcemaps off en prod.  
- JS inutilisé : Contact + PhoneApp différés via `LazyOnVisible`; YouTube transformé en “click-to-play” léger; routes déjà lazy.  
- Consentement : tarteaucitron chargé après interaction (fallback 6s), scripts séquencés, langues réduites à fr/en.  
- Accessibilité : contrastes corrigés sur cartes Entreprises/Particuliers, niveaux de titres remis en séquence (Highlights + “Excellence…”), fermeture Drawer sécurisée (focus blur).  
- Correctifs : `AppAppBar` export par défaut réparé, fetchPriority warning supprimé, Vite ESLint limité au mode dev, sourcemaps seulement dev/staging.

## Points forts actuels
- Structure claire des sections (Hero/Features/Pricing/Testimonials/FAQ/Contact) et navigation sticky avec drawer mobile.  
- Contenu éditorial complet et différencié entreprises vs particuliers.  
- Assets critiques optimisés (hero responsive, YouTube lite) et CSS préchargé sans FOUC.  
- SEO prêt production : meta complètes, JSON-LD multi-types, fichiers robots/sitemap/llms servis à la racine.

## Problèmes et risques détectés (état courant)
- **Consentement** : dépend encore d’une init manuelle dans `public/assets/js/tarteaucitronInit.js`; vérifier en prod que les tags marketing restent bloqués par défaut.  
- **Formulaire** : toujours sur Google Forms `no-cors` → absence de vraie confirmation serveur.  
- **Médias** : plusieurs JPEG lourds hors hero restent à optimiser/comprimer.  
- **CI** : workflow GitHub désactivé; tests limités à Vitest basique.

## Actions rapides recommandées
1) **Consentement** : contrôler en prod le blocage initial des tags (GTM) et l’affichage de l’UI tarteaucitron post-interaction.  
2) **Médias** : compresser/convertir les autres JPEG >400 kB en AVIF/WEBP (hors hero déjà optimisé).  
3) **Formulaire** : migrer vers un endpoint fiable (serverless/SMTP) pour un retour utilisateur réel.  
4) **Perf JS** : poursuivre le découpage éventuel des icônes MUI ou composants rarement vus; mesurer avec `npm run build -- --report`.  
5) **CI** : réactiver un workflow lint+test et ajouter quelques tests d’accessibilité/routing.

## Structure à connaître
- Layout global : `src/pages/_app.tsx` (AppBar + Footer + ThemeProvider).  
- Routing : `src/App.tsx` avec `createBrowserRouter` + `Suspense` global; routes décrites dans `src/shared/routes.config.json` pour la génération sitemap/robots/llms.  
- Landing : `src/pages/index.tsx` (Hero optimisé, Video lite, sections Features/Pricing/Testimonials/FAQ, Contact & PhoneApp chargés à l’affichage).  
- Assets : hero optimisé sous `src/assets/images/optimized/overview-*`; tarteaucitron limité à fr/en dans `public/assets/js/tarteaucitronjs/lang`.  
- Styles : `src/styles/index.css` (tailwind reset + fonts), thème MUI `src/styles/theme-material/style.ts`; CSS build préchargé via plugin Vite.  
- SEO : meta + JSON-LD + contactPoint dans `index.html`; fichiers robots/sitemap/llms générés en postbuild et copiés en prod.

## Pistes d’évolution ultérieure
- Mettre en place une PWA légère (manifest + icônes + offline shell limité).  
- Étendre l’analytics post-consentement (events GTM) sans alourdir le bundle initial.  
- Factoriser les cartes Enterprise/Individual et continuer la réduction d’assets lourds.  
- Ajouter monitoring perf (Web Vitals en prod) pour suivre LCP/FID.

## TODO (propositions d’amélioration)
- Remplacer Google Forms par un endpoint (API/serverless) avec accusé de réception et gestion d’erreurs.  
- Traiter les images restantes (Pick-up*, Overview jpg fallback) en AVIF/WebP + compression.  
- Réactiver une CI GitHub (lint + tests) avec PAT `workflow`, étendre la couverture Vitest (routing/sections clés).  
- Sécurisation HTTP : forcer HTTPS + en-têtes (CSP, HSTS) après audit des scripts externes (YouTube, tarteaucitron).  
- Vérifier via Lighthouse mobile que l’audit “JS inutilisé” et “Ressources de blocage de rendu” sont en vert après déploiement.

## Sécurité / secrets
- Pensez à stocker toute clé/API dans des fichiers `.env` (désormais ignorés par git) et à créer un `.env.example` si besoin pour la doc.
- Finaliser les pages légales avec emails/téléphone réels et lier depuis le footer.

*Rapport généré automatiquement; n’hésitez pas à demander un focus détaillé sur une section ou un plan d’actions priorisé.* 

## Note de maintenance
- Lors de toute modification du projet Fit-On-The-Road_V2, mettre à jour ce `README.md` si nécessaire.

# app en Version 1, initiée par Clémence Bergon via https://github.com/cbergon/Fit-On-The-Road
# app en Version 2 : https://github.com/paulineBerg/Fit-On-The-Road_V2

# Fit On The Road – Rapport d’audit (24 février 2026)

## Stack & structure
- Vitrine **React 18 + TypeScript** (Vite) avec **Material UI** (thème sombre) et un socle Tailwind léger (`src/styles/index.css`).
- Routage : `createBrowserRouter` (React Router 6.30) + `Suspense` global dans `src/App.tsx`; pages lazy (`/`, `/entreprises`, `/particuliers`, `/about-us`, `/terms`).
- Layout global `src/pages/_app.tsx` (ThemeProvider MUI, AppBar/Drawer, Footer). Sections de la landing orchestrées dans `src/pages/index.tsx` avec chargement différé (Contact, PhoneApp, Video, FAQ, etc.).
- Aliases Vite (`@pages`, `@features`, `@shared`, …) documentés dans `vite.config.ts`; tests Vitest basés sur jsdom (`src/__tests__/landing.test.tsx`).
- Post-build : `scripts/generate-sitemap.js` génère `public/sitemap.xml`, `public/robots.txt` et `public/llms.txt` à partir de `src/shared/routes.config.json` (`SITE_URL` surcharge le domaine).

## Intégrations et langage
- **SEO** : balises meta/OG/Twitter complètes dans `index.html`; JSON-LD Organization + SportsActivityLocation + FAQ ; composant `Seo` pour les pages avec URL canonique figée sur `https://fit-ontheroad.fr`.
- **Consentement / tracking** : tarteaucitron chargé après interaction (fallback 6 s) via script inline + init dédiée `public/assets/js/tarteaucitronInit.js`. GTM n’est activé qu’après opt-in et uniquement si un ID est fourni (priorité à `public/config.js` puis `VITE_GTM_ID`). Preconnect Google ajouté au moment du consentement.
- **Formulaire** : `src/shared/Contact.tsx` envoie vers Google Forms en `no-cors` (pas de retour serveur fiable, succès optimiste).
- **Médias** : Hero en AVIF/WEBP multi-tailles + jpg fallback, vidéo YouTube nocookie en “click-to-play”, autres visuels souvent en JPEG + source WebP via `WebpPicture`.
- **Performance** : plugin Vite qui précharge le CSS bundlé, lazy routes/composants, sourcemaps coupées en prod, chunk warning porté à 1 Mo.

## Points forts
- Architecture claire par domaines (`features/`, `pages/`, `layouts/`, `shared/`) avec alias explicites et thème MUI centralisé.
- Landing structurée (Hero → offres Entreprises/Particuliers → Video → Highlights → Pricing → Testimonials → FAQ/Contact) avec chargement progressif et CTA cohérents.
- SEO prêt production (meta, JSON-LD, sitemap/robots/llms) + vidéos/YouTube encapsulées pour limiter le JS initial.
- Accessibilité travaillée (contrastes MUI, navigation clavier sur Drawer, images optimisées avec `alt`, focus state sur CTA principaux).

## Points de vigilance / risques
- **Consentement** : dépend d’une config correcte (`public/config.js` ou variables Vite). Ajouter un test d’intégration pour vérifier l’absence d’appels *.google* avant opt-in.
- **Formulaire contact** : en `no-cors` → impossible de confirmer la livraison; absence d’anti-spam, ni de log serveur.
- **SEO multi-env** : `Seo.tsx` impose le domaine production; prévisualisations/staging publieront des canonicals/og:url faux si non patchés.
- **Tests/qualité** : une seule spec Vitest (hero) et pas de CI active; aucune vérification d’accessibilité ou de routes.
- **Médias** : plusieurs JPEG non optimisés (entreprises/particuliers) et pas de preload sur images critiques secondaires.

## TODO améliorations (priorisées)
1) **SEO réel / pré-rendu SPA** : ✅ en place – prerender post-build des routes marquées `prerender:true` dans `src/shared/routes.config.json`; canonical statique retiré d’`index.html`. Garder `routes.config.json` comme source de vérité et ajuster si de nouvelles pages arrivent.
2) **Domaine & canonicals configurables** : ✅ `SITE_URL` (Seo.tsx) prend `VITE_SITE_URL` ou `window.location.origin`; variable ajoutée dans `.env.example`. Mettre `VITE_SITE_URL` par env (prod/staging/dev) pour des canonicals/og:url corrects.
3) **Consentement renforcé** : ✅ `preconnect` Google déplacés post-opt-in, GTM activé uniquement si `gtmId` est fourni (`public/config.js` prioritaire puis `VITE_GTM_ID`), privacyUrl dérivée de `siteUrl`, fallback “GTM off” si ID manquant. Ancien doublon supprimé (source publique unique).
4) **Formulaire fiable & anti-spam** : remplacer Google Forms `no-cors` par un endpoint (serverless/API) qui renvoie 2xx/4xx, ajouter honeypot + rate-limit (+ éventuellement reCAPTCHA/Turnstile), corriger la validation message (champ requis, ≥5 caractères), encoder correctement le `mailto` et gérer `ToggleButtonGroup` (value peut être `null`).
5) **Médias & performance** : convertir les JPEG marketing en AVIF/WEBP, fixer `width/height` + `loading="lazy"` hors above-the-fold, limiter le plugin “preload-css” au CSS critique ou revenir au comportement natif.
6) **Qualité / CI** : retirer `.env.production` du dépôt et ne versionner qu’un `.env.example`, ajouter GitHub Actions `npm ci -> lint -> test:ci -> build`, étendre Vitest (routing, Helmet/SEO, validation contact, sections clés).
7) **Sécurité HTTP** : déployer des headers côté hébergeur (CSP adaptée à YouTube nocookie + GTM post-consentement, Referrer-Policy, Permissions-Policy, X-Content-Type-Options, HSTS).
8) **Dette & hygiène repo** : planifier la mise à jour des dépendances pour supprimer les `patch-package`, ignorer `dist/` si versionné, vérifier qu’aucun artefact build ne reste dans le dépôt.
9) **Accessibilité** : remplacer le `<h1 style="display:none">` d’`index.html` par une classe visually-hidden ou le retirer si un H1 est déjà rendu côté React.

## Notes utiles
- Thème MUI : `src/styles/theme-material/style.ts` (palette sombre #ed130d/#8b725d). Tailwind sert surtout de reset utilitaire.
- Navigation : AppBar sticky (`src/layouts/AppAppBar.tsx`) avec scroll lissé et Drawer mobile; Footer simple.
- Tests présents : `src/__tests__/landing.test.tsx` uniquement (vérifie titre Hero + CTA). Aucun test e2e.
- Routes source de vérité : `src/shared/routes.config.json` alimente à la fois sitemap/robots/llms et le prerender; mettre à jour cette liste en ajoutant/supprimant des pages.
- Génération d’assets robots/sitemap/llms + prerender : `npm run build` (postbuild enchaîne sitemap + prerender).

## Note de maintenance
- Mettre à jour ce `README.md` à chaque évolution structurelle (routing, SEO, consentement, formulaire, CI). Pensez à ajouter un `.env.example` si de nouvelles variables sont introduites.

# app en Version 1, initiée par Clémence Bergon via https://github.com/cbergon/Fit-On-The-Road
# app en Version 2 : https://github.com/paulineBerg/Fit-On-The-Road_V2

# Fit On The Road – Rapport d’audit (24 février 2026)

## Stack & structure
- Vitrine **React 18 + TypeScript** (Vite) avec **Material UI** (thème sombre) et un socle Tailwind léger (`src/styles/index.css`). Stack police passée en **système** (aucune font externe à charger).
- Routage : `createBrowserRouter` (React Router 6.30) + `Suspense` global dans `src/App.tsx`; pages lazy (`/`, `/entreprises`, `/particuliers`, `/about-us`, `/terms`).
- Layout global `src/pages/_app.tsx` (ThemeProvider MUI, AppBar/Drawer, Footer). Sections de la landing orchestrées dans `src/pages/index.tsx` avec chargement différé (Contact, PhoneApp, Video, FAQ, etc.).
- Aliases Vite (`@pages`, `@features`, `@shared`, …) documentés dans `vite.config.ts`; tests Vitest basés sur jsdom (voir liste plus bas).
- Post-build : `scripts/generate-sitemap.js` génère `public/sitemap.xml`, `public/robots.txt` et `public/llms.txt` à partir de `src/shared/routes.config.json` (`SITE_URL` surcharge le domaine), puis **prerender** des routes marquées `prerender:true` et **inline critical CSS** (Critters via `scripts/inline-critical.cjs`).

## Intégrations et langage
- **SEO** : balises meta/OG/Twitter complètes dans `index.html`; JSON-LD Organization + SportsActivityLocation + FAQ ; composant `Seo` pour les pages avec URL canonique figée sur `https://fit-ontheroad.fr`.
- **Consentement / tracking** : tarteaucitron chargé après interaction (fallback 6 s) via script inline + init dédiée `public/assets/js/tarteaucitronInit.js`. GTM n’est activé qu’après opt-in et uniquement si un ID est fourni (priorité à `public/config.js` puis `VITE_GTM_ID`). Preconnect Google ajouté au moment du consentement.
- **Formulaire** : `src/shared/Contact.tsx` appelle un endpoint HTTP configurable (`contactEndpoint` via `public/config.js` ou variables Vite), avec retour 2xx/4xx, honeypot, cooldown client, reCAPTCHA v3 optionnel et validation message (requis ≥ 5 caractères).
- **Médias** : Hero en AVIF/WEBP multi-tailles + jpg fallback, vidéo YouTube nocookie en “click-to-play”, autres visuels souvent en JPEG + source WebP via `WebpPicture`.
- **Performance** : CSS critique inliné post-build (Critters) + bundle CSS préchargé; stack police système; Hero `fetchpriority=high`, images max 1280w + `decoding="async"`; `WebpPicture` force AVIF/WEBP/JPEG avec `loading="lazy"`.

## Points forts
- Architecture claire par domaines (`features/`, `pages/`, `layouts/`, `shared/`) avec alias explicites et thème MUI centralisé.
- Landing structurée (Hero → offres Entreprises/Particuliers → Video → Highlights → Pricing → Testimonials → FAQ/Contact) avec chargement progressif et CTA cohérents.
- SEO prêt production (meta, JSON-LD, sitemap/robots/llms) + vidéos/YouTube encapsulées pour limiter le JS initial.
- Accessibilité travaillée (contrastes MUI, navigation clavier sur Drawer, images optimisées avec `alt`, focus state sur CTA principaux).

## Points de vigilance / risques
- **Consentement** : dépend d’une config correcte (`public/config.js` ou variables Vite). Ajouter un test d’intégration pour vérifier l’absence d’appels *.google* avant opt-in.
- **Formulaire contact** : endpoint PHP `api/contact.php` (valide, captcha, rate-limit, honeypot) qui envoie via `mail()` ou SMTP IONOS (config privée `config/config.php` ou env) et logue dans `logs/contact.log` (email haché). Vérifier la clé reCAPTCHA (secret en env ou `config/config.php`), l’URL d’API et les emails `from`/`to` sur chaque environnement.
- **SEO multi-env** : `Seo.tsx` impose le domaine production; prévisualisations/staging publieront des canonicals/og:url faux si non patchés.
- **Tests/qualité** : CI active mais pas encore de tests e2e; surveiller les futures évolutions React Router (warnings v7 flag).
- **Médias** : quelques JPEG lourds subsistent (sections entreprises/particuliers) — à re-comprimer si besoin.

## TODO améliorations (priorisées)
1) **SEO réel / pré-rendu SPA** : ✅ en place – prerender post-build des routes marquées `prerender:true` dans `src/shared/routes.config.json`; canonical statique retiré d’`index.html`. Garder `routes.config.json` comme source de vérité et ajuster si de nouvelles pages arrivent.
2) **Domaine & canonicals configurables** : ✅ `SITE_URL` (Seo.tsx) prend `VITE_SITE_URL` ou `window.location.origin`; variable ajoutée dans `.env.example`. Mettre `VITE_SITE_URL` par env (prod/staging/dev) pour des canonicals/og:url corrects.
3) **Consentement renforcé** : ✅ `preconnect` Google déplacés post-opt-in, GTM activé uniquement si `gtmId` est fourni (`public/config.js` prioritaire puis `VITE_GTM_ID`), privacyUrl dérivée de `siteUrl`, fallback “GTM off” si ID manquant. Ancien doublon supprimé (source publique unique).
4) **Formulaire fiable & anti-spam** : ✅ en place – endpoint HTTP (`contactEndpoint` → `/api/contact.php` par défaut) avec retours 2xx/4xx, honeypot + cooldown client et rate-limit serveur, reCAPTCHA v3 optionnel, validation message requise (≥5 caractères), mailto encodé et `ToggleButtonGroup` tolère `null`.
5) **Médias & performance** : ✅ JPEG marketing convertis en AVIF/WEBP (sources `src/assets/images/*`), images hors above-the-fold avec dimensions explicites + `loading="lazy"` + `decoding="async"` via `WebpPicture`, CSS critique inliné (Critters) et pile de polices système.
10) **Consent Mode v2 & tarteaucitron** : ✅ tarteaucitron mis à jour en 1.30.0 (FR/EN uniquement), init dédié (`public/assets/js/tarteaucitronInit.js`) force le consent mode v2 (ad_storage, analytics_storage, ad_user_data, ad_personalization à denied par défaut, maj après opt-in), cache long 1 an sur `/assets/js/tarteaucitronjs/*`.
6) **Qualité / CI** : ✅ `.env.production` retiré, seul `.env.example` reste versionné ; ✅ CI GitHub Actions ajoutée (`.github/workflows/ci.yml`) avec `npm ci → lint → test:ci → build` ; ✅ Vitest étendu (routing, Helmet/SEO, sections clés, validations Contact).
7) **Sécurité HTTP** : ✅ Headers livrés côté Apache (`public/.htaccess`) : CSP adaptée (YouTube nocookie, GTM post-consentement, reCAPTCHA, MUI inline), Referrer-Policy, Permissions-Policy, X-Content-Type-Options, X-Frame-Options; HSTS prêt à activer sur prod HTTPS.
8) **Dette & hygiène repo** : ✅ `dist/` déjà ignoré (.gitignore) et aucun artefact build suivi (`git ls-files dist` vide). À planifier : montée de versions pour supprimer les patches (répertoire `patches/`) et nettoyer les dépendances legacy.
9) **Accessibilité** : ✅ `<h1>` masqué retiré d’`index.html` (le H1 est déjà rendu côté React dans le Hero).

## Notes utiles
- Thème MUI : `src/styles/theme-material/style.ts` (palette sombre #ed130d/#8b725d). Tailwind sert surtout de reset utilitaire.
- Navigation : AppBar sticky (`src/layouts/AppAppBar.tsx`) avec scroll lissé et Drawer mobile; Footer simple.
- Tests présents (Vitest/jsdom) : `landing.test.tsx`, `home-sections.test.tsx`, `routing.test.tsx`, `seo.test.tsx`, `contact.test.tsx`. Pas d’e2e.
- Routes source de vérité : `src/shared/routes.config.json` alimente à la fois sitemap/robots/llms et le prerender; mettre à jour cette liste en ajoutant/supprimant des pages.
- Génération d’assets robots/sitemap/llms + prerender + inline-critical : `npm run build` (postbuild enchaîne sitemap → prerender → inline-critical).

## Déploiement (build statique Vite)
1) Installer les dépendances : `npm ci`
2) Définir les variables (exemple `.env.production` non versionné) :
   - `VITE_SITE_URL=https://fit-ontheroad.fr`
   - `VITE_GTM_ID=` (optionnel, sinon config dans `public/config.js`)
3) Build : `npm run build`
   - Génère `dist/` avec sitemap/robots/llms + prerender + CSS critique inliné.
4) Publier `dist/` sur l’hébergeur (Apache) en conservant `dist/.htaccess` et `dist/assets/js/tarteaucitronjs/*` (cache long).
5) Vérifier après déploiement :
   - Canonical/OG pointent sur le bon domaine (`VITE_SITE_URL`).
   - CSP dans `public/.htaccess` autorise les domaines nécessaires (GTM/GA, reCAPTCHA, YouTube nocookie).
   - tarteaucitron se charge seulement après interaction et active GTM post-consentement.

## Note de maintenance
- Mettre à jour ce `README.md` à chaque évolution structurelle (routing, SEO, consentement, formulaire, CI). Pensez à ajouter un `.env.example` si de nouvelles variables sont introduites.

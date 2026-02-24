# 001 - SEO réel / pré-rendu SPA

## Résumé
Mettre en place un pré-rendu (SSG/prerender) des routes clés `/`, `/entreprises`, `/particuliers`, `/about-us`, `/terms` pour servir un HTML complet (meta, canonical, OG) aux bots qui ne rendent pas le JS.

## Tâches
- Choisir une stratégie (ex: vite-plugin-ssg, prerender-spa-plugin, headless chromium) compatible hébergement actuel.
- Générer un HTML par route avec Helmet rendu côté build.
- Retirer le `<link rel="canonical">` statique d`index.html` ou l’ajuster pour éviter le doublon.
- Vérifier que sitemap/robots/llms pointent vers les routes pré-rendues.

## Critères d'acceptation
- Les réponses HTTP pour les 5 routes contiennent des balises title/description/og/canonical spécifiques sans exécution JS.
- Pas de double canonical dans le HTML initial.
- Build CI passe et la taille du bundle n’augmente pas de façon significative (>5%).

## Notes
- Voir README "TODO améliorations" item 1.

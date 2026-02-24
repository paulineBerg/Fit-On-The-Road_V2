# 002 - Domaine & canonicals configurables

## Résumé
Rendre `SITE_URL` configurable par environnement pour éviter des canonicals/og:url de production en staging/dev.

## Tâches
- Modifier `src/shared/Seo.tsx` pour utiliser `import.meta.env.VITE_SITE_URL ?? window.location.origin`.
- Ajouter `VITE_SITE_URL` dans `.env.example`; retirer toute valeur hardcodée.
- Adapter les scripts de build/preview pour fournir la variable.

## Critères d'acceptation
- Canonical et og:url reflètent le domaine de l’environnement (prod/staging/dev) sans code change.
- Aucune régression SEO sur le domaine de prod.

## Notes
- Relie l’item 2 de la TODO README.

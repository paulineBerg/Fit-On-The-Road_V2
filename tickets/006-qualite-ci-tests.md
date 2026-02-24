# 006 - Qualité & CI

## Résumé
Mettre en place une CI de base et étoffer la couverture de tests front.

## Tâches
- Ne versionner qu’un `.env.example`; retirer `.env.production` du dépôt.
- Ajouter un workflow GitHub Actions : `npm ci`, `npm run lint`, `npm run test:ci`, `npm run build`.
- Étendre Vitest : routing (/entreprises, /terms), Helmet/SEO (title/canonical), validation contact (email/message), présence des sections clés.

## Critères d'acceptation
- Workflow CI passe sur main et PR.
- Couverture de tests augmente (au moins +3 specs ciblées).
- Aucun secret committé; CI utilise des secrets GitHub si nécessaire.

## Notes
- Item 6 de la TODO README.

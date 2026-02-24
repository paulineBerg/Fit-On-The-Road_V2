# 003 - Consentement renforcé (GTM / preconnect)

## Résumé
Aligner le chargement des ressources Google sur le consentement, rendre l’ID GTM et l’URL privacy configurables.

## Tâches
- Déplacer les `preconnect` Google (GTM/Analytics) pour qu’ils ne se fassent qu’après opt-in tarteaucitron.
- Injecter `VITE_GTM_ID` et `VITE_SITE_URL` dans `public/assets/js/tarteaucitronInit.js`; prévoir un fallback "GTM off" si la variable manque.
- Supprimer/archiver `src/assets/js/tarteaucitronInit.js` (doublon non utilisé) et nettoyer les imports.
- Dériver `privacyUrl` à partir de `VITE_SITE_URL/terms`.

## Critères d'acceptation
- Aucune requête réseau vers *.google* avant consentement.
- GTM chargé uniquement si `VITE_GTM_ID` est défini; staging fonctionne sans GTM.
- Privacy URL reflète l’environnement courant.

## Notes
- Item 3 de la TODO README.

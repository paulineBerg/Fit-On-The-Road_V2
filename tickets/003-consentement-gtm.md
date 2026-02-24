# 003 - Consentement renforcé (GTM / preconnect)

## Résumé
Aligner le chargement des ressources Google sur le consentement, rendre l’ID GTM et l’URL privacy configurables.

## Tâches (livrées)
- ✅ Déplacer les `preconnect` Google (GTM/Analytics) pour qu’ils ne se fassent qu’après opt-in tarteaucitron.
- ✅ Injecter `gtmId`/`siteUrl` via `public/config.js` (prioritaire) puis `VITE_GTM_ID` / `VITE_SITE_URL` dans `public/assets/js/tarteaucitronInit.js`; fallback “GTM off” si l’ID manque.
- ✅ Supprimer/archiver le doublon `src/assets/js/tarteaucitronInit.js` (non utilisé) et nettoyer les imports.
- ✅ Dériver `privacyUrl` à partir de `siteUrl/terms`.

## Critères d'acceptation
- Aucune requête réseau vers *.google* avant consentement.
- GTM chargé uniquement si `VITE_GTM_ID` est défini; staging fonctionne sans GTM.
- Privacy URL reflète l’environnement courant.

## Notes
- Item 3 de la TODO README – marqué comme livré.

# 005 - Médias & performance

## Résumé
Réduire le poids des visuels marketing et éviter le sur-préchargement du CSS.

## Tâches
- Convertir les JPEG marketing (entreprises/particuliers, assets publics) en AVIF/WEBP + fallback JPG.
- Ajouter systématiquement `width/height` + `loading="lazy"` hors above-the-fold.
- Ajuster le plugin "preload-css" pour ne précharger que le CSS critique ou revenir au comportement natif Vite.

## Critères d'acceptation
- LCP et Total Bytes transférés diminuent sur mobile (vérifier Lighthouse/psi avant/après).
- Aucun layout shift lié aux images converties (dimensions fixées).
- Pas de régression de style liée au preload CSS.

## Notes
- Item 5 de la TODO README.

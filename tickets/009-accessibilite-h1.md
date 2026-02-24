# 009 - Accessibilité H1 caché

## Résumé
Le `index.html` contient un `<h1 style="display:none">` : invisible pour lecteurs d’écran. Ajuster ou supprimer selon le H1 rendu par React.

## Tâches
- Vérifier si chaque page rend déjà un H1 visible/logique.
- Remplacer le H1 masqué par une classe visually-hidden accessible ou le supprimer si redondant.
- Ajouter un test (axe/pa11y ou Vitest + jest-axe) pour éviter la régression.

## Critères d'acceptation
- Aucune alerte axe/pa11y sur la présence d’un H1 caché non accessible.
- Un seul H1 pertinent par page (landing et autres routes).

## Notes
- Item 9 de la TODO README.

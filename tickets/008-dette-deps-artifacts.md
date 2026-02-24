# 008 - Dette deps & artefacts repo

## Résumé
Réduire la dépendance à patch-package et nettoyer les artefacts de build dans le dépôt.

## Tâches
- Planifier une montée de versions pour éliminer les patchs sur `eslint-plugin-import` et `minimatch`.
- Vérifier si `dist/` ou autres artefacts sont versionnés; les ajouter au `.gitignore` si non nécessaires.
- Documenter les patchs restants (si incompressibles) et leur date de révision.

## Critères d'acceptation
- Plus aucun patch-package nécessaire ou justification documentée.
- `git status` propre après build (pas de dist/ non suivi).

## Notes
- Item 8 de la TODO README.

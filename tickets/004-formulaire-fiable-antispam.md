# 004 - Formulaire fiable & anti-spam

## Résumé
Remplacer Google Forms `no-cors` par un endpoint contrôlable, ajouter anti-spam et corriger la validation UX.

## Tâches
- Créer un endpoint (serverless/API) pour recevoir le formulaire, retourner 2xx/4xx, et loguer les erreurs.
- Ajouter honeypot + rate-limit minimal; option reCAPTCHA/Turnstile si clé dispo.
- Rendre le champ message requis (`trim().length >= 5`) et aligner le message d'erreur.
- Encoder correctement le `mailto` (CRLF `%0D%0A`, pas de `<br/>`).
- Gérer `ToggleButtonGroup` : onChange peut renvoyer `null`, garder la valeur précédente ou imposer un choix.

## Critères d'acceptation
- Le front affiche un état succès/erreur basé sur la réponse HTTP réelle.
- Spam trivial (bots sans JS) filtré par honeypot; aucun faux positif connu.
- Tests unitaires couvrent validation email/message et changement de userType.

## Notes
- Item 4 de la TODO README.

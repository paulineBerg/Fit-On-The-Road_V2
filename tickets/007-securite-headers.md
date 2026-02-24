# 007 - Sécurité HTTP (headers)

## Résumé
Ajouter des en-têtes de sécurité côté hébergeur, en tenant compte des intégrations externes (YouTube nocookie, GTM post-consentement).

## Tâches
- Définir une CSP adaptée (script/style/img/connect/frame-src) incluant les domaines réellement utilisés après consentement.
- Ajouter Referrer-Policy, Permissions-Policy, X-Content-Type-Options, HSTS (selon capacité d’hébergement).
- Documenter comment ces headers sont appliqués (reverse proxy, CDN, vercel/nginx, etc.).

## Critères d'acceptation
- Tests securityheaders.com au minimum "B" sans casser les intégrations existantes.
- Les iframes YouTube nocookie et scripts chargés après consentement fonctionnent toujours.

## Notes
- Item 7 de la TODO README.

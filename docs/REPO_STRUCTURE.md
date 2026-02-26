# REPOSITORY STRUCTURE -- Recommended Architecture

/src /components /pages /layouts /hooks /features /shared /assets

/docs README_SITE_STRATEGIQUE.md README_PARTICULIER_STRATEGIQUE.md
README_ENTREPRISE_STRATEGIQUE.md README_DEV.md README_SEO.md

/public /assets config.js robots.txt sitemap.xml

/scripts generate-sitemap.js inline-critical.cjs

.github /workflows ci.yml

------------------------------------------------------------------------

## Principles

-   Clear B2B / B2C separation
-   Routes defined in routes.config.json
-   Strategy documented in /docs
-   Production build always clean (dist ignored)

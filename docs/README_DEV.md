# README_DEV -- Guide Développement Fit On The Road

## Stack Technique

-   Frontend : React + Vite
-   Routing : React Router
-   Hébergement : (à compléter)
-   Analytics : Google Analytics 4
-   Tag Manager : Google Tag Manager

------------------------------------------------------------------------

## Structure Recommandée du Projet

/src /components /pages /layouts /hooks /assets /docs
README_SITE_STRATEGIQUE.md README_PARTICULIER_STRATEGIQUE.md
README_ENTREPRISE_STRATEGIQUE.md README_DEV.md README_SEO.md

------------------------------------------------------------------------

## Pages Principales

-   / (Accueil)
-   /entreprises
-   /particuliers
-   /about
-   /terms
-   /programme-qvt-saint-quentin-en-yvelines (landing B2B dédiée)

------------------------------------------------------------------------

## Bonnes Pratiques Techniques

### SEO Technique

-   1 seul H1 par page
-   Balises title uniques
-   Meta description optimisée
-   URLs propres sans paramètres inutiles
-   Sitemap.xml dynamique
-   Robots.txt configuré

### Performance

-   Images compressées
-   Lazy loading
-   Code splitting
-   Lighthouse \> 85

### Tracking

-   Événement GA4 pour :
    -   Clic bouton devis
    -   Clic réservation
    -   Scroll 90%
    -   Envoi formulaire

------------------------------------------------------------------------

## Composants Stratégiques

-   HeroSection
-   CTAStickyButton
-   TestimonialsSection
-   PricingSection
-   FAQSection
-   LeadForm

------------------------------------------------------------------------

## Objectifs Développement

-   Structure claire B2B / B2C
-   Navigation fluide
-   Ancres fonctionnelles par page
-   Architecture évolutive

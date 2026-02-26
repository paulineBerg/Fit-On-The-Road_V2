import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: FaqItem[] = [
  {
    question: "Quel est le prix d’un coach sportif à Versailles ?",
    answer:
      "Le tarif dépend du format (individuel, duo, pack 10) et du lieu. L’objectif : une progression structurée et durable. Une séance découverte permet de définir la formule adaptée.",
  },
  {
    question: "Proposez-vous du coaching sportif dans les Yvelines (78) ?",
    answer:
      "Oui. Fit On The Road intervient à Versailles et dans les Yvelines (78) pour du coaching individuel, duo et remise en forme, en extérieur, à domicile ou en espace adapté.",
  },
  {
    question: "Comment se déroule une séance découverte ?",
    answer:
      "On fait le point sur vos objectifs, votre niveau et vos contraintes. Ensuite, une séance adaptée permet de tester la méthode et de repartir avec un plan de progression clair.",
  },
  {
    question: "À qui s’adresse votre coaching ?",
    answer:
      "Aux actifs 25–40 ans (performance & énergie) et aux adultes 40–60 ans (santé & mobilité). Les séances sont adaptées au niveau, aux antécédents et à l’objectif.",
  },
  {
    question: "Proposez-vous du sport en entreprise dans le 78 ?",
    answer:
      "Oui. Nous mettons en place des formats adaptés (séances régulières, ateliers prévention, challenges) pour améliorer la QVT et l’engagement, notamment sur Versailles et Saint-Quentin-en-Yvelines.",
  },
  {
    question: "Quels formats sont disponibles (individuel, duo, packs) ?",
    answer:
      "Coaching individuel sur-mesure, duo pour la motivation, pack 10 séances pour progresser sur la durée, et parrainage pour bénéficier d’avantages.",
  },
  {
    question: "Où intervenez-vous exactement autour de Versailles ?",
    answer:
      "Versailles, Le Chesnay-Rocquencourt, Viroflay, et un large secteur Yvelines (78) incluant Saint-Quentin-en-Yvelines et ses communes.",
  },
  {
    question: "Puis-je reprendre le sport après une longue pause ?",
    answer:
      "Oui. Le programme est progressif, sécurisé et orienté mobilité/renforcement. L’objectif : reprendre confiance, bouger mieux et gagner en énergie sans se blesser.",
  },
];

type FAQSectionHomeProps = {
  sectionId?: string;
};

function FAQSectionHome({ sectionId = "faq" }: FAQSectionHomeProps) {
  const [expanded, setExpanded] = React.useState<string | false>("panel-0");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      component="section"
      id={sectionId}
      sx={{
        py: { xs: 6, md: 8 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 5 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "70%" },
          textAlign: { sm: "left", md: "center" },
          fontWeight: 800,
          letterSpacing: "-0.01em",
        }}
      >
        Questions fréquentes
      </Typography>

      <Box sx={{ width: "100%", maxWidth: 980 }}>
        {homeFaqs.map((item, index) => {
          const panelId = `panel-${index}`;
          return (
            <Accordion
              key={item.question}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}
              disableGutters
              square
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panelId}-content`}
                id={`${panelId}-header`}
              >
                <Typography
                  component="h3"
                  variant="subtitle1"
                  sx={{ fontWeight: 700 }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{ maxWidth: { sm: "100%", md: "80%" }, lineHeight: 1.7 }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Container>
  );
}

export default FAQSectionHome;

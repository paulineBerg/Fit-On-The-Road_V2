import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type FaqItem = {
  question: string;
  answer: string;
};

export const individualFaqs: FaqItem[] = [
  {
    question: "Où se déroulent les cours collectifs à Bois d'Arcy ?",
    answer:
      "Dans la zone d'activité sportive à Bois d'Arcy, près du Skate Park et du Tennis.",
  },
  {
    question: "Comment se passe la réservation des séances ?",
    answer:
      "Une application est mise à votre disposition pour la gestion du planning.",
  },
  {
    question: "Y a t'il des séances différentes en fonction du niveau ?",
    answer:
      "La taille du groupe étant limitée, cela permet au coach d'accorder à chacun l'attention nécessaire à un accompagnement personnalisé tout en profitant de l'émulation collective.",
  },
  {
    question:
      "Proposez-vous du coaching à domicile autour de Versailles et SQY ?",
    answer:
      "Oui. Les séances particulières peuvent se dérouler à domicile, en extérieur ou dans un espace adapté à Versailles, Le Chesnay-Rocquencourt et Saint-Quentin-en-Yvelines. Le matériel essentiel est apporté pour assurer un coaching complet.",
  },
  {
    question: "Que comprend la séance découverte ?",
    answer:
      "La séance découverte permet de clarifier vos objectifs, d'évaluer votre niveau et de tester une première session personnalisée. Vous repartez avec un plan de progression adapté pour la remise en forme dans les Yvelines (78).",
  },
  {
    question: "Le coaching duo est-il possible ?",
    answer:
      "Oui, le coaching duo est proposé pour progresser à deux tout en partageant la motivation. C'est idéal pour un couple, un ami ou un collègue qui souhaite suivre le même programme près de Versailles.",
  },
  {
    question: "Comment se passent les reports ou annulations ?",
    answer:
      "Les reports se font simplement via message ou téléphone. Un délai de prévenance de 24 h est recommandé pour replanifier sans frais, afin de préserver vos créneaux dans un planning serré.",
  },
  {
    question:
      "Quel équipement faut-il prévoir pour les séances à domicile ou en extérieur ?",
    answer:
      "Je fournis le matériel essentiel (tapis, mini-bandes, kettlebells légers). Prévoyez seulement une tenue adaptée et un espace dégagé de 4 à 5 m² ; à Versailles et en Yvelines, un parc ou votre salon suffit.",
  },
  {
    question: "Combien de séances par semaine pour progresser rapidement ?",
    answer:
      "Pour la majorité des particuliers autour de Versailles et SQY, 1 à 2 séances par semaine donnent déjà des résultats visibles, surtout si elles sont structurées et combinées à un suivi entre les séances.",
  },
  {
    question: "Proposez-vous un suivi entre les séances ?",
    answer:
      "Oui, un point rapide sur WhatsApp ou par mail entre les séances permet d'ajuster le programme, valider vos auto-séances et garder la motivation sans charge mentale supplémentaire.",
  },
];

function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>("panel-0");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
      sx={{
        py: 5,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        Questions fréquentes
      </Typography>
      <Box sx={{ width: "100%" }}>
        {individualFaqs.map((item, index) => {
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
                <Typography component="h3" variant="subtitle1">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: "100%", md: "70%" }, lineHeight: 1.7 }}
                >
                  {item.answer}
                </Typography>
                {index === 0 ? (
                  <iframe
                    title="collective coaching location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.8261442076073!2d2.028891692670014!3d48.804296685174485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e687ba8069b67d%3A0x9293bf0b0db2f4d1!2sSkate%20Park%20De%20Bois%20D'Arcy!5e0!3m2!1sfr!2sfr!4v1718616366731!5m2!1sfr!2sfr"
                    width="100%"
                    className="rounded-[10px]"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : null}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Container>
  );
}

export default FAQ;

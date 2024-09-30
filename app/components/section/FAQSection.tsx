import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'How do I create a seller account?',
    answer: 'To create a seller account, simply sign up using your phone number, and complete your profile by adding store details and payment information.',
  },
  {
    question: 'What documents do I need to provide?',
    answer: 'You need to provide your identification (ID), business address, and bank information for payments.',
  },
  {
    question: 'How do I add products to my store?',
    answer: 'You can add products through the seller center by uploading product images, details, and pricing. Once approved, your products will go live.',
  },
  {
    question: 'When do I get paid?',
    answer: 'Payments are processed once your orders are successfully delivered and accepted by the customer. Typically, payments are disbursed on a weekly basis.',
  },
  {
    question: 'How do I handle returns or refunds?',
    answer: 'Returns and refunds can be managed through the seller center. Make sure to follow our return policy guidelines for a smooth process.',
  },
];

export default function FAQSection() {
  return (
    <Box sx={{pb: 5}}>
      <Typography variant="h4" align="left" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="text.secondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

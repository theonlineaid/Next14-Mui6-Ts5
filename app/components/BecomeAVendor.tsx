'use client'

import React from 'react';
import { Container, Typography, Button, Grid, Box, Paper } from '@mui/material';
import HeroSection from './section/HeroSection';
import WhyChooseUs from './section/WhyChooseUs';
import StepsSection from './section/StepSection';
import FAQSection from './section/FAQSection';


const BecomeAVendor: React.FC = () => {


  return (
    <>
     <HeroSection />
      <Container maxWidth="md">
        <WhyChooseUs />

        <StepsSection />

        <FAQSection />
      </Container>
    </>
  );
}

export default BecomeAVendor;

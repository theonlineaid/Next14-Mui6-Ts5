'use client'

import React from 'react';
import { Container, Typography, Button, Grid, Box, Paper } from '@mui/material';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';

// Styled components for the Hero Section
const HeroSection = styled(Box)({
  position: 'relative',
  textAlign: 'center',
  color: 'white',
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/926390/pexels-photo-926390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', // Linear gradient and image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '80px 20px',
  height: "600px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const BecomeAVendor: React.FC = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>Become a Vendor</Typography>
          <Typography variant="h6" paragraph>
            Join our marketplace and reach a broader audience. Showcase your products to thousands of potential customers and grow your business with us.
          </Typography>
          <Button variant="contained" color="primary" href="#contact">Get Started</Button>
        </Container>
      </HeroSection>

      <Container maxWidth="md">
        {/* Why Choose Us */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>Why Choose Us?</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Paper sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">Wide Audience</Typography>
                <Typography variant="body1">
                  Reach a global audience with our extensive marketing and promotion strategies.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">Easy Integration</Typography>
                <Typography variant="body1">
                  Seamlessly integrate with our platform and start selling quickly with minimal setup.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">Secure Transactions</Typography>
                <Typography variant="body1">
                  Enjoy peace of mind with our secure payment processing and fraud prevention measures.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">24/7 Support</Typography>
                <Typography variant="body1">
                  Our dedicated support team is available 24/7 to assist you with any issues or questions.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* How It Works */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>How It Works</Typography>
          <Typography variant="body1" paragraph>
            Getting started is easy! Follow these simple steps to become a vendor:
          </Typography>
          <ul>
            <li><Typography variant="body1">Sign up for an account.</Typography></li>
            <li><Typography variant="body1">Complete your vendor profile.</Typography></li>
            <li><Typography variant="body1">List your products and start selling.</Typography></li>
          </ul>
        </Box>

        {/* Testimonials with Slider */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>What Our Vendors Say</Typography>
          <Slider {...sliderSettings}>
            <Box sx={{ padding: 2 }}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body1">
                  "Joining this platform has significantly increased my sales and allowed me to reach new customers."
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ padding: 2 }}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Jane Smith</Typography>
                <Typography variant="body1">
                  "The support team has been incredibly helpful and the platform is very user-friendly."
                </Typography>
              </Paper>
            </Box>
            {/* Add more testimonials as needed */}
          </Slider>
        </Box>

        {/* FAQs */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>FAQs</Typography>
          <Typography variant="h6">How much does it cost to become a vendor?</Typography>
          <Typography variant="body1">There is no cost to sign up. We only charge a small fee per transaction.</Typography>
          <Typography variant="h6">How do I manage my products?</Typography>
          <Typography variant="body1">You can manage your products through your vendor dashboard.</Typography>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h4" gutterBottom>Ready to Get Started?</Typography>
          <Button variant="contained" color="primary" href="#contact">Join Us Today</Button>
        </Box>

        {/* Contact Information */}
        <Box id="contact" sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>Contact Us</Typography>
          <Typography variant="body1">
            If you have any questions or need more information, feel free to reach out to us at <a href="mailto:info@example.com">info@example.com</a>.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default BecomeAVendor;

import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography } from '@mui/material';

type Props = {}


const HeroSectionStyle = styled(Box)({
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


export default function HeroSection({ }: Props) {
    return (
        <HeroSectionStyle>
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom>Become a Vendor</Typography>
                <Typography variant="h6" paragraph>
                    Join our marketplace and reach a broader audience. Showcase your products to thousands of potential customers and grow your business with us.
                </Typography>
                <Button variant="contained" color="primary" href="#contact">Get Started</Button>
            </Container>
        </HeroSectionStyle>
    )
}
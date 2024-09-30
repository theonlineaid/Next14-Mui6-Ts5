import React from 'react'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';

type Props = {}

export default function WhyChooseUs({ }: Props) {
    return (

      
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
    )
}
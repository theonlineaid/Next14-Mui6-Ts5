import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Step details including titles, descriptions, and associated icons
const steps = [
    {
        title: 'Signup for Free',
        description: 'Create your account through our website or mobile app with just your phone number',
        icon: <AccountCircleIcon sx={{ fontSize: 50, color: 'warning.main' }} />,
    },
    {
        title: 'Add Profile Information',
        description: 'Complete your profile by providing your email and store name so that we can identify you',
        icon: <StoreIcon sx={{ fontSize: 50, color: 'warning.main' }} />,
    },
    {
        title: 'Add Address Information',
        description: 'Provide all address details of your business',
        icon: <HomeIcon sx={{ fontSize: 50, color: 'warning.main' }} />,
    },
    {
        title: 'Add ID & Bank Information',
        description: 'Add in your ID & Business related details. Include necessary bank information for payments',
        icon: <CreditCardIcon sx={{ fontSize: 50, color: 'warning.main' }} />,
    },
    {
        title: 'List Products',
        description: 'Add products to your store through seller center. Start selling as soon as your products go live after going through quality control',
        icon: <ShoppingCartIcon sx={{ fontSize: 50, color: 'warning.main' }} />,
    },
];

export default function StepsSection() {
    return (
        <Box sx={{ py: 5 }}>
            <Typography variant="h4" align="left" gutterBottom>
                5 Simple Steps to Start Selling
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {steps.map((step, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={2.4}
                        key={index}
                        sx={{ flexBasis: { xs: '100%', sm: '50%', md: '20%' } }}
                    >
                        <Card sx={{ height: '100%', textAlign: 'left', background: "transparent", color: "#fff", py: 3 }}>

                            <CardContent sx={{ px: 0 }}>
                                <Box>{step.icon}</Box>
                                <Typography variant="body2" component="div"sx={{pb: 2}}>
                                    {step.title}
                                </Typography>
                                <Typography variant="caption" component="div">
                                    {step.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

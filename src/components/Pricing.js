import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const table1 = [
  'Appointment Booking',
  'Personal Website',
  'Calendar Integration',
  'WhatsApp Notification',
  'Secure Payments',
];

const table2 = [
  'In-App Chat',
  'Community of MHPs',
  'Journals',
  'Client Profile',
  'Client Chat Platform',
];

export default function Pricing() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="pricing" sx={{ py: 8 }}>
      <Container
        id="pricing"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ color: 'text.primary' }}
          >
            Pricing
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Serene MINDS is completely FREE for mental health professionals! Focus on your practice without worrying about costs—our platform provides essential tools for client management, appointment booking, secure communication, and more at no charge. Get started today and streamline your workflow effortlessly!
          </Typography>
        </Box>
        <Card
          sx={{
            p: { xs: 3, sm: 4 },
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1200px',
            border: '1px solid',
            borderColor: 'divider', // Use default border color for light theme
            background: 'background.paper', // Use default background color for light theme
            boxShadow: '0 8px 12px hsla(220, 20%, 42%, 0.1)', // Lighter shadow
            color: 'text.primary', // Use default text color for light theme
            gap: { xs: 4, sm: 6 },
            height: { xs: 'auto', sm: '400px' }, // Increased height for desktop
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobile ? '100%' : '30%',
              textAlign: 'center',
            }}
          >
            <Typography
              component="h3"
              variant="h1"
              sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }} // Use primary.main for better contrast
            >
              FREE
            </Typography>
          </Box>
          <Box
            sx={{
              width: isMobile ? '100%' : '70%',
              pl: isMobile ? 0 : 4,
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                {table1.map((feature) => (
                  <Box
                    key={feature}
                    sx={{ py: 1.5, display: 'flex', gap: 1.5, alignItems: 'center' }}
                  >
                    <CheckCircleRoundedIcon sx={{ width: 20, color: 'primary.main' }} /> {/* Use primary.main */}
                    <Typography variant="subtitle2" component={'span'}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Grid>
              <Grid item xs={12} sm={6}>
                {table2.map((feature) => (
                  <Box
                    key={feature}
                    sx={{ py: 1.5, display: 'flex', gap: 1.5, alignItems: 'center' }}
                  >
                    <CheckCircleRoundedIcon sx={{ width: 20, color: 'primary.main' }} /> {/* Use primary.main */}
                    <Typography variant="subtitle2" component={'span'}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
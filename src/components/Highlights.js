import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EditNoteIcon from '@mui/icons-material/EditNote';

const items = [
  {
    icon: <CalendarMonthIcon />,
    title: 'Appointment Booking',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    icon: <DevicesIcon />,
    title: 'Personalized Website',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <PeopleIcon />,
    title: 'Professional Community',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <ChatIcon />,
    title: 'In-App Chat',
    description:
      'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  },
  {
    icon: <HealthAndSafetyIcon />,
    title: 'Client Management',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
  },
  {
    icon: <EditNoteIcon />,
    title: 'Journals',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
];

export default function Highlights() {
  return (
    <Box id="features" sx={{ py: 8 }}>
      <Box
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          color: 'text.primary', // Use default text color for light theme
          bgcolor: 'background.paper', // Use default background color for light theme
        }}
      >
        <Container
          sx={{
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
            <Typography component="h2" variant="h4" gutterBottom>
              Features
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Discover what makes Serene MINDS the perfect solution for mental health professionals: effortless adaptability, a user-friendly interface, secure patient management. Streamline your practice with our tools.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Stack
                  direction="column"
                  component={Card}
                  spacing={1}
                  useFlexGap
                  sx={{
                    color: 'inherit',
                    p: 3,
                    height: '100%',
                    borderColor: 'divider', // Use default border color for light theme
                    backgroundColor: 'background.default', // Use default card background color for light theme
                  }}
                >
                  <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                  <div>
                    <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </div>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
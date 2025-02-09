import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: '6px solid hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url('https://images.unsplash.com/photo-1738686278516-8ee734918710?q=80&w=2016&auto=format&fit=crop')`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(5),
    height: 700,
  },
}));

export default function Hero() {
  const [openModal, setOpenModal] = React.useState(false);
  const [timeRemaining, setTimeRemaining] = React.useState(calculateTimeRemaining());
  const [showButton, setShowButton] = React.useState(false);
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  React.useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);

      if (remaining.total <= 0) {
        clearInterval(timer);
        setShowButton(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGetStartedClick = () => {
    if (isDesktop) {
      window.location.href = 'https://professional.sereneminds.life/';
    } else {
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'block',
              fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
              textAlign: 'center',
              whiteSpace: { xs: 'normal', sm: 'normal', md: 'nowrap' },
              lineHeight: 1.2,
            }}
          >
            The simplest way to manage your
          </Typography>
          <Typography
            variant="h1"
            sx={(theme) => ({
              fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
              textAlign: 'center',
              color: 'primary.main',
              lineHeight: 1.2,
            })}
          >
            Mental Health Practice
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
              mt: 2,
            }}
          >
            Serene MINDS is a FREE community for psychologists to connect,
            collaborate, and streamline their practice with tools like
            appointment booking, a personal website, client management system,
            etc.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            sx={{
              pt: 2,
              width: { xs: '100%', sm: '100%' },
              justifyContent: 'center',
            }}
          >
            {showButton ? (
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: { xs: '100%', sm: '400px' } }}
                onClick={handleGetStartedClick}
              >
                Get Started
              </Button>
            ) : (
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                {`${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`}
              </Typography>
            )}
          </Stack>
        </Stack>
        <StyledBox />
      </Container>

      {/* Modal for Mobile/Tablet */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '400px' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography id="modal-title" variant="h6" sx={{ mb: 2 }}>
            Serene MINDS is Live!
          </Typography>
          <Typography id="modal-description" sx={{ mb: 3 }}>
            Use Desktop, Laptop, or any other bigger screen to access for a better
            experience. We are working to make it available on mobile.
          </Typography>
          <Button variant="contained" onClick={handleCloseModal}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

function calculateTimeRemaining() {
  const targetDate = new Date('2025-02-17T14:00:00');
  const now = new Date();
  const total = targetDate - now;

  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { days, hours, minutes, seconds, total };
}
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './SitemarkIcon';
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
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

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSignUpClick = () => {
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
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small" href="#highlights">
                Highlights
              </Button>
              <Button variant="text" color="info" size="small" href="#features">
                Features
              </Button>
              <Button variant="text" color="info" size="small" href="#pricing">
                Pricing
              </Button>
              <Button variant="text" color="info" size="small" href="#faq" sx={{ minWidth: 0 }}>
                FAQ
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {showButton ? (
              <Button
                color="secondary"
                variant="contained"
                size="small"
                onClick={handleSignUpClick}
              >
                Sign up
              </Button>
            ) : (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem component="a" href="#highlights">
                  Highlights
                </MenuItem>
                <MenuItem component="a" href="#features">
                  Features
                </MenuItem>
                <MenuItem component="a" href="#pricing">
                  Pricing
                </MenuItem>
                <MenuItem component="a" href="#faq">
                  FAQ
                </MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  {showButton ? (
                    <Button
                      color="secondary"
                      variant="outlined"
                      fullWidth
                      onClick={handleSignUpClick}
                    >
                      Sign in
                    </Button>
                  ) : (
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        textAlign: 'center',
                        width: '100%',
                      }}
                    >
                      {`${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`}
                    </Typography>
                  )}
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
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
    </AppBar>
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
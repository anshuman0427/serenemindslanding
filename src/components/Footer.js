import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <RouterLink to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        Serene MINDS (Serenepulse Technologies Private Limited)
      </RouterLink>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
            mb: 4,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Serene MINDS
            </Typography>
            <Typography variant="body2">
              Empowering wellness through innovative technology.
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton color="inherit" href="https://instagram.com/sereneminds.life" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" href="https://www.linkedin.com/company/sereneminds-app/" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Product
            </Typography>
            <RouterLink to="/#highlights" style={{ textDecoration: 'none', color: 'inherit' }}>
              Highlights
            </RouterLink>
            <RouterLink to="/#features" style={{ textDecoration: 'none', color: 'inherit' }}>
              Features
            </RouterLink>
            <RouterLink to="/#pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
              Pricing
            </RouterLink>
            <RouterLink to="/#faq" style={{ textDecoration: 'none', color: 'inherit' }}>
              FAQs
            </RouterLink>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Legal
            </Typography>
            <RouterLink to="/terms" style={{ textDecoration: 'none', color: 'inherit' }}>
              Terms of Use
            </RouterLink>
            <RouterLink to="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
              Privacy Policy
            </RouterLink>
            <RouterLink to="/refund-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
              Refund Policy
            </RouterLink>
            <RouterLink to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              Contact
            </RouterLink>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/SM.png"
              alt="Serene MINDS"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid',
            borderColor: 'divider',
            pt: 4,
          }}
        >
          <Copyright />
          <Stack direction="row" spacing={2} sx={{ mt: { xs: 2, sm: 0 } }}>
            <RouterLink
              to="/privacy-policy"
              style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-2px',
                  width: '0%',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  transition: 'width 0.3s ease-in-out',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Privacy Policy
            </RouterLink>
            <Typography sx={{ opacity: 0.5 }}>•</Typography>
            <RouterLink
              to="/terms"
              style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-2px',
                  width: '0%',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  transition: 'width 0.3s ease-in-out',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Terms of Use
            </RouterLink>
            <Typography sx={{ opacity: 0.5 }}>•</Typography>
            <RouterLink
              to="/refund-policy"
              style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-2px',
                  width: '0%',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  transition: 'width 0.3s ease-in-out',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Refund Policy
            </RouterLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
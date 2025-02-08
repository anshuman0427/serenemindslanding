import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://sereneminds.life/">
        Serene MINDS (Serenepulse Technologies Private Limited)
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff', // Explicitly set light background
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
              <IconButton
                color="inherit"
                href="https://instagram.com/sereneminds.life"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com/company/sereneminds-app/"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Product
            </Typography>
            <Link color="inherit" variant="body2" href="#">
              Highlights
            </Link>
            <Link color="inherit" variant="body2" href="#">
              Features
            </Link>
            <Link color="inherit" variant="body2" href="#">
              Pricing
            </Link>
            <Link color="inherit" variant="body2" href="#">
              FAQs
            </Link>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Legal
            </Typography>
            <Link color="inherit" variant="body2" href="#">
              Terms of Use
            </Link>
            <Link color="inherit" variant="body2" href="#">
              Privacy Policy
            </Link>
            <Link color="inherit" variant="body2" href="#">
              Refund Policy
            </Link>
            <Link color="inherit" variant="body2" href="#">
              Contact
            </Link>
          </Box>

          {/* Add Serene MINDS image here */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/SM.png" // Path to the image in the public folder
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
            <Link color="inherit" variant="body2" href="#">
              Privacy Policy
            </Link>
            <Typography sx={{ opacity: 0.5 }}>•</Typography>
            <Link color="inherit" variant="body2" href="#">
              Terms of Use
            </Link>
            <Typography sx={{ opacity: 0.5 }}>•</Typography>
            <Link color="inherit" variant="body2" href="#">
              Refund Policy
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
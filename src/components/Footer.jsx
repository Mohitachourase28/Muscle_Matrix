/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';

const Footer = () => (
  <FooterContainer mt="80px" width="100%">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '40px', height: '40px' }} />
      <Typography variant="h2" sx={{ fontSize: { lg: '1.2rem', xs: '1.2rem' }, color: '#fff' }}>Muscle Matrix</Typography>
    </Stack>
    <Typography className="creator" variant="h5" sx={{ fontSize: { lg: '1.2rem', xs: '1rem' } }} mt="20px" textAlign="center" pb="40px">
      Created by <a href="https://github.com/Mohitachourase28">Mohita Chourase</a>
    </Typography>
  </FooterContainer>
);

const FooterContainer = styled(Box)`
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  background: #191f2a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  .creator {
    color: #fff;
    a {
      text-decoration: none;
      color: #1460e5;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 1.2rem;
  }
`;

export default Footer;

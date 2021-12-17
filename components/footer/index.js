import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const imgStyle = {
  width: '60%',
};

const Footer = ({
  logoUrl = 'https://db-preview.avetti.io/static/logo-f578192c5848492e40d4b7e3a352a54b.jpg',
}) => {
  const footerLinks = [
    {
      name: 'Quick Links',
      children: [
        {
          title: 'Palm Oil Products',
          url: 'https://google.com',
        },
        {
          title: 'Oleo And Derivatives',
          url: 'https://google.com',
        },
        {
          title: 'Biodiesel Products',
          url: 'https://google.com',
        },
      ],
    },
    {
      name: 'Help',
      children: [
        {
          title: 'About Us',
          url: 'https://google.com',
        },
        {
          title: 'Cookie Policy',
          url: 'https://google.com',
        },
      ],
    },
    {
      name: 'Contact Us',
      children: [
        {
          title: 'E-mail : info@dibizglobal.com',
          url: 'https://google.com',
          targetBlank: true,
        },
        {
          title: 'Contact Us',
          url: 'https://google.com',
          targetBlank: true,
        },
      ],
    },
  ];

  const icons = [
    {
      type: 'facebook',
      url: 'https://facebook.com',
    },
    {
      type: 'linkedin',
      url: 'https://facebook.com',
    },
    {
      type: 'twitter',
      url: 'https://facebook.com',
    },
  ];

  const renderQuickLinks = (arrayOfLinks) => {
    return arrayOfLinks.map((section) => (
      <Grid item xs>
        <Stack spacing={2}>
          <Typography variant="subtitle1" gutterBottom component="div">
            {section.name}
          </Typography>
          {section.children.map((child) => (
            <Link href={child.url} target="_blank">
              {child.title}
            </Link>
          ))}
        </Stack>
      </Grid>
    ));
  };

  const renderSocialIcon = (arrayOfIcons) => {
    if (arrayOfIcons.length === 0) {
      return null;
    }
    return (
      <Stack direction="row" spacing="2">
        {arrayOfIcons.map((icon) => {
          switch (icon.type) {
            case 'facebook':
              return (
                <IconButton aria-label="facebook" href={icon.url} target="_blank">
                  <FacebookIcon fontSize="large" />
                </IconButton>
              );
            case 'twitter':
              return (
                <IconButton aria-label="twitter" href={icon.url} target="_blank">
                  <TwitterIcon fontSize="large" />
                </IconButton>
              );
            case 'linkedin':
              return (
                <IconButton aria-label="linkedin" href={icon.url} target="_blank">
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              );
          }
        })}
      </Stack>
    );
  };

  return (
    <>
      <footer>
        <Paper elevation={0}>
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={3}>
                <ImageListItem key="1">
                  <img
                    style={imgStyle}
                    src={`${logoUrl}?w=10&h=13&fit=crop&auto=format`}
                    srcSet={`${logoUrl}?w=13&h=13&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                    alt="as"
                  />
                  {renderSocialIcon(icons)}
                </ImageListItem>
              </Grid>
              {renderQuickLinks(footerLinks)}
            </Grid>
          </Box>
        </Paper>
      </footer>
    </>
  );
};

export default Footer;

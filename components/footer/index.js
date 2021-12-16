import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>Logo</Item>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={2}>
            <Item>Quick Links</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Item>Help</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Contact Us</Item>
        </Grid>
      </Grid>
      {/*<footer id="footer">*/}
      {/*  <div className="new-footer" style={{ maxWidth: '100%' }}>*/}
      {/*    <div className="columns " style={{ maxWidth: '100%' }}>*/}
      {/*      <div className="footer-container">*/}
      {/*        <div className="menu-footer" id="socialMedia">*/}
      {/*          <div className="footerLogo pull-left">*/}
      {/*            /!*<img src={Logo} alt="DIBIZ Logo" />*!/*/}
      {/*            /!* <ul>{renderLinks(footerContent.socialMedia)}</ul> *!/*/}
      {/*            <ul>*/}
      {/*              <li className="socialMedia">*/}
      {/*                <a*/}
      {/*                  target="_blank"*/}
      {/*                  href="https://www.facebook.com/dibizglobal"*/}
      {/*                  rel="noopener noreferrer"*/}
      {/*                >*/}
      {/*                  <FontAwesomeIcon className="footerSocial fbb" icon={faFacebookF} />*/}
      {/*                </a>*/}
      {/*                <a*/}
      {/*                  target="_blank"*/}
      {/*                  href="https://www.linkedin.com/company/dibizglobal"*/}
      {/*                  rel="noopener noreferrer"*/}
      {/*                >*/}
      {/*                  <FontAwesomeIcon className="footerSocial in" icon={faLinkedinIn} />*/}
      {/*                </a>*/}
      {/*                <a*/}
      {/*                  target="_blank"*/}
      {/*                  href="https://www.youtube.com/c/DIBIZGlobal"*/}
      {/*                  rel="noopener noreferrer"*/}
      {/*                >*/}
      {/*                  <FontAwesomeIcon className="footerSocial yt" icon={faYoutube} />*/}
      {/*                </a>*/}
      {/*              </li>*/}
      {/*            </ul>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className="menu-footer" id="quickLinks">*/}
      {/*          <h3>Quick Links</h3>*/}
      {/*          /!*<ul>{renderLinks(footerContent.quickLinks)}</ul>*!/*/}
      {/*        </div>*/}
      {/*        <div className="menu-footer" id="about">*/}
      {/*          <h3>Help</h3>*/}
      {/*          /!*<ul>{renderLinks(footerContent.about)}</ul>*!/*/}
      {/*        </div>*/}

      {/*        <div className="menu-footer" id="shop">*/}
      {/*          <h3>Contact Us</h3>*/}
      {/*          /!*<ul>{renderLinks(footerContent.shop)}</ul>*!/*/}
      {/*        </div>*/}
      {/*        <div className="liHead" id="socialMedia-menu">*/}
      {/*          /!*{translate("socialMedia")}*!/*/}
      {/*          <i*/}
      {/*            className="hidden-md hidden-lg hidden-sm fas fa-plus-circle global--one-column pull-right"*/}
      {/*            id="global--mobile-socialMedia-expand"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="finePrintWrapper">*/}
      {/*    <div className="finePrintLinks">*/}
      {/*      <a href="https://dibizglobal.com/privacy-policy/">Privacy Policy</a>*/}
      {/*      <a href="https://dibizglobal.com/terms-condition/">Terms Of Use</a>*/}
      {/*    </div>*/}
      {/*    /!*<div id="finePrint">{finePrint}</div>*!/*/}
      {/*  </div>*/}
      {/*</footer>*/}
    </Box>
  );
};

export default Footer;

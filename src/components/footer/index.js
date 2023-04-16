import React from 'react'
import { FooterAnchorTag, FooterContainer, FooterULContainer } from './footer-styled'
import { Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
      <FooterContainer>
          <Typography>Copyright &copy; 2023</Typography>
          <FooterULContainer>
              <FooterAnchorTag>
                  <LinkedInIcon/>
              </FooterAnchorTag>
              <FooterAnchorTag>
                  <InstagramIcon/>
              </FooterAnchorTag>
              <FooterAnchorTag>
                  <FacebookIcon/>
              </FooterAnchorTag>
          </FooterULContainer>
    </FooterContainer>
  )
}

export default Footer
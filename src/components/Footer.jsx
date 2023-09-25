import React from 'react'
import { Container, IconButton, Grid, Typography, Divider } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import { delay, motion } from 'framer-motion'

export default function Footer() {
  const divVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      duration: 1.8,
    },
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.7 }}
      >
        <Divider />

        <footer
          id='footer'
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '20px 0',
          }}
        >
          <Container maxWidth='lg'>
            <Grid className='footer-container' container justifyContent='space-between' alignItems='center'>
              <Grid item>
                <IconButton>
                  <FacebookIcon style={{ color: 'white' }} />
                </IconButton>
                <IconButton>
                  <TwitterIcon style={{ color: 'white' }} />
                </IconButton>
                <IconButton>
                  <InstagramIcon style={{ color: 'white' }} />
                </IconButton>
                <IconButton>
                  <LinkedInIcon style={{ color: 'white' }} />
                </IconButton>
                <IconButton>
                  <PinterestIcon style={{ color: 'white' }} />
                </IconButton>
              </Grid>
              <Grid item className='footer-text-container'>
                <div
                  style={{
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  <Typography variant='body2'>
                    <LocationOnIcon /> 476 Sunshine Boulevard,
                    <br />
                    Los Angles, CA 90001
                  </Typography>
                  <Typography style={{ color: 'white' }} variant='body2'>
                    <PhoneIcon /> (650) 356-7890
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </footer>
      </motion.div>
    </>
  )
}

import { Button } from '@mui/material'
import React from 'react'
import { delay, motion } from 'framer-motion'

export default function HeroSection() {
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
    <motion.div
      id='home'
      variants={divVariants}
      initial='hidden'
      animate='visible'
      transition={{ delay: 0.3, duration: 1.5 }}
      style={{}}
    >
      <div
        className='hero-div'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          display: 'flex',
          borderBottom: '1px solid #151c5214',
        }}
      >
        <div style={{ flex: 1 }} className='hero-div'>
          <div
            style={{
              marginTop: '-12rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '600px',
            }}
          >
            <div>
              <h1 style={{ marginBlock: '3rem' }}>Supreme Detail</h1>
            </div>
            <h4 style={{ marginBlock: '5rem', lineHeight: '1.5' }}>
              Enhance Your Vehicle's Beauty, Restore Its Shine, and Protect Your Investment
            </h4>
            <p style={{ lineHeight: '1.8rem' }}>
              Experience top-notch car detailing services that will leave your vehicle looking showroom-ready.
              Our skilled team is dedicated to preserving your car's aesthetics and providing long-lasting
              protection against the elements.
            </p>
            <motion.div
              style={{
                display: 'flex',
              }}
            >
              <Button
                className='hero-button'
                variant='outlined'
                style={{
                  marginBlock: '3rem',
                  borderRadius: '10px',
                  padding: '0.5rem',
                  color: 'white',
                  borderColor: 'gray',
                  letterSpacing: '2px',
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
        <div className='hero-img' style={{ flex: 2, maxWidth: '50vw' }}>
          <img
            style={{ objectFit: 'cover', width: '100%', height: '100vh' }}
            src='/popescu-andrei-alexandru-KQjBXXPRsYM-unsplash.jpg'
            alt=''
          />
        </div>
      </div>
      {/* mobile jsx  */}
      <div
        className='gradient'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'gradient(rgba(0,0,0,0.9))',
          zIndex: '1',
        }}
      ></div>
      <div
        style={{ display: 'none', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}
        className='hero-mobile-div'
      >
        <div className='mobile-div'>
          <div
            className='mobile-text'
            style={{
              marginTop: '-12rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '600px',
            }}
          >
            <h1 className='hero-h1' style={{ marginBlock: '3rem' }}>
              Supreme Detail
            </h1>
            <h4 className='hero-h4' style={{ marginBlock: '5rem', lineHeight: '1.5' }}>
              Enhance Your Vehicle's Beauty, Restore Its Shine, and Protect Your Investment
            </h4>
            <p className='hero-p' style={{ lineHeight: '1.8rem' }}>
              Experience top-notch car detailing services that will leave your vehicle looking showroom-ready.
              Our skilled team is dedicated to preserving your car's aesthetics and providing long-lasting
              protection against the elements.
            </p>
            <motion.div
              style={{
                display: 'flex',
              }}
            >
              <Button
                className='hero-button'
                variant='outlined'
                style={{
                  marginBlock: '3rem',
                  borderRadius: '10px',
                  padding: '0.5rem',
                  color: 'white',
                  borderColor: 'gray',
                  letterSpacing: '2px',
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

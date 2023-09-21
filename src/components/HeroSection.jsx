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
      className='hero-div'
      variants={divVariants}
      initial='hidden'
      animate='visible'
      transition={{ delay: 0.3, duration: 1.5 }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        display: 'flex',
        borderBottom: '1px solid #151c5214',
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            marginTop: '-12rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '600px',
          }}
        >
          <h1 style={{ marginBlock: '3rem' }}>Supreme Detail</h1>
          <h4 style={{ marginBlock: '5rem' }}>
            Enhance Your Vehicle's Beauty, Restore Its Shine, and Protect Your Investment
          </h4>
          <p>
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
          src='../../public/popescu-andrei-alexandru-KQjBXXPRsYM-unsplash.jpg'
          alt=''
        />
      </div>
    </motion.div>
  )
}

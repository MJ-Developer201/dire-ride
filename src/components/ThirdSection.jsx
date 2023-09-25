import React from 'react'
import { motion } from 'framer-motion'

export default function ThirdSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.7 }}
    >
      <div
        className='experts-desktop-container'
        style={{
          display: 'flex',
          borderBottom: '1px solid #151c5214',
          height: '100vh',
          maxHeight: '300px',
          justifyItems: 'center',
          alignItems: 'center',
          marginLeft: '20rem',
        }}
      >
        <div style={{ flex: 2, paddingLeft: '2.5rem' }}>
          <h2
            style={{
              paddingBlock: '1rem',
              fontWeight: '300',
              paddingTop: '3rem',
            }}
          >
            Meet Our Expert Detailers
          </h2>

          <p
            style={{
              marginBlock: '1rem',
              fontWeight: '200',
              lineHeight: '2.1rem',
              maxWidth: '57ch',
            }}
          >
            At Supreme Detailing, we take pride in our team of expert car detailers. They have years of
            experience and are passionate about making your vehicle look its best.
          </p>
        </div>
        <div style={{ maxWidth: '40%' }}>
          <img
            style={{
              objectFit: 'cover',
              height: '300px',
              maxWidth: '100%',
            }}
            src='/deniz-demirci-0UeHGWsFyHM-unsplash.jpg'
            alt=''
          />
        </div>
      </div>
      <div className='experts-mobile-outer' style={{ display: 'none' }}>
        <div className='experts-mobile-container'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBlock: '1rem',
            }}
          >
            <h2
              style={{
                paddingBlock: '1rem',
                fontWeight: '300',
                paddingTop: '3rem',
              }}
            >
              Meet Our Expert Detailers
            </h2>

            <p
              style={{
                marginBlock: '1rem',
                fontWeight: '200',
                lineHeight: '2.1rem',
                maxWidth: '70ch',
              }}
            >
              At Supreme Detailing, we take pride in our team of expert car detailers. They have years of
              experience and are passionate about making your vehicle look its best.
            </p>
          </div>
          <div style={{}}>
            <img
              style={{
                objectFit: 'cover',
                maxWidth: '100%',
              }}
              src='/deniz-demirci-0UeHGWsFyHM-unsplash.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

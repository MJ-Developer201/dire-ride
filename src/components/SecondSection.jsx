import React from 'react'
import { motion } from 'framer-motion'
import '../style/secondSection.css'

export default function BelowTheFold() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.7 }}
      >
        <div style={{ display: 'flex' }} className='desktop-container'>
          <div
            className='welcome-div'
            style={{
              display: 'flex',
              borderBottom: '1px solid #151c5214',
              height: '100vh',
              maxHeight: '300px',
              justifyItems: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className='welcome-inner-div'
              style={{
                flex: 1,
                order: 2,
                maxWidth: '600px',
                paddingLeft: '2.5rem',
              }}
            >
              <h2
                style={{
                  paddingBlock: '1rem',
                  fontWeight: '300',
                  paddingTop: '3rem',
                }}
              >
                Welcome to Supreme Detailing
              </h2>

              <p
                style={{
                  marginBlock: '1rem',
                  fontWeight: '200',
                  lineHeight: '2.1rem',
                  maxWidth: ' 57ch',
                }}
              >
                Explore the world of car detailing with us, discover expert tips, and find the best products
                to keep your vehicle in showroom condition.
              </p>
            </div>
            <div className='welcome-img-div' style={{ flex: 2, maxWidth: '40%' }}>
              <img
                style={{
                  objectFit: 'cover',
                  height: '300px',
                  maxWidth: '100%',
                }}
                src='/william-daigneault-xm8S8wnCcC0-unsplash.jpg'
                alt=''
              />
            </div>
          </div>

          <div style={{}} className='desktop-container'>
            <div className='text-div'>
              <h2
                style={{
                  paddingBlock: '1rem',
                  fontWeight: '300',
                  paddingTop: '3rem',
                }}
              >
                Welcome to Supreme Detailing
              </h2>

              <p
                style={{
                  marginBlock: '1rem',
                  fontWeight: '200',
                  lineHeight: '2.1rem',
                  maxWidth: ' 57ch',
                }}
              >
                Explore the world of car detailing with us, discover expert tips, and find the best products
                to keep your vehicle in showroom condition.
              </p>
            </div>
            <div>
              <img
                style={{
                  objectFit: 'cover',

                  maxWidth: '100%',
                }}
                src='/william-daigneault-xm8S8wnCcC0-unsplash.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

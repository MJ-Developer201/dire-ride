import React from 'react'
import { motion } from 'framer-motion'

export default function FifthSection() {
  return (
    <motion.div
      className=''
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.7 }}
      style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #151c5214' }}
    >
      <div style={{}}>
        <img
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          src='/chuttersnap-gts_Eh4g1lk-unsplash.jpg'
          alt=''
        />
      </div>

      <div>
        <img
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          src='/maxim-hopman-2GqwfocQI6Q-unsplash.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          src='/timothy-dykes-np52xKlGB-I-unsplash.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          src='/jorge-simmons-valenzuela-dlRbuXvknOc-unsplash.jpg'
          alt=''
        />
      </div>
    </motion.div>
  )
}

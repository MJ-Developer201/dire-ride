import React from 'react'
import { motion } from 'framer-motion'
export default function FourthSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.7 }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '5rem',
        borderBottom: '1px solid #151c5214',
      }}
    >
      <div>
        <h1>Customer-Centric Service</h1>
        <p style={{ maxWidth: '60ch' }}>
          Your satisfaction is our priority. Experience customer service that goes above and beyond..Your
          satisfaction is at the heart of everything we do.
        </p>
      </div>
    </motion.div>
  )
}

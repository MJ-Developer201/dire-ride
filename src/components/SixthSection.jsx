import React from 'react'
import { motion } from 'framer-motion'

export default function SixthSection() {
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
        <h1>Our Services</h1>
        <p style={{ maxWidth: '60ch' }}>From detailing to protection, we've got your vehicle covered</p>
      </div>
    </motion.div>
  )
}

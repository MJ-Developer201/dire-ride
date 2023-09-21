import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import { motion } from 'framer-motion'
import { GiCartwheel } from 'react-icons/gi'
import { TbWheel } from 'react-icons/tb'
import { PiHeadlightsBold } from 'react-icons/pi'
import { GiVacuumCleaner } from 'react-icons/gi'
import { GiAutoRepair } from 'react-icons/gi'
import { MdRestore } from 'react-icons/md'
import { GiCarDoor } from 'react-icons/gi'

export default function SeventhSection() {
  return (
    <motion.div
      className='icons-div'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.7 }}
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyContent: 'space-evenly',
        padding: '3rem',
        gap: '4rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>
          <GiCartwheel />
        </h2>
        <p>
          We offer wheel & tire health service's which includes cleaning, balancing, alignment & rotation to
          maintain the elegance of your vehicle's wheels.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>
          <PiHeadlightsBold />
        </h2>
        <p>
          Illuminate the road with clarity. Our headlight restoration service rejuvenates cloudy or yellowed
          headlights, ensuring they shine brilliantly.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>
          <GiVacuumCleaner />
        </h2>
        <p>
          Interior detail service,a full interior revival with our comprehensive detailing service. Rediscover
          the comfort and freshness of a like-new car.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>
          <MdRestore fontSize={'2.2rem'} />
        </h2>
        <p>
          Experience a full interior revival with our comprehensive detailing service. Rediscover the comfort
          and freshness of a like-new car.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>
          <GiAutoRepair />
        </h2>
        <p>
          Our dent repair service is a blend of artistry and technique. From door dings to hail damage, we
          restore your car's body to perfection.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>
          <GiCarDoor />
        </h2>
        <p>
          Enhance's your car's aesthetics with our premium window tinting service. Enjoy privacy and comfort
          on every journey plus UV ray protection.
        </p>
      </div>
    </motion.div>
  )
}

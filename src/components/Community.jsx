import Card1 from './Card1'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
export default function Community() {
  return (
    <div className='flex flex-col sm:flex-row px-10' id='community'>
      <motion.h1 variants={fadeIn('right', 0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}}  className='w-full sm:w-2/5 heading text-black-bold pr-16 '>Join our vibrant community of space enthusiasts where you can</motion.h1>
      <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}}  className='flex flex-wrap sm:w-3/5'>
        <Card1 
          head="Astronomy 101" 
          body="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe." 
          img="/assets/Group1.png"/>
        <Card1 
          head="Latest Discoveries" 
          body="Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration." 
          img="/assets/Group2.png"/>
        <Card1 
          head="Space Exploration" 
          body="Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations." 
          img="/assets/Group3.png"/>
        <Card1 
          head="Space Technology" 
          body="Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats." 
          img="/assets/Group4.png"/>
      </motion.div>
    </div>
  )
}

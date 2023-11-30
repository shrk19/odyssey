import Card2 from './Card2'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

export default function Education() {
  return (
    <div className='md:px-10 py-4' id='education'>
      <div className='md:h-[300px] h-[400px] w-full bg-[url("/assets/bg2.jpg")] bg-no-repeat bg-cover md:rounded-[40px] flex justify-center'>
        <h1 className='heading w-3/4 mt-10 text-center'>We are committed to making space science accessible to all. Explore our educational resources, including</h1>
      </div>
      <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}}  className='flex flex-col md:flex-row mx-auto md:mt-[-100px] justify-between w-full lg:w-4/5'>
        <Card2 num="01." heading="Online free courses and tutorials" content="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."/>
        <Card2 num="02." heading="Resources for teachers and educators" content="Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats."/>
        <Card2 num="03." heading="Book recommendations and reviews" content="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."/>
      </motion.div>
    </div>
  )
}

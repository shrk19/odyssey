import astronaut from '/assets/astronaut.png'
import Button from './Button'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='mt-14 md:px-10 py-4' id='home'>
        <img className='md:h-[300px] h-[400px] w-full bg-[url("/assets/bg1.jpg")] bg-no-repeat bg-cover md:rounded-[40px]'></img>
        <div className='mt-[-290px] md:mt-[-250px] mx-[10] lg:grid lg:grid-cols-2 lg:grid-rows-2'>
            <div className='flex justify-center items-center' >
                <h1 className='heading text-4xl p-12 pr-20'>Unveiling the Wonders of the Universe</h1>
            </div>
            <div className='flex justify-center lg:row-span-2 '>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}> 
                <img className='w-[360px] drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]' src={astronaut}></img> 
                <div className='bg-black-bold w-[360px] h-[70px] rounded-[16px] px-8 drop-shadow-2xl flex flex-col items-start justify-center'>
                    <p className='text-white text-xs font-thin '>Total time in space</p>
                    <h1 className='text-white content font-bold tracking-[10px]'>352D 5H 49M 20S</h1></div>
                </motion.div>
            </div> 
            <div className='flex flex-col first-letter:'>
                <p className=' content pt-16 px-4'> At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos. </p>
                <div className='pt-4 flex justify-center lg:justify-start'>
                <Button color="bg-black-bold" text="Get Started"/>
                <Button color="bg-black-bold" text="Watch the video"/>
                </div>
            </div>
        </div>
    </div>
    )
}


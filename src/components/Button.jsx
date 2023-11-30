import { motion } from 'framer-motion'
export default function Button(props) {
  return (
    <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }} className={`h-10 md:mx-4 px-10 mt-2 inline-flex justify-center items-center rounded-xl text-white md:text-sm lg:text-base font-semibold ${props.color} shadow-lg shadow-gray-500/50`}>
      <div >
        {props.text}
      </div>
    </motion.button>
  )
}

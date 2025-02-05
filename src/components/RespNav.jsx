/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion"

const RespNav = ({open}) => {
  return (
    <AnimatePresence mode="wait">
        {open && (
            <motion.div
            
            initial ={{opacity:0 , y: -100}}
            animate ={{opacity: 1 , y: 0}}
            exit ={{opacity:0 ,  y: -100}}
            transition={{duration:0.5}}
            className="absolute container h-screen w-full top-20 left-0 right-0 z-20"
            
            >
                <div className="text-[2vw] respMyNav  py-10 h-[70vh] flex items-center justify-center font-semibold uppercase bg-zinc-900 text-white">
                    <ul className="flex gap-10 flex-column justify-center items-center">
                        <li><a className="text-[2vw] text-white" href="#">Home</a></li>
                        <li><a className="text-[2vw] text-white" href="#">Contact</a></li>
                        <li><a className="text-[2vw] text-white" href="#">About</a></li>
                        <li><a className="text-[2vw] text-white" href="#">Sign up</a></li>
                    </ul>
                </div>
            </motion.div>

        )}
    </AnimatePresence>
  )
}

export default RespNav
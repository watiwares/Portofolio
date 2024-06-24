import { HERO_CONTENT } from "../constants";
import  { motion } from "framer-motion";


const container = (delay) => ({
  hidden : { x: -100 , opacitiy: 0},
  visible: {
    x: 0 ,
    opacyitiy : 1,
    transition: {duration:0.5 , delay : delay},
  }

})


const Hero = () => {
  return (
    <div className="border-b border-neutral-1500 pb-10 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full">
            <div className=" flex flex-col items-center  justify-center">
                <motion.h1 
                variants={container(0)}
                intial ="hidden"
                animate = "visible"
                transition = {{duration : 0.5, delay: 2}}
                className=" pb-10 text-6xl font-thin tracking-tight  text-center">Anthonyn Cordelle</motion.h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500
                to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent text-center">(Alternance) Full Stack Developer</span>
                <p className=" my-2 max-w-xl font-light tracking-tighter py-6 text-2xl font-thin text-neutral-500">
                  Portofolio
                </p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

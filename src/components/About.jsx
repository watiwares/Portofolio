import ImgCode from "../assets/code.jpg"
import ImgGaming from "../assets/gaming.jpg"
import ImgPiano from "../assets/Piano.jpg"
import ImgBasket from "../assets/basket.jpg"


import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 font-serif ">
        <h2 className="my-20 text-center text-4xl">About 
            <span className="text-neutral-500">Me</span>
            </h2>
            <div className="flex justify-center ">
                <div className="w-full lg:w-full " lg:p-8>
                    <div className=" items-center justify-center">

                        <div className=" flex flex-wrap gap-5  justify-center items-center ">

                            <img className="rounded-xl max-w-xs w-1/4 " src={ImgGaming} alt="about" />
                            <img className="rounded-xl max-w-s w-1/4" src={ImgCode} alt="about" />
                            <img className="rounded-xl w-1/5" src={ImgPiano} alt="about" />
                            <img className="rounded-xl w-3/12" src={ImgBasket} alt="about" />

                        </div>

                        <div>

                        </div>
                        

                        <div className="flex gap-5">


                        </div>

                    </div>
                </div>
            </div>
                    <div className="w-full lg:w-full text-center">
                        <div className="flex justify-center align-center">
                            <p  className="my-2 max-w-xl py-6 text-center">{ABOUT_TEXT}</p>
                        </div>
                    </div>
    </div>      
  ) 
}

export default About

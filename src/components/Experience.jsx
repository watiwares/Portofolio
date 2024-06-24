import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900pb-4 ">
        <h2 className="mb-20 mt-10 text-center text-4xl">Experience</h2>
    <div>
        {/* à revoir */}
        {EXPERIENCES.map((experience,index)=> (
            <div 
            key={index} 
            className="mb-8 flex  mx-1 justify-center"
            >    
                <div className="w-full lg:w-1/4 ">
                    <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                
                </div>

                <div className="items-center flex flex-wrap justify-center gap-4 w-full max-w-xl sm:text-center ">
                    <h6 className="mb-2 font-semibold">{experience.role} - {""} 
                    <span className="text-sm text-purple-100"> 
                        {experience.company}</span>
                    </h6>
                    <p className="mb-4 text-neutral-400">{experience.description}</p> 
                    {experience.technologies.map((tech, index) => (                    
                        <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                    ) )}

                </div>
            </div>       
        ))}
    </div>

    </div>      
  )
}

export default Experience

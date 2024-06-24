import { PROJECTS } from "../constants"

const Projects = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 text-center  ">
        <h2 className="bg-gradient-to-r from-pink-300 via-slate-500
                to-purple-500 bg-clip-text my-20 text-4xl  sm:text-left"></h2>
                <span className=" bg-gradient-to-r from-pink-300 via-slate-500
                to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent "> Projects</span>
        <div>
        {PROJECTS.map((project,index) =>(
          
          <div key={index} className="mb-8  lg:flex justify-center mt-20    ">
                <div className="flex justify-center">
                  
                
                <img  src=
                {project.image} 
                width={150} 
                height={1} 
                alt={project.title} 
                className="mb-6 rounded object-cover h-30 w-80 "
                />

                </div>
                <div className=" m-2 text-center  ">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>

                    <p className="mb-4 text-neutral-400"><a href="https://watiwares.github.io/Clock/">{project.description1}</a></p>
                    <p className="mb-4 text-neutral-400"><a href="https://watiwares.github.io/NomreMystere/">{project.description2}</a></p>
                    <p className="mb-4 text-neutral-400"><a href="https://watiwares.github.io/Chess/">{project.description3}</a></p>

                    

                    {project.technologies.map((tech,index) => (
                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1  font-medium text-purple-900 ">{tech}</span>
                    ))}
                </div>

            </div>
        ))}


        </div>
      </div>
    )
  }
  
  export default Projects
  
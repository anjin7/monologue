import { projects } from "./db";

export default function Project() {
  return (
    <div className='relative w-[80vw] min-w-[340px] max-w-[1080px] flex items-center justify-center my-6 mx-auto'>
      <div className='w-[96%] my-8 mx-auto'>
        <ul className='grid grid-cols-1 gap-4 text-gray-500 font-extrabold lg:grid-cols-2'>
          {projects.map((project) => (
            <li key={project.id} className='bg-[#fcfaf2]/30 h-[480px] w-[100%] p-4 rounded-lg'>
              <h3 className='m-2'>{ project.title }</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 '>
              <div className='mx-auto my-4 w-[90%] bg-white/50 h-[240px] rounded-lg text-center py-4 md:col-span-2 lg:col-span-1'>img</div>
              <ul className='grid gap-2 my-6 mx-2'>
                  {project.skills === null ?  "" : project.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
              </ul>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
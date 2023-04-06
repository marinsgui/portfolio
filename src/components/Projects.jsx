import Image from 'next/image'

import moviesLib from '../assets/projects/movieslib.png'
import panelinha from '../assets/projects/panelinha.png'
import tasks from '../assets/projects/tasks.png'

export default function Projects() {
    const projects = [
        {
            id: 1,
            src: moviesLib,
            code: 'https://github.com/marinsgui/movies-lib',
            project: 'https://movies-lib-blond.vercel.app/',
        },
        {
            id: 2,
            src: panelinha,
            code: 'https://github.com/marinsgui/panelinha',
            project: 'https://panelinha.vercel.app/',
        },
        {
            id: 3,
            src: tasks,
            code: 'https://github.com/marinsgui/tasks',
            project: 'https://tasks-tau-six.vercel.app/',
        },
    ]

  return (
    <div name='Projetos' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center md:items-start w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projetos</p>
                <p className='py-6'>Veja alguns dos meus projetos aqui</p>
            </div>

              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0'>
                  {projects.map(project => (
                      <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
                          <Image src={project.src} alt='Projeto' className='rounded-md duration-200 hover:scale-105' />
                          <div className='flex justify-center items-center'>
                            <a 
                                href={project.project} 
                                target='_blank' 
                                rel='external' 
                                className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                            >Projeto</a>
                            <a 
                                href={project.code} 
                                target='_blank' 
                                rel='external' 
                                className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                            >Código</a>
                          </div>
                      </div>
                  ))}
              </div>
        </div>
    </div>
  )
}

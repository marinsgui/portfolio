// images
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import javascriptImg from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import tailwindImg from '../assets/tailwind.png'
import nextjsImg from '../assets/nextjs.png'
import githubImg from '../assets/github.png'
import bootstrapImg from '../assets/bootstrap.png'

import Image from 'next/image'

export default function Skills() {
    const skills = [
        {
            id: 1,
            src: htmlImg,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: cssImg,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascriptImg,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImg,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwindImg,
            title: 'TailwindCSS',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextjsImg,
            title: 'NextJS',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: githubImg,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 8,
            src: bootstrapImg,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
    ]

    return (
        <div name='Habilidades' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-24'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center
            items-center md:items-start w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Habilidades</p>
                    <p className='py-6'>Estas são as tecnologias que eu utilizo:</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {skills.map(skill => (
                        <div key={skill.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill.style}`}>
                            <Image src={skill.src} alt='Tecnologia' className='w-20 mx-auto' />
                            <p className='mt-4'>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

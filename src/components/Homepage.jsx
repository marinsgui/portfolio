import Image from 'next/image'

import jsAnimated from '../assets/javascript-frameworks-animate.svg'

import { MdOutlineArrowForwardIos } from 'react-icons/md' 

import { Link } from 'react-scroll'

export default function Homepage() {
    return (
        <main name="Home" className='h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white md:pt-24'>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center px-4 md:flex-row gap-24'>
                <div className='flex flex-col justify-center h-full max-w-md'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        Sou um desenvolvedor front-end
                    </h2>
                    <p className='text-gray-500 py-4'>
                        Desenvolvedor Front-End. Possuo conhecimento em HTML, CSS, JavaScript, React e outras tecnologias da web. Sou apaixonado por design e UX, e busco sempre criar soluções atraentes e intuitivas para o usuário.
                        Possuo forte capacidade de trabalho em equipe e sou capaz de colaborar com desenvolvedores de back-end para entregar projetos de alta qualidade no prazo estabelecido.
                        Estou sempre buscando me atualizar e aprender com as últimas tendências e tecnologias do mercado.
                    </p>

                    <div>
                        <Link
                        to='Projetos'
                        smooth
                        duration={500} 
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                        >
                            Projetos
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowForwardIos size={20} className='pl-2' />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className='w-2/3 md:w-full'>
                    <Image src={jsAnimated} />
                </div>
            </div>
        </main>
    )
}
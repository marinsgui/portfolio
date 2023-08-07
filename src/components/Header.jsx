import { useState } from 'react'

import { Code2, X, Menu } from 'lucide-react'

import { Link } from 'react-scroll'

export default function Header() {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'Sobre',
        },
        {
            id: 3,
            link: 'Projetos',
        },
        {
            id: 4,
            link: 'Habilidades',
        },
        {
            id: 5,
            link: 'Contato',
        },
    ]

    return (
        <header className="flex justify-between items-center w-full h-20 px-4 text-gray-300 sticky top-0 bg-sky-950">
            <div>
                <Code2 size={60} className='ml-2' />
            </div>

            <ul className='hidden md:flex'>
                {links.map(link => (
                    <li 
                        key={link.id} 
                        className='px-4 font-medium text-gray-300 hover:scale-105 duration-200 cursor-pointer'
                    >
                        <Link to={link.link} smooth duration={500}>{link.link}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
                {nav ? <X size={30} /> : <Menu size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300'>
                    {links.map(link => (
                        <li 
                            key={link.id} 
                            className='px-4 py-6 text-4xl'
                        >
                            <Link
                                onClick={() => setNav(!nav)} 
                                to={link.link} 
                                smooth 
                                duration={500}
                            >
                                {link.link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}
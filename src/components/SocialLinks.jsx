import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/marinsgui',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/guilherme-marins/',
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:marins0guilherme@gmail.com',
            style: 'rounded-br-md'
        },
    ]

  return (
    <div className='flex-col top-[35%] left-0 fixed hidden lg:flex'>
        <ul>
            {links.map(link => (
                <li 
                    key={link.id} 
                    className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200 bg-gray-600 ${link.style}`}
                >
                <a 
                    href={link.href}
                    target='_blank'
                    rel='noreferrer' 
                    className='text-white flex justify-between items-center w-full'
                >
                    {link.child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

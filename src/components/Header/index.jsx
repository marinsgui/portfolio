import { FaCode } from 'react-icons/fa';

import './styles.css'

import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <div className='logo'>
                <Link to='/'>
                    <FaCode className='icon-logo' />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/sobre'>Sobre</Link>
                    </li>
                    <li>
                        <Link to='/projetos'>Projetos</Link>
                    </li>
                    <li>
                        <Link to='/contato'>Contato</Link>
                    </li>
                </ul>
            </nav>
      </header>
    )
}
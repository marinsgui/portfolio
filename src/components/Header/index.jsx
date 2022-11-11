import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './styles.css'

import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <div className='logo'>
                <Link to='/'>
                    <FontAwesomeIcon icon={faCode} className='code-logo' />
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
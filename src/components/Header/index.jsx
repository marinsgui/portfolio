import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './styles.css'

export default function Header() {
    return (
        <header>
            <div className='logo'>
                <a href="#">
                    <FontAwesomeIcon icon={faCode} className='code-logo' />
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="../pages/Sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Projetos</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
      </header>
    )
}
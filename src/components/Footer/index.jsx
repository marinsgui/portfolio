import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="https://github.com/marinsgui" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className='social-logo' />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/guilherme-marins/" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} className='social-logo' />
                        </a>
                    </li>
                </ul>
            </nav>
      </footer>
    )
}
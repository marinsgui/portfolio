import './styles.css';

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="https://github.com/marinsgui" target='_blank'>
                            <FaGithub className='social-logo' />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/guilherme-marins/" target='_blank'>
                            <FaLinkedin className='social-logo' />
                        </a>
                    </li>
                </ul>
            </nav>
            <small>Free SVG Background by <a target="_blank" href="https://bgjar.com">BGJar</a></small>
      </footer>
    )
}
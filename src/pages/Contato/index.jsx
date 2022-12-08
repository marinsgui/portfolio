import './styles.css';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contato() {
    return (
        <section>
            <div className='contacts'>
                <h2>Entre em contato:</h2>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/guilherme-marins/">
                            <FaLinkedin />
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/marinsgui">
                            <FaGithub />
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
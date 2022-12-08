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
                <h2>Envie um email:</h2>
                <form action='https://formsubmit.co/marins0guilherme@gmail.com' method='POST'>
                    <input type="text" name="name" id="name" placeholder='Insira seu nome' />
                    <input type="email" name="email" id="email" placeholder='Insira seu email' />
                    <textarea name="mensagem" id="mensagem" cols="50" rows="10" placeholder='Digite sua mensagem'></textarea>
                    <button type="submit">Enviar mensagem</button>
                    <input type="hidden" name="_subject" value='Novo Contato!' />
                    <input type="text" name="_honey" style={{display: 'none'}} />
                    <input type="hidden" name="_captcha" value='false' />
                </form>
            </div>
        </section>
    )
}
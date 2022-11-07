import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {

  return (
    <div className="App">
      <header>
        <div className='logo'>
          <a href="#">
            <FontAwesomeIcon icon={faCode} className='code-logo' />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Sobre</a>
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

      <main>
        <section>
          <h1>Guilherme Marins</h1>
          <p>Front-end Developer</p>
        </section>
      </main>

      <footer>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/marinsgui">
                <FontAwesomeIcon icon={faGithub} className='social-logo' />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/guilherme-marins/">
                <FontAwesomeIcon icon={faLinkedin} className='social-logo' />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default App

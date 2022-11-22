import './styles.css';

export default function Projetos() {
    return (
        <main>
            <section className='projects-container'>
                <div className='item'>
                    <a href="https://calculadora-de-imc-eta.vercel.app/" target='_blank'>
                        <img src="src\assets\calculadora-de-imc.jpg" alt="Calculadora de IMC" />
                    </a>
                    <p>Calculadora de IMC</p>
                </div>
                <div className='item'>
                    <a href="https://explorer-lab-01-marinsgui.vercel.app/" target='_blank'>
                        <img src="src\assets\rocketpay.jpg" alt="Rocketpay" />
                    </a>
                    <p>Rocketpay</p>
                </div>
                <div className='item'>
                    <a href="https://todo-list-react-marinsgui.vercel.app/" target='_blank'>
                        <img src="src\assets\todo-list.jpg" alt="Lista de tarefas" />
                    </a>
                    <p>Lista de tarefas</p>
                </div>
                <div className='item'>
                    <a href="https://weather-now-bay.vercel.app/" target='_blank'>
                        <img src="src\assets\weather-now.jpg" alt="Weather Now" />
                    </a>
                    <p>Weather Now</p>
                </div>
            </section>
        </main>
    )
}
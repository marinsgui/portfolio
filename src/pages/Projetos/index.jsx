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
            </section>
        </main>
    )
}
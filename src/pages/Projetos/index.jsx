import './styles.css';

import imc_image from '../../assets/calculadora-de-imc.jpg';
import rocketpay_image from '../../assets/rocketpay.jpg';
import todo_list_image from '../../assets/todo-list.jpg';
import weather_now_image from '../../assets/weather-now.jpg';
import movies_lib_image from '../../assets/movies-lib.jpg';

export default function Projetos() {
    return (
        <main>
            <section className='projects-container'>
                <div className='item'>
                        <img src={imc_image} alt="Calculadora de IMC" />
                    <p>Calculadora de IMC</p>
                    <div className="links">
                        <a href="https://calculadora-de-imc-eta.vercel.app/">Projeto</a>
                        <a href="https://github.com/marinsgui/calculadora-de-imc">Repositório</a>
                    </div>
                </div>
                <div className='item'>
                        <img src={movies_lib_image} alt="Movies Lib" />
                    <p>Movies Lib</p>
                    <div className="links">
                        <a href="https://movies-lib-blond.vercel.app/" target='_blank'>Projeto</a>
                        <a href="https://github.com/marinsgui/movies-lib" target='_blank'>Repositório</a>
                    </div>
                </div>
                <div className='item'>
                        <img src={rocketpay_image} alt="Rocketpay" />
                    <p>Rocketpay</p>
                    <div className="links">
                        <a href="https://explorer-lab-01-marinsgui.vercel.app/">Projeto</a>
                        <a href="https://github.com/marinsgui/explorer-lab-01">Repositório</a>
                    </div>
                </div>
                <div className='item'>
                        <img src={todo_list_image} alt="Lista de tarefas" />
                    <p>Lista de tarefas</p>
                    <div className="links">
                        <a href="https://todo-list-react-marinsgui.vercel.app/">Projeto</a>
                        <a href="https://github.com/marinsgui/todo-list-react">Repositório</a>
                    </div>
                </div>
                <div className='item'>
                        <img src={weather_now_image} alt="Weather Now" />
                    <p>Weather Now</p>
                    <div className="links">
                        <a href="https://weather-now-bay.vercel.app/">Projeto</a>
                        <a href="https://github.com/marinsgui/weather-now">Repositório</a>
                    </div>
                </div>
            </section>
        </main>
    )
}
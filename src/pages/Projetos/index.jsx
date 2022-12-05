import './styles.css';

import imc_image from '../../assets/calculadora-de-imc.jpg';
import rocketpay_image from '../../assets/rocketpay.jpg';
import todo_list_image from '../../assets/todo-list.jpg';
import weather_now_image from '../../assets/weather-now.jpg';
import movies_lib_image from '../../assets/movies-lib.jpg';

import Popup from '../../components/Popup';
import { useState } from 'react';

export default function Projetos() {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <main>
            <section className='projects-container'>
                <div className='item' onClick={() => setShowPopup(true)}>
                        <img src={imc_image} alt="Calculadora de IMC" />
                    <p>Calculadora de IMC</p>
                    <Popup trigger={showPopup} setTrigger={setShowPopup}>
                    <a href="https://calculadora-de-imc-eta.vercel.app/" target='_blank'>Projeto</a>
                    <a href="https://github.com/marinsgui/calculadora-de-imc" target='_blank'>Repositório</a>
                    </Popup>
                </div>
                <div className='item'>
                        <img src={movies_lib_image} alt="Movies Lib" />
                    <p>Movies Lib</p>
                    <Popup trigger={false}>
                    <a href="https://movies-lib-blond.vercel.app/" target='_blank'>Projeto</a>
                    <a href="https://github.com/marinsgui/movies-lib" target='_blank'>Repositório</a>
                    </Popup>
                </div>
                <div className='item'>
                    <a href="https://explorer-lab-01-marinsgui.vercel.app/" target='_blank'>
                        <img src={rocketpay_image} alt="Rocketpay" />
                    </a>
                    <p>Rocketpay</p>
                </div>
                <div className='item'>
                    <a href="https://todo-list-react-marinsgui.vercel.app/" target='_blank'>
                        <img src={todo_list_image} alt="Lista de tarefas" />
                    </a>
                    <p>Lista de tarefas</p>
                </div>
                <div className='item'>
                    <a href="https://weather-now-bay.vercel.app/" target='_blank'>
                        <img src={weather_now_image} alt="Weather Now" />
                    </a>
                    <p>Weather Now</p>
                </div>
            </section>
        </main>
    )
}
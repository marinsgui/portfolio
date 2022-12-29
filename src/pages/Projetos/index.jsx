import './styles.css';

import imc_image from '../../assets/calculadora-de-imc.jpg';
import rocketpay_image from '../../assets/rocketpay.jpg';
import todo_list_image from '../../assets/todo-list.jpg';
import weather_now_image from '../../assets/weather-now.jpg';
import movies_lib_image from '../../assets/movies-lib.jpg';

import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function Projetos() {
    return (
        <main>
            <section className='projects-container'>
                <ProjectCard 
                    image={imc_image}
                    title='Calculadora de IMC'
                    project='https://calculadora-de-imc-eta.vercel.app/'
                    repo='https://github.com/marinsgui/calculadora-de-imc'
                />
                <ProjectCard 
                    image={movies_lib_image}
                    title='Movies Lib'
                    project='https://movies-lib-blond.vercel.app/'
                    repo='https://github.com/marinsgui/movies-lib'
                />
                <ProjectCard 
                    image={rocketpay_image}
                    title='Rocketpay'
                    project='https://explorer-lab-01-marinsgui.vercel.app/'
                    repo='https://github.com/marinsgui/explorer-lab-01'
                />
                <ProjectCard 
                    image={todo_list_image}
                    title='Lista de tarefas'
                    project='https://todo-list-react-marinsgui.vercel.app/'
                    repo='https://github.com/marinsgui/todo-list-react'
                />
                <ProjectCard 
                    image={weather_now_image}
                    title='Weather Now'
                    project='https://weather-now-bay.vercel.app/'
                    repo='https://github.com/marinsgui/weather-now'
                />
            </section>
        </main>
    )
}
import './styles.css'

export default function ProjectCard({ image, title, project, repo }) {
    return (
        <div className='item'>
            <img src={image} alt="Imagem do projeto" />
            <p>{title}</p>
            <div className='links'>
                <a href={project}>Projeto</a>
                <a href={repo}>Repositório</a>
            </div>
        </div>
    )
}
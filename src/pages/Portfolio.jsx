import { Project } from "../components"
import { Link } from "react-router-dom";



export default function Portfolio(){

    const myProjects = [
        { name: 'Weather Dashboard', link: 'https://github.com/lothylg/weather-dashboard' },
        { name: 'Easter Eggs', link: 'https://github.com/lothylg/eastereggs' },
        { name: 'Handle bars tech log', link: 'https://github.com/lothylg/mvc-tech-blog' },
        { name: 'MongoDB and noSQL social media', link: 'https://github.com/lothylg/mongodb-nosql' }
    ]

    return(
        <>
        <h3>Portfolio</h3>
            <p>Here are some projects I have done:</p>
            { myProjects.map( project => (
                <Project key={project.name} project={project} />
            ))}
        </>
    )
}
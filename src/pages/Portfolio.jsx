
import Project from '../components/Project'

export default function Portfolio() {

    const myProjects = [
        { id: '1', name: 'Weather Dashboard project using APIs and Javascript', link: 'https://github.com/lothylg/weather-dashboard', alt: "screenshot of weather dashboard project", src: "/assets/weatherDash.png" },
        { id: '2', name: 'Easter Eggs project using Javascript and third party APIs', link: 'https://github.com/lothylg/eastereggs', alt: "screenshot of project easter eggs", src: '/assets/easteregg.png' },
        { id: '3', name: 'Handle bars (MVC) tech log', link: 'https://github.com/lothylg/mvc-tech-blog', alt: 'screenshot of tech blog project', src: '/assets/mvcblog.png' },
        { id: '4', name: 'MongoDB and noSQL social media', link: 'https://github.com/lothylg/mongodb-nosql', alt: 'screenshot of mongoDb social media project', src: '/assets/mongo.png' },
        { id: '5', name: 'Draggable taskboard using Bootstrap and HTML', link: 'https://github.com/lothylg/task-tracker', alt: 'screenshot of dragabble taskboard project', src: '/assets/taskboard.png' },
        { id: '6', name: 'README generator using Javascript and Node', link: 'https://github.com/lothylg/readme-generator', alt: 'screenshot of a generated README file', src: '/assets/readmegen.png' }
    ]

    return (
        <div className='col-12 m-4'>
            <h3>Portfolio</h3>
            <div className="col-12 row">
                {myProjects.map(project => (
                    // sending in myproject as project props into project. Imported at the top.
                    // added in the key to resolve that error. 
                    <Project key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}
import { standards } from "../lib/standards"

export default function Project(props) {


    return (
        <div style={{ border: `3px solid ${standards.borderColor}` }}>
            <Link to={props.link}>
                <img className="img-thumbnail" src={props.src} alt={props.alt} />
                <p>{props.name}</p>
                {/* <Project key={project.name} project={project} /> */}
            </Link>
        </div>
    )
}
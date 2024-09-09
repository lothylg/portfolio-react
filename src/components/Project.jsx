import { standards } from "../lib/standards"
import { Link } from "react-router-dom";
// updated props to project since we're sending it as such and then we can use it as project
export default function Project({ project }) {


    return (
        <div className="col-6 p-3" key={project.id}>
            <Link to={project.link}>
                <img className="img-thumbnail" src={project.src} alt={project.alt} />
                {/* add id to p so can change color on hover */}
                <p id="projName">{project.name}</p>
                {/* <Project key={project.name} project={project} /> */}
            </Link>
        </div>
    )
}

// can do props or send in project because that's the only thing in
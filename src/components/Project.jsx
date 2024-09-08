import { standards } from "../lib/standards"

export default function Project(props){


    return(
        <div style={{ border: `1px solid ${standards.borderColor}` }}>
            <p>Project: { props.project.name} </p>

        </div>
    )
}
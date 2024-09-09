import { Link } from "react-router-dom" //this allows you to be able to make a link 
import { NavLink } from "react-router-dom"; 

export default function Header() {

    const menu = [
        { id: 1, label: "About me", href: "/about" },
        { id: 2, label: "Portfolio", href: "/portfolio" },
        { id: 3, label: "Resume", href: "/resume" },
        { id: 4, label: "Contact me", href: "/contact" }
    ]

    return (
        <header id="fullHeader" className='container-fluid m-4 col-12'>
            <div id="headerContainer" className="row col-12">
                <h3 className='col-3'><Link className="nav-link" to="/">Lothy Gresser</Link></h3>
                <div id='linkContainer' className='col-9'>
                    <ul className="nav justify-content-end">
                        {menu.map(item => (
                            <li key={item.id} className="nav-item" >
                                <NavLink className="nav-link" to={item.href}>{item.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>

    )
}
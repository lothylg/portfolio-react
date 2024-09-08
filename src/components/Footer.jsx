import React from 'react';
import { Link } from "react-router-dom";



export default function Footer() {
    const icons = [
        { id: "1", link: "https://github.com/lothylg", alt: "github logo", src: '../assets/github.svg' },
        { id: "2", link: "https://www.linkedin.com/in/lothy-gresser/", alt: 'linkedin logo', src: '../assets/linkedin.svg' }
    ];

    return (
        <footer className="footer fixed-bottom d-flex justify-content-center">
            <ul className='nav'>
                {icons.map(icon => (
                    <li key={icon.id} className="contactIcon">
                        <Link className="nav-link" alt={icon.alt} to={icon.link}>
                            <img src={icon.src} alt={icon.alt} />
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
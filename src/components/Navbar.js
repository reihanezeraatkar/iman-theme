import React, { useState } from 'react';
import { HeaderItems } from "./HeaderItems";
import "../styles/Styles.css";
import DateTime from './DateTime';
export default function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handleclick = () => {
        setClicked(!clicked)
    }
    return (
        <nav className="navbar-items">
                    <DateTime />
            <section className='menu-burger' onClick={handleclick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </section>
            <ul className={`${clicked ? "nav-menu active" : "nav-menu"}`}>
                {HeaderItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
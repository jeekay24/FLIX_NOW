import React, { useState, useEffect } from 'react';
import "./nav.css";
export const Nav = () => {
    const [show, HandleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (!window.scrollY > 100) {
                HandleShow(true);
            } else HandleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", HandleShow);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className='nav_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='Netflix Logo'
            />
            <img
                className='nav_avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='Netflix Avatar'
            />

        </div>
    )
}

export default Nav;

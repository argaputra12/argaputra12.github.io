import React from "react";
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

type Props = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({theme, setTheme} : Props)  => {
    const section = [
        'education', 'experiences', 'skills', 'projects', 'contact'
    ]
    const username = "Argaputra12"
    
    const toggleDarkMode = (checked: boolean) => {
        setTheme(checked ? 'dark' : 'light');
    };

    return(
        <nav className="flex items-center justify-between flex-wrap bg-light-background-500 p-6 rounded-b-lg border-2 border-t-0 border-light-text-300 sticky top-0 dark:bg-dark-background-500 dark:border-dark-text-300 z-50 ">
            {/* <div className="username text-light-text-400">
                <span className="font-semibold text-lg">{username}</span>
            </div> */}
            <div className="text-sans relative flex sm:place-content-between items-center gap-8 py-2 px-6 sm:text-base text-md font-semibold flex-wrap sm:flex-nowrap transition-all sm:w-min lg:py-2 w-4/5 md:w-auto">
                {section.map((section, index) => (
                    <Link
                        activeClass="active"
                        to={section}
                        spy={true}
                        smooth={true}
                        offset={-130}
                        duration={500}
                        key={index}
                    >
                        <span className="hover:text-light-text-400 uppercase hover:cursor-pointer dark:hover:text-dark-text-400">{section}</span>
                    </Link>
                ))}
            </div>
            <DarkModeSwitch
                moonColor="#F6F1DE"
                sunColor="#181D31"
                checked={theme === 'dark'}
                onChange={toggleDarkMode}
                size={40}
                className="w-1/6 sm:w-auto"
                />
        </nav>
    )
}

export default Navbar
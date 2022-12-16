import React from "react";
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = () => {
    const section = [
        'hello', 'projects', 'experience', 'contact'
    ]
    const username = "Argaputra12"

    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
    };

    return(
        <nav className="flex items-center justify-between flex-wrap bg-light-background-500 p-6 rounded-b-lg mb-6 border-2 border-light-text-300">
            <div className="username text-light-text-400">
                <span className="font-semibold text-lg">{username}</span>
            </div>
            <div className="text-sans relative flex place-content-between items-center gap-8 py-2 px-6 text-base font-semibold transition-all sm:w-min lg:py-2">
                {section.map((section, index) => (
                    <a key={index}
                        className="hover:text-light-text-400 uppercase"
                    >
                        {section}
                    </a>
                ))}
            </div>
            <DarkModeSwitch
                moonColor="#181D31"
                sunColor="#F6F1DE"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={40}
            />
        </nav>
    )
}

export default Navbar
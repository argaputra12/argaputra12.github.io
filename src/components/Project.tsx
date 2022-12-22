import React from "react";
import * as ReactDOM from 'react-dom';

type Props = {
    title: string,
    techs: Array<string>,
    description: string,
    image: React.ReactNode,
}

const Project = ({title, techs, description, image}: Props) => {
    return (
        <div className="flex gap-6 flex-col sm:flex-row ">
            {image}
            <div className="flex flex-col gap-4 sm:w-1/2 w-full">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className="text-sm">{description}</p>
                <div className="flex gap-4 flex-wrap mt-3">
                    {techs.map((tech, index) => (
                        <span key={index} className="text-sm font-semibold bg-light-background-500 px-2 py-1 rounded-lg dark:bg-dark-background-300">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;
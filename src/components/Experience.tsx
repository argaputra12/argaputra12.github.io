import React from "react";
import * as ReactDOM from 'react-dom';


type Props = {
    title: string,
    company: string,
    date: string,
    description: Array<string>,
    logo: React.ReactNode,
}

const Experience = ({title, company, date, description, logo}: Props) => {

    return(
        <div className='flex flex-row gap-5'>
            <div className="py-2">{logo}</div>
            <div className='flex flex-col w-[730px] gap-2'>
                <span className='font-semibold text-lg sm:text-xl'>{title}</span>
                <div className="flex flex-row gap-2 justify-between text-base sm:text-lg flex-wrap sm:flex-nowrap">
                    <span className=' opacity-80'>{company}</span>
                    <span className=' opacity-80'>{date}</span>
                </div>
                <ul className='list-disc list-inside text-base sm:text-lg'>
                    {description.map((desc, index) => (
                        <li className="leading-8" key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default Experience;
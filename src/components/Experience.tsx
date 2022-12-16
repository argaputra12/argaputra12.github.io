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
        <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-5'>
                <div className="py-2">{logo}</div>
                <div className='flex flex-col w-[730px]'>
                    <span className='font-semibold text-xl'>{title}</span>
                    <div className="flex flex-row gap-10 justify-between">
                        <span className=' opacity-80'>{company}</span>
                        <span className=' opacity-80'>{date}</span>
                    </div>
                    <ul className='list-disc list-inside mt-2'>
                        {description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Experience;
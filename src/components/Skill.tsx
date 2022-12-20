import React from "react";
import * as ReactDOM from 'react-dom';
type Props = {
    title: string,
    level: string,
    logo: React.ReactNode,
}

const Skill = ({title, level, logo}: Props) => {
    return(
        <div className='flex flex-row gap-5 w-1/2 sm:w-1/4'>
            <div className="py-2">{logo}</div>
            <div className='flex flex-col'>
                <span className='font-semibold text-lg'>{title}</span>
                <span className=' opacity-80 text-base'>{level}</span>
            </div>
        </div>
    )
}

export default Skill;
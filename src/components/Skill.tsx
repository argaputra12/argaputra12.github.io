import React from "react";
import * as ReactDOM from 'react-dom';
type Props = {
    title: string,
    level: string,
    logo: React.ReactNode,
}

const Skill = ({title, level, logo}: Props) => {
    return(
        <div className='flex flex-row gap-5 w-1/3 sm:w-1/4 mr-3'>
            <div className="py-1">{logo}</div>
            <div className='flex flex-col'>
                <span className='font-semibold sm:text-lg text-base'>{title}</span>
                <span className=' opacity-80 sm:text-base text-sm'>{level}</span>
            </div>
        </div>
    )
}

export default Skill;
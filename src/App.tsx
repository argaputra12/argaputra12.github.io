import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Skill from './components/Skill'

import {  
  SiLaravel,
  SiFastapi,
  SiReact,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss
} from 'react-icons/si';
import {
  HiOutlineCode
} from 'react-icons/hi'
import {
  BsPeople
} from 'react-icons/bs'
import {
  SlGraduation
} from 'react-icons/sl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-light-background-200 text-light-text-400">
      <div className='flex flex-col mx-auto min-h-screen max-w-[64rem] font-sans'>
        <Navbar />
        <main className='flex flex-col bg-light-background-500 border-2 rounded-md border-light-text-300 text-lg py-6 px-10 gap-10'>
          <section className='flex flex-col gap-2 text-justify mt-3'>
            <h1 className='text-xl font-bold mb-2'>Hi, there!</h1>
            <div>
              I'm {" "}
              <span className="font-semibold opacity-80">Arga Putra</span>, an undergraduated computer science student in {" "} 
              <a href="https://uns.ac.id/id/" className="text-light-link hover:text-light-text-400">Sebelas Maret University</a> 
              . I am very passionate about 
              the world of web development and have developed my skills through various projects and experiences.
              I am glad to share my works and experiences with you. 
              I hope this website can provide useful information for you and be a source of valuable inspiration.
              Don't forget your coffee!
            </div>       
          </section>
          <section className='flex flex-col gap-2 mt-10 text-justify'>
            <h1 className='text-5xl font-title font-bold '>Education</h1>
            <div className='flex flex-col gap-6 py-6'>
              <Experience
                title="Undergraduate Student of Computer Science"
                company='Universitas Sebelas Maret'
                date="2020 - 2024 (Expected)"
                description={
                  [
                    "GPA: 3.86/4.00",
                    "Activities : Himpunan Mahasiswa Informatika UNS, PINGFEST 2021, and more",
                    "Lecture Assistant for Programming Concepts Lab at 2021,"
                  ]
                }
                logo={<SlGraduation size={35}/>}
              />
            </div>
          </section>

          <section className='flex flex-col gap-2 text-justify'>
            <h1 className='text-5xl font-title font-bold '>Experiences</h1>
            <div className='flex flex-col gap-6 py-6'>
              <Experience
                title="Internship Software Engineer"
                company="Directorate of Academic Reputation and Student Affairs"
                date="Jul 2022 - Present"
                description={
                  [
                    "Developing backend web application using Laravel",
                    "Developing frontend web application using TailwindCSS",
                    "Managing website about obligatory (rural) advanced university students (KKN)",
                    "Developing a geographic information system website using Laravel Blade and LeafletJS",
                  ]
                }
                logo={<HiOutlineCode size={35}/>}
              />
              <Experience
                title="Internship Backend Engineer"
                company="Ruang Berproses"
                date="Aug 2022 - Present"
                description={
                  [
                    "Developing backend web application using Laravel",
                    "Developing frontend web application using TailwindCSS",
                    "Managing website about obligatory (rural) advanced university students (KKN)",
                    "Developing a geographic information system website using Laravel Blade and LeafletJS",
                  ]
                }
                logo={<HiOutlineCode size={35}/>}
              />
              <Experience
                title="Staff of Human Resource Development"
                company="Himpunan Mahasiswa Informatika UNS"
                date="Jan 2021 - Oct 2021"
                description={
                  [
                    "Improving student resources in any filed",
                    "Raise funds given to those who in need",
                  ]
                }
                logo={<BsPeople size={35}/>}
              />
              <Experience
                title="Staff of General Affairs"
                company="PINGFEST 2021"
                date="Mar 2021 - Oct 2021"
                description={
                  [
                    "Take care of the permits needed for PINGFEST 2021",
                    "Responsible for broadcasting ongoing events",
                    "Manage other things needed for PINGFEST 2021"
                  ]
                }
                logo={<BsPeople size={35}/>}
              />
              <Experience
                title="Group Companion"
                company="PKKMB FMIPA UNS 2021"
                date="Jul 2021 - Sep 2021"
                description={
                  [
                    "Storing students' application documents, and ensuring them complete and correct",
                    "Helping prospective students fill out their application documents",
                    "Helping prospective students choose a major that aligns with their interests and abilities"
                  ]
                }
                logo={<BsPeople size={35}/>}
              />
            </div>
          </section>
          <section className='flex flex-col gap-4 text-justify'>
            <h1 className='text-5xl font-title font-bold '>Skills</h1>
            <div className='flex gap-5 py-6 flex-wrap '>
                <Skill
                  title="Laravel"
                  logo={<SiLaravel size={35}/>}
                  level="Intermediate"
                />
                <Skill
                  title="FastAPI"
                  logo={<SiFastapi size={35}/>}
                  level="Intermediate"
                />
                <Skill
                  title="ReactJS"
                  logo={<SiReact size={35}/>}
                  level="Newbie"
                />
                <Skill
                  title="MySQL"
                  logo={<SiMysql size={35}/>}
                  level="Intermediate"
                />
                <Skill
                  title="PostgreSQL"
                  logo={<SiPostgresql size={35}/>}
                  level="Newbie"
                />
                <Skill
                  title="TailwindCSS"
                  logo={<SiTailwindcss size={35}/>}
                  level="Intermediate"
                />
                <Skill
                  title="Python"
                  logo={<SiPython size={35}/>}
                  level="Intermediate"
                />
                <Skill
                  title="TypeScript"
                  logo={<SiTypescript size={35}/>}
                  level="Newbie"
                />
                <Skill
                  title="HTML5"
                  logo={<SiHtml5 size={35}/>}
                  level="Intermediate"
                />
                <Skill
                  title="CSS3"
                  logo={<SiCss3 size={35}/>}
                  level="Intermediate"
                />
                <Skill
                  title="JavaScript"
                  logo={<SiJavascript size={35}/>}
                  level="Intermediate"
                />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

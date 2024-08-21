import { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Skill from './components/Skill'
import Project from './components/Project'
import React from 'react'

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
  SiTailwindcss,
  SiGithub,
  SiInstagram,
  SiGmail,
  SiVuedotjs
} from 'react-icons/si';

import { TbBrandGolang } from "react-icons/tb";

import {
  HiOutlineCode,
} from 'react-icons/hi'

import {
  BsPeople,
  BsLinkedin
} from 'react-icons/bs'

import {
  SlGraduation
} from 'react-icons/sl'

function App() {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('light');
    }
  }, []);

  return (
    <div className={`App ${theme}`}>
      <div className="bg-light-background-200 text-light-text-400 dark:text-dark-text-400 dark:bg-dark-background-300 duration-200">
        <div className='flex flex-col mx-auto min-h-screen max-w-[64rem] font-sans'>
          <Navbar theme={theme} setTheme={setTheme} />
          <main className='flex flex-col bg-light-background-300 border-2 rounded-lg border-light-text-300 text-lg py-6 px-10 gap-10 mb-24 mt-6 dark:bg-dark-background-400 dark:border-dark-text-300'>
            <section className='flex flex-col gap-2 text-justify mt-5' id='hello'>
              <h1 className='text-xl font-bold mb-2'>Hi, there!</h1>
              <div>
                I'm {" "}
                <span className="font-semibold">Arga Putra</span>, an undergraduated computer science student in {" "}
                <a href="https://uns.ac.id/id/" target="_blank" className="text-light-link hover:text-opacity-80 duration-200">Sebelas Maret University</a>
                . I am very passionate about
                the world of web development and have developed my skills through various projects and experiences.
                I am glad to share my works and experiences with you.
                I hope this website can provide useful information for you and be a source of valuable inspiration.
                <br />
                Don't forget your coffee!
              </div>
              <div className='mt-5'>
                <a href="/Arga-CV.pdf" target="_blank">
                  <button className="rounded-md border-2 border-light-text-300 py-2 px-4 hover:bg-light-background-600 duration-200 dark:border-dark-text-300 dark:hover:bg-dark-background-300">Download CV</button>
                </a>
              </div>
            </section>
            <section className='flex flex-col gap-2 mt-10 text-justify' id='education'>
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
                  logo={<SlGraduation size={35} />}
                />
              </div>
            </section>

            <section className='flex flex-col gap-2 text-justify' id='experiences'>
              <h1 className='text-5xl font-title font-bold '>Experiences</h1>
              <div className='flex flex-col gap-6 py-6'>
                <Experience
                  title="Chief Technology Officer"
                  company="Craftive.id"
                  date="Jul 2023 - Nov 2023"
                  description={
                    [
                      "Developing and maintaining the company's website",
                      "Managing the company's IT infrastructure",
                      "Managing the company's IT team"
                    ]
                  }
                  logo={<HiOutlineCode size={35} />}
                />
                <Experience
                  title="Internship Backend Engineer"
                  company="Startup Campus"
                  date="Aug 2022 - Des 2022"
                  description={
                    [
                      "First winner of final project, developing backend side of e-commerce website",
                      "Designing and developing a strong and well-integrated backend system",
                      "Iterating and maintaining process of the application",
                      "Working with other teams to complete projects on time and to high quality standards"
                    ]
                  }
                  logo={<HiOutlineCode size={35} />}
                />
                <Experience
                  title="Internship Software Engineer"
                  company="Directorate of Academic Reputation and Student Affairs"
                  date="Jul 2022 - Nov 2022"
                  description={
                    [
                      "Developing backend web application using Laravel",
                      "Developing frontend web application using TailwindCSS",
                      "Managing website about obligatory (rural) advanced university students (KKN)",
                      "Developing a geographic information system website using Laravel Blade and LeafletJS",
                    ]
                  }
                  logo={<HiOutlineCode size={35} />}
                />
                <Experience
                  title="Internship Backend Engineer"
                  company="Ruang Berproses"
                  date="Aug 2022 - Dec 2023"
                  description={
                    [
                      "Developing backend web application using Laravel",
                      "Developing frontend web application using TailwindCSS",
                      "Managing website about obligatory (rural) advanced university students (KKN)",
                      "Developing a geographic information system website using Laravel Blade and LeafletJS",
                    ]
                  }
                  logo={<HiOutlineCode size={35} />}
                />
                <Experience
                  title="MSIB Ambassador Batch 4"
                  company="Universitas Sebelas Maret"
                  date="Dec 2022 - Feb 2023"
                  description={
                    [
                      "Promoting MSIB program to students and other stakeholders",
                      "Providing information about MSIB program",
                      "Helping students to apply for MSIB program",
                    ]
                  }
                  logo={<BsPeople size={35} />}
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
                  logo={<BsPeople size={35} />}
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
                  logo={<BsPeople size={35} />}
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
                  logo={<BsPeople size={35} />}
                />
              </div>
            </section>
            <section className='flex flex-col gap-2 text-justify' id='skills'>
              <h1 className='text-5xl font-title font-bold '>Skills</h1>
              <div className='flex gap-9 py-6 flex-wrap'>
                <Skill
                  title="Laravel"
                  logo={<SiLaravel size={35} />}
                  level="Intermediate"
                />
                <Skill
                  title='Golang'
                  logo={<TbBrandGolang size={35} />}
                  level="Intermediate"
                />
                <Skill
                  title="FastAPI"
                  logo={<SiFastapi size={35} />}
                  level="Newbie"
                />
                <Skill
                  title='VueJS'
                  logo={<SiVuedotjs size={35} />}
                  level="Intermediate"
                />
                <Skill
                  title="ReactJS"
                  logo={<SiReact size={35} />}
                  level="Newbie"
                />
                <Skill
                  title="MySQL"
                  logo={<SiMysql size={35} />}
                  level="Intermediate"
                />
                <Skill
                  title="PostgreSQL"
                  logo={<SiPostgresql size={35} />}
                  level="Newbie"
                />
                <Skill
                  title="TailwindCSS"
                  logo={<SiTailwindcss size={35} />}
                  level="Intermediate"
                />
                <Skill
                  title="Python"
                  logo={<SiPython size={35} />}
                  level="Intermediate"
                />
                <Skill
                  title="TypeScript"
                  logo={<SiTypescript size={35} />}
                  level="Newbie"
                />
                <Skill
                  title="HTML5"
                  logo={<SiHtml5 size={35} />}
                  level="Intermediate"
                />
                <Skill
                  title="CSS3"
                  logo={<SiCss3 size={35} />}
                  level="Intermediate"
                />
                <Skill
                  title="JavaScript"
                  logo={<SiJavascript size={35} />}
                  level="Intermediate"
                />
              </div>
            </section>
            <section className='flex flex-col gap-2 text-justify ' id='projects'>
              <h1 className='text-5xl font-title font-bold '>Projects</h1>
              <div className='flex flex-col gap-12 py-6'>
                <Project
                  title="E-commerce Website"
                  description="Fashion e-commerce website for selling clothes and accessories, final project for independent study course as a backend developer from Startup Campus"
                  techs={
                    [
                      "Fastapi",
                      "PostgreSQL",
                      "Docker",
                      "SQLAlchemy",
                      "Python",
                      "Pytest",
                    ]
                  }
                  image={<img src="/projects/e-commerce-website.png" alt="Ruang Berproses" className='w-[380px] object-cover rounded-md' />}
                />
                <Project
                  title="Admin Dashboard"
                  description='An administrative dashboard is a web-based application that provides an interface for managing and monitoring the various aspects of a business, organization, or website.'
                  techs={
                    [
                      "ReactJS",
                      "TailwindCSS",
                      "Material-UI",
                      "JavaScript",
                    ]
                  }
                  image={<img src="/projects/admin-dashboard.png" alt="Ruang Berproses" className='w-[380px] object-cover rounded-md' />}
                />
                <Project
                  title='Employee Leave Management'
                  description='The employee leave management project is a software solution designed to streamline and automate the process of tracking and approving employee leave requests.'
                  techs={
                    [
                      "Laravel",
                      "MySQL",
                      "TailwindCSS",
                      "PHP",
                    ]
                  }
                  image={<img src="/projects/employee-leave-management.png" alt="Ruang Berproses" className='w-[380px] object-cover rounded-md' />}
                />
                <Project
                  title='Invoice Web App'
                  description='The invoice web app project aims to streamline the billing process for businesses, saving time and reducing the risk of errors.'
                  techs={
                    [
                      "Laravel",
                      "MySQL",
                      "TailwindCSS",
                      "PHP",
                    ]
                  }
                  image={<img src="/projects/invoice-website.png" alt="Ruang Berproses" className='w-[380px] object-cover rounded-md' />}
                />
                <Project
                  title='Clinic Management'
                  description='The clinic management project is a software solution designed to streamline the clinic management process, saving time and reducing the risk of errors.'
                  techs={
                    [
                      "Laravel",
                      "MySQL",
                      "TailwindCSS",
                      "PHP",
                    ]
                  }
                  image={<img src="/projects/clinic-management.png" alt="Ruang Berproses" className='w-[380px] object-cover rounded-md' />}
                />
                <Project
                  title='Todo App'
                  description='The To Do App project is a tool for individuals to manage and track their daily tasks and responsibilities. It allows users to create and organize their to do lists, and mark tasks as complete when finished.'
                  techs={
                    [
                      "ReactJS",
                      "TailwindCSS",
                      "MongoDB",
                      "ExpressJS",
                      "NextJS",
                      "TypeScript",
                    ]
                  }
                  image={<img src="/projects/to-do-app.png" alt="Ruang Berproses" className='w-[380px] object-cover rounded-md' />}
                />
                <Project
                  title="Geo Information System Website"
                  description="A website that provides information about the location of the cities in Indonesia which is integrated with a map"
                  techs={
                    [
                      "Laravel",
                      "MySQL",
                      "TailwindCSS",
                      "PHP",
                      "LeafletJS",
                    ]
                  }
                  image={<img src="/projects/geo-information-system-website.png" alt="Ruang Berproses" className='w-[380px] object-cover rounded-md' />}
                />
              </div>
            </section>
            <section className='flex flex-col gap-2 text-justify sm:mt-32 mb-10' id='contact'>
              <h1 className='text-4xl font-title font-bold sm:text-5xl mb-2'>Interested in me?</h1>
              <div className='flex flex-col gap-2'>
                <div>
                  If you are interested in me, you can contact me via email or social media.
                  I do not mind if you want to ask questions or just want to say hello.
                  I do reply to all emails and messages, so dont hesitate to contact me.
                </div>
                <div>
                  I will be happy to help you.
                </div>
              </div>
              <div className='flex gap-5 mt-5'>
                <a href="https://github.com/argaputra12/" target="_blank" className="hover:cursor-pointer"><SiGithub size={30} /></a>
                <a href="https://www.linkedin.com/in/arputwp/" target="_blank" className="hover:cursor-pointer"><BsLinkedin size={30} /></a>
                <a href="https://www.instagram.com/arputwp/" target="_blank" className="hover:cursor-pointer"><SiInstagram size={30} /></a>
                <a href="mailto:argap1738@gmail.com" target="_blank" className="hover:cursor-pointer"><SiGmail size={30} /></a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

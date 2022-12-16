import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Navbar from './components/Navbar'
import Experience from './components/Experience'

import {  
  SiLaravel,
  SiFastapi
} from 'react-icons/si';
import {
  HiOutlineCode
} from 'react-icons/hi'
import {
  BsPeople
} from 'react-icons/bs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-light-background-200 text-light-text-400">
      <div className='flex flex-col mx-auto min-h-screen max-w-[64rem] font-sans'>
        <Navbar />
        <main className='flex flex-col bg-light-background-500 border-2 rounded-md border-light-text-300 text-lg p-6 gap-6'>
          <section className='flex flex-col gap-2 text-justify mt-3'>
            <h1 className='text-xl font-bold mb-2'>Welcome to my portfolio website!</h1>
            <div>
              Hello! I'm {" "}
              <span className="font-semibold opacity-80">Arga Putra</span>, an undergraduated computer science student in {" "} 
              <a href="https://uns.ac.id/id/" className="text-light-link hover:text-light-text-400">Sebelas Maret University</a> 
              . I am very passionate about 
              the world of web development and have developed my skills through various projects and experiences.
            </div>
            <div>
              I am glad to share my works and experiences with you. 
              I hope this website can provide useful information for you and be a source of valuable inspiration.
            </div>
            <div>
              If you have any questions or want to collaborate with me, please feel free to contact me.
              <br />
              Don't forget your coffee!
            </div>        
          </section>

          <section className='flex flex-col gap-2 mt-10 text-justify'>
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
                    "Receiving and storing prospective students' application documents, and ensuring that the documents are complete and correct",
                    "Helping prospective students fill out their application documents, including explaining the requirements and correct filling out procedures",
                    "Helping prospective students choose a major that aligns with their interests and abilities, including providing appropriate advice and recommendations"
                  ]
                }
                logo={<BsPeople size={35}/>}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

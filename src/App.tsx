import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-light-background-200 text-light-text-400">
      <div className='flex flex-col mx-auto min-h-screen max-w-[64rem] font-sans'>
        <Navbar />
        <main className='flex flex-col bg-light-background-500 border-2 rounded-md border-light-text-300 text-lg p-6'>
          <section className='flex flex-col gap-2 text-justify mt-2'>
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
            <h1 className='text-3xl font-title font-bold '>Experiences</h1>
            <div className='flex flex-col gap-2'>
              
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

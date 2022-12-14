import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='flex flex-col mx-auto min-h-screen max-w-[64rem] font-sans'>

        <Navbar />
        <h1 className='font-light text-4xl font-sans'>
          Hello World! <img src={reactLogo} alt="react logo" />
        </h1>
      </div>
    </div>
  )
}

export default App

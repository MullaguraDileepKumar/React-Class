import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonUsingProps from './ButtonUsingProps'

function App() {
  const [count, setCount] = useState(0)
  const Login = ()=>{
    alert("Clicked on Login Button")
  }
  const AboutUs = ()=>{
    alert("Clicked on AboutUs Button !");
  }
  const ContactUs = ()=>{
    alert("Clicked on ContactUs Button !")
  }
  const Faq = ()=>{
    alert("Clicked on FAQ's Button !")
  }
  return (
    <span>
      <ButtonUsingProps buttonText = "Login" bgColor="green" clickMe ={Login}/>
      <ButtonUsingProps buttonText ="About us" bgColor="grey" clickMe ={AboutUs}/>
      <ButtonUsingProps buttonText="Contact us" bgColor="blue" clickMe ={ContactUs}/>
      <ButtonUsingProps buttonText="FAQ's" bgColor ="orange" clickMe ={Faq}/>
    </span>
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App

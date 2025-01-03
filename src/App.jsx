// import './App.css'
import Navbar from './Navbar'
import TextInput from './TextInput'
import About from './About'
import { useState } from 'react'
import { createBrowserRouter as Router, RouterProvider } from "react-router-dom";
function App() {
  const [dark, setDark] = useState(false);
  const changeMode = () => {
    if (dark) {
      document.body.style.backgroundColor = "#f8f9fa";
      // document.body.style.color = "#212529";
    }
    else {
      document.body.style.backgroundColor = "#212529";
      // document.body.style.color = "white";
    }
    setDark(!dark);
  }
  const router = Router([
    {
      path: "/",
      element:
        <>
          <Navbar page='home' dark={dark} changeMode={changeMode} />
          <TextInput dark={dark} />
        </>
    },
    {
      path: "/about",
      element:
        <>
          <Navbar page='about' dark={dark} changeMode={changeMode} />
          <About dark={dark} />
        </>
    },
    {
      path: "/home",
      element:
        <>
          <Navbar page='home' dark={dark} changeMode={changeMode} />
          <TextInput dark={dark} />
        </>
    }
  ]);
  return (
    <>
      {/* <div className="container"> */}
      <RouterProvider router={router} />
      {/* </div> */}
    </>
  )
}

export default App

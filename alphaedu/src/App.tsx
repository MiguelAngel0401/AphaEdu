
import Navbar from './components/Navbar'


import Contact from './components/contact'
import About from './components/About'
import Footer from "./components/footer"



export default function App() {
  return (

    <>
        <Navbar/>
      <Contact/>      
      <h1>Hola</h1>
      <About />      
       <div className="min-h-screen flex flex-col ">
      <div className="flex-grow"></div>
      <div className=" bg-blue-500 border h-1 text font-extrabold"> <Footer/> </div>
    </div>
      <h1>Hola</h1>      


    </>
  )
}

   



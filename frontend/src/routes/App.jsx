import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Navbar from '../components/navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='baby'>
     <Navbar/>
     <Outlet />
     <Footer/>
    </div>
  )
}

export default App

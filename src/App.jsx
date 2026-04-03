import { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'

import 'aos/dist/aos.css';
import AOS from 'aos';

import Landingpage from './landingpage/Landingpage'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage />} />
      </Routes>
    </>
  )
}

export default App

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import  CodeBackground  from "./components/Animation/Background/Code"
import './App.css'
import { About } from './components/About/About';
import  { Projects }  from './components/Projects/Projects'
import { Footer } from './components/Footer/Footer';
import  ScrollButton  from './components/Button/ScrollButton'
import { Success } from './components/SuccessPage/Success'

function App() {
  return (
    <BrowserRouter>
     <div className="relative min-h-screen text-white">
        <CodeBackground />
        <main className="relative z-10 p-8">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <About />
                <Projects />
                <Footer />
                <ScrollButton />
              </>
            } />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
  
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import  CodeBackground  from "./components/Animation/Background/Code"
import './App.css'
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
  <div className="relative min-h-screen text-white">
      <CodeBackground />
      <main className="relative z-10 p-8">
        
      </main>
    </div>
      <Header />
      <About />
      <Projects />
      <Footer />
    </BrowserRouter>
  )
  
}

export default App

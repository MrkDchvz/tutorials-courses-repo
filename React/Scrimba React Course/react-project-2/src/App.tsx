import './App.css'
import CardContainer from './components/CardContainer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {



  return (
    <>
      <Navbar />

      <main className='main'>
      <Hero />
      <CardContainer />
  
      </main>
    </>
  )
}

export default App

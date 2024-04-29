import './App.css'
import Navbar from './Components/Navbar'
import Hero from './HeroSection/Hero'
import ShowCaseSection from './ProductShowcase/ShowCase'
function App() {

  return (
    <>
      <div className="app_container ">
          <Navbar  />
          <Hero />
          <ShowCaseSection />
      </div>
    </>
  )
}

export default App

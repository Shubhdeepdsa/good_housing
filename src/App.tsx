import './App.css'
import Navbar from './Components/Navbar'
import Hero from './HeroSection/Hero'
import ShowCaseSection from './ProductShowcase/ShowCase'
import Story from './Story/Story'
function App() {

  return (
    <>
      <div className="app_container ">
          <Navbar  />
          <Hero />
          <ShowCaseSection />
          <Story />
      </div>
    </>
  )
}

export default App

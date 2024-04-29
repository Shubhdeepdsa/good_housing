import './App.css'
import Navbar from './Components/Navbar'
import Hero from './HeroSection/Hero'
import ShowCaseSection from './ProductShowcase/ShowCase'
import Story from './Story/Story'
import Review from './ReviewSection/Review'
function App() {

  return (
    <>
      <div className="app_container ">
          <Navbar  />
          <Hero />
          <ShowCaseSection />
          <Story />
          <Review />
      </div>
    </>
  )
}

export default App

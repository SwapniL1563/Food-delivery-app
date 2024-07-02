import HeroSection from '../src/components/HeroSection'
import About from '../src/components/About'
import Qualities from '../src/components/Qualities'
import Menu from '../src/components/Menu'
import Service from '../src/components/Service'
import Team from '../src/components/Team'
import Reservation from '../src/components/Reservation'
import Footer from '../src/components/Footer'

const Home = () => {
  return (
   <>
   <HeroSection></HeroSection>
   <About></About>
   <Qualities></Qualities>
   <Menu></Menu>
   <Service></Service>
   <Team></Team>
   <Reservation></Reservation>
   <Footer></Footer>
   </>
  )
}

export default Home
import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
<main className='container mx-auto text-white'>
  
  <Navbar />
  <Hero />

</main>  )
}

export default App
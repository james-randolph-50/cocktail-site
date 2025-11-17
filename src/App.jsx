import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <div className='text-3xl text-blue-500'>Hello</div>
  )
}

export default App
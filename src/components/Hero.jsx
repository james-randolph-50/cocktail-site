import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Hero = () => {

    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars'});
        const subtitleSplit = new SplitText('.subtitle', {type: 'words'});

        gsap.from(heroSplit.chars, {
            opacity: 0,
            yPercent: -100,
            duration: 0.25,
            ease: 'expo.out',
            stagger: 0.05,
        })

        gsap.from(subtitleSplit.words, {
            opacity: 0,
            delay: 0.25,
            duration: 0.25,
            ease: 'expo.out',
            stagger: 0.05,
        })
    }, []);


  return (
    <section id="hero">
        <h1 className='title text-4xl font-bold'>El Osito</h1>
        <p className='subtitle'>Yummy cocktails and mocktails</p>
    </section>
  )
}

export default Hero
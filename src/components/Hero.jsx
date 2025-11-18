import { useRef } from 'react';
import { useGSAP } from '@gsap/react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const videoRef = useRef();
    const heroVideo = "./hero-video.mp4"

    const isMobile = useMediaQuery({ maxWidth: 767 });

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

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        let timeline = gsap.timeline({
            scrollTrigger: {
               trigger: "video",
               start: startValue,
               end: endValue,
               scrub: true,
               pin: true,
            },
           });
           
           videoRef.current.onloadedmetadata = () => {
            timeline.to(videoRef.current, {
               currentTime: videoRef.current.duration,
            });
           };
       
    }, [isMobile]);


  return (
    <>
    <section id="hero">
        <h1 className='title text-4xl font-bold color-primary-color'>El Osito</h1>
        <p className='subtitle' href="#menu">View our cocktails and mocktails</p>

        
    </section>
    <div className="w-full md:h[80%] md:object-contain h-1/2 absolute object-bottom object-cover inset-0">
    <video 
        ref={videoRef}
        src={heroVideo}
        muted
        preload="auto"
        playsInline
    />
    </div>

    </>
  )
}

export default Hero
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants'



const Navbar = () => {
    const bearLogo = "./bear.svg"

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            },
        });

        navTween.fromTo(
            'nav',
            { backgroundColor: 'transparent' },
            {
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(10px)',
                duration: 0.5,
                ease: 'power2.inOut',
            },
        );
    });


  return (
    <nav className='sticky top-0'>
    <div className='flex justify-between items-center'>
        <a href="#home" className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <img className='w-10 h-10' src={bearLogo} alt="El Osito Logo" />
                <p>El Osito</p>
            </div>
        </a>

        <ul className='flex items-center gap-4'>
           {navLinks.map((item) => (
            <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
            </li>
           ))}
        </ul>
            </div>
        </nav>
    );
};

export default Navbar;
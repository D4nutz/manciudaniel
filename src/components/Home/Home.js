import {ReactComponent as BackgroundLogo} from '../IMG/logo-background.svg';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Home = () => {
    return (
    <div className='w-full h-full flex flex-row justify-center gap-40 items-center
    max-lg:gap-20
    max-sm:gap-10 max-sm:flex-col'>
            <div className='w-full h-full absolute left-0 z-1 bg-gradient-to-r from-navbarbg to-transparent
            dark:from-navbardarkbg'>

            </div>
            <div className='w-1/3 z-40 flex flex-col gap-2
            max-lg:w-1/2
            max-sm:w-full'>
                <p className='w-full text-3xl text-black font-bold
                max-lg:text-xl
                dark:text-white
                '>Hello</p>
                <p className='w-full text-5xl text-black font-bold tracking-widest
                max-lg:text-3xl
                dark:text-white
                '><span>Daniel Here.</span></p>
                <p className='w-full text-sm text-black
                max-lg:text-xs
                dark:text-white
                '>Energetic Frontend Developer with a disciplined engineering background. Challenges are met with unwavering determination; "I can't" only sparks a renewed, relentless effort. Prioritizing discipline and hard work over talent, my focus is on continual improvement and delivering top-tier results.</p>              
                <div className='flex flex-row gap-4 mt-10
                max-sm:mt-2'>
                    <a href='https://www.linkedin.com/in/daniel-manciu-b113581b1/'>
                        <FaLinkedinIn className='text-4xl text-black transition ease-in-out border-b-2 pb-2
                        hover:-translate-y-1 hover:scale-110 duration-300 
                        dark:text-white'/>
                    </a>
                    <a href='https://github.com/D4nutz'>
                        <FaGithub className='text-4xl text-black transition ease-in-out border-b-2 pb-2
                        hover:-translate-y-1 hover:scale-110 duration-300
                        dark:text-white'/>
                    </a>
                </div>
            </div>
            <div className="w-1/3 rounded-xl relative
            max-sm:w-3/4">
                <BackgroundLogo className='w-full relative animate-float z-2'/>
                <div className='w-full absolute h-1 bg-black blur-sm perspective-holo animate-holographicdark z-4
                dark:animate-holographiclight dark:bg-white
                '>
                </div>
            </div>
        </div>
    )
};

export default Home;
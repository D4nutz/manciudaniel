import {ReactComponent as DarkLogo} from './logo/logo-dark.svg';
import {ReactComponent as LightLogo} from './logo/logo-light.svg';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
     <ul className="fixed top-0 bg-slate-600 w-screen h-auto m-0 px-10 py-2 flex flex-row items-center text-white shadow-lg 
     max-sm:justify-between ">
        <li className="flex flex-row justify-around items-center w-auto h-auto p-1">
            <div className='h-full w-20 
            max-lg:w-12'>
                <LightLogo/>
            </div>
        </li>
        <li className='hidden
        max-sm:block' onClick={hamburgeropen}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </li>
        <li id='togglemenu' className="flex flex-row justify-evenly items-center w-auto gap-4 h-auto p-1 
        max-sm:hidden max-sm:absolute max-sm:flex-col max-sm:top-10 max-sm:w-full max-sm:bg-slate-600 max-sm:left-0 max-sm:p-5 animate-h0to100">
            <a href="#" className='text-sm max-lg:text-xs transition ease-in-out hover:text-cyan-500 hover:-translate-y-1 hover:scale-110 duration-300'>&lt;Meet me/&gt;</a>
            <a href="#" className='text-sm max-lg:text-xs transition ease-in-out hover:text-cyan-500 hover:-translate-y-1 hover:scale-110 duration-300'>&lt;Career/&gt;</a>
            <a href="#" className='text-sm max-lg:text-xs transition ease-in-out hover:text-cyan-500 hover:-translate-y-1 hover:scale-110 duration-300'>&lt;Projects/&gt;</a>
            <a href="#" className='text-sm max-lg:text-xs transition ease-in-out hover:text-cyan-500 hover:-translate-y-1 hover:scale-110 duration-300'>&lt;Let's talk/&gt;</a>
            <div className='hidden
            max-sm:flex flex-row justify-center gap-5'>
                <a href='https://www.linkedin.com/in/daniel-manciu-b113581b1/'>
                <FaLinkedinIn className='text-2xl transition ease-in-out hover:text-cyan-500 hover:-translate-y-1 hover:scale-110 duration-300 
                max-lg:text-xl'/>
                </a>
                <a href='https://github.com/D4nutz'>
                <FaGithub className='text-2xl transition ease-in-out hover:text-cyan-500 hover:-translate-y-1 hover:scale-110 duration-300
                max-lg:text-xl'/>
                </a>
            </div>
        </li>
        <li className="flex flex-row justify-evenly items-center w-fit gap-4 h-auto p-1 ml-auto 
        max-sm:hidden ">
            <a href='https://www.linkedin.com/in/daniel-manciu-b113581b1/'>
            <FaLinkedinIn className='text-2xl transition ease-in-out hover:text-cyan-500 hover:-translate-y-1 hover:scale-110 duration-300 
            max-lg:text-xl'/>
            </a>
            <a href='https://github.com/D4nutz'>
            <FaGithub className='text-2xl transition ease-in-out hover:text-cyan-500 hover:-translate-y-1 hover:scale-110 duration-300
            max-lg:text-xl'/>
            </a>
        </li>
     </ul>
    )

function hamburgeropen(){
    let togglemenu = document.getElementById('togglemenu');

    if (togglemenu.classList.contains('max-sm:hidden')){
        togglemenu.classList.remove('max-sm:hidden');
    } else {
        togglemenu.classList.add('max-sm:hidden');
    }
}

};

export default Navbar
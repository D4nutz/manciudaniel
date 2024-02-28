import {ReactComponent as CircularLogo} from './logo/logo-navbar-MD.svg';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

/* hamburger toggle */
function hamburgeropen(){
    let togglemenu = document.getElementById('togglemenu');

    if (togglemenu.classList.contains('max-sm:hidden') || togglemenu.classList.contains('animate-reverseh0to100')) {
        togglemenu.classList.remove('max-sm:hidden');
        togglemenu.classList.remove('animate-reverseh0to100');
        togglemenu.classList.add('animate-h0to100');
    } else {
        togglemenu.classList.add('animate-reverseh0to100');
        togglemenu.classList.remove('animate-h0to100');
        setTimeout(() => {
        togglemenu.classList.add('max-sm:hidden');
        }, 500);
    }
}

/*initial themecheck*/
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeCheck = () => {
    const hamburgermenu = document.getElementById('hamburgermenu');
    const logocircular = document.getElementById('logo-navbar');
    const moonicon = document.getElementById('moonicon');
    const sunicon = document.getElementById('sunicon');

    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add('dark');
        logocircular.classList.add('light');
        moonicon.style.display = "block";
        sunicon.style.display = "none";
        hamburgermenu.setAttribute("stroke","black");
        return;
    } else {
        document.documentElement.classList.remove('dark');
        logocircular.classList.add('dark');
        sunicon.style.display = "block";
        moonicon.style.display = "none";
        hamburgermenu.setAttribute("stroke","white");
    }
};

/*manual theme toggle*/
const themeSwtich = () => {
    const moonicon = document.getElementById('moonicon');
    const sunicon = document.getElementById('sunicon');
    const logocircular = document.getElementById('logo-navbar');
    const hamburgermenu = document.getElementById('hamburgermenu');

    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        logocircular.classList.add('dark');
        logocircular.classList.remove('light');

        sunicon.style.display = "block";
        moonicon.style.display = "none";
        localStorage.setItem("theme", "light");
        hamburgermenu.setAttribute("stroke","black");
        return;
    }
        document.documentElement.classList.add('dark');
        logocircular.classList.add('light');
        logocircular.classList.remove('dark');

        moonicon.style.display = "block";
        sunicon.style.display = "none";
        localStorage.setItem("theme", "dark");
        hamburgermenu.setAttribute("stroke","white");
};

/*themecheck call*/
/*call function after window is fully loaded*/ 
window.onload = function(event) {
    themeCheck();
};

const Navbar = () => {
    return (
     <ul className="fixed top-0 z-50 bg-navbarbg w-screen h-auto m-0 px-10 py-2 flex flex-row items-center shadow-lg 
                  dark:bg-navbardarkbg">
        <li className="flex flex-row justify-around items-center w-auto h-auto p-1">
            <div className='h-full w-20
                            max-lg:w-12'>
                <CircularLogo/>
            </div>
        </li>
        <li className='hidden
                        max-sm:block max-sm:ml-auto' onClick={hamburgeropen}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" id='hamburgermenu' fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </li>
        <li id='togglemenu' className="flex bg-navbarbg flex-row justify-evenly items-center w-auto 
                                       gap-4 h-auto p-1 fill-mode-forwards
                max-sm:hidden max-sm:overflow-hidden max-sm:absolute max-sm:flex-col
                max-sm:top-10 max-sm:w-full max-sm:p-4
                max-sm:left-0 
                dark:bg-navbardarkbg">
            <a href="#" className='text-sm text-black transition ease-in-out 
            hover:text-hovernav hover:-translate-y-1 hover:scale-110 duration-300
            max-lg:text-xs
            dark:text-white'>&lt;Meet me/&gt;</a>
            <a href="#" className='text-sm text-black transition ease-in-out 
            hover:text-hovernav hover:-translate-y-1 hover:scale-110 duration-300
            max-lg:text-xs
            dark:text-white'>&lt;Career/&gt;</a>
            <a href="#" className='text-sm text-black transition ease-in-out 
            hover:text-hovernav hover:-translate-y-1 hover:scale-110 duration-300
            max-lg:text-xs
            dark:text-white'>&lt;Projects/&gt;</a>
            <a href="#" className='text-sm text-black transition ease-in-out 
            hover:text-hovernav hover:-translate-y-1 hover:scale-110 duration-300
            max-lg:text-xs
            dark:text-white'>&lt;Let's talk/&gt;</a>
            <div className='hidden
            max-sm:flex flex-row justify-center gap-5'>
                <a href='https://www.linkedin.com/in/daniel-manciu-b113581b1/'>
                <FaLinkedinIn className='text-2xl text-black transition ease-in-out 
                hover:text-hovernav hover:-translate-y-1 hover:scale-110 duration-300 
                max-lg:text-xl
                dark:text-white'/>
                </a>
                <a href='https://github.com/D4nutz'>
                <FaGithub className='text-2xl text-black transition ease-in-out 
                hover:text-hovernav hover:-translate-y-1 hover:scale-110 duration-300
                max-lg:text-xl
                dark:text-white'/>
                </a>
            </div>
        </li>
        <li className="flex flex-row justify-evenly items-center w-fit gap-4 h-auto p-1 ml-auto 
        max-sm:hidden">
            <a href='https://www.linkedin.com/in/daniel-manciu-b113581b1/'>
            <FaLinkedinIn className='text-2xl text-black transition ease-in-out
            hover:text-hovernav hover:-translate-y-1 hover:scale-110 duration-300 
            max-lg:text-xl
            dark:text-white'/>
            </a>
            <a href='https://github.com/D4nutz'>
            <FaGithub className='text-2xl text-black transition ease-in-out 
            hover:text-hovernav hover:-translate-y-1 hover:scale-110 duration-300
            max-lg:text-xl
            dark:text-white'/>
            </a>
        </li>
        <li onClick={themeSwtich} className='flex flex-row justify-evenly items-center w-fit ml-4 h-auto p-1'>
            <FaMoon id="moonicon" className="text-2xl text-white absolute transition ease-in-out 
            hover:text-hovernav hover:-translate-y-1 hover:scale-110 duration-300
            max-lg:text-xl" />
            <MdSunny id="sunicon" className="text-2xl text-black absolute transition ease-in-out 
            hover:text-hovernav hover:-translate-y-1 hover:scale-110 duration-300
            max-lg:text-xl" />
        </li>
     </ul>
    )
};

export default Navbar
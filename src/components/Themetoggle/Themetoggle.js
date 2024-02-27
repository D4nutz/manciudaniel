import { FaLightbulb, FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

const Themetoggle = () => {
    return (
        <div onClick={themeSwtich} className="w-10 h-10 p-4 flex flex-col border-4 border-transparent justify-center items-center ml-auto cursor-pointer relative rounded-b-full bg-navbarbg shadow-themetoggleshadow
        hover:h-16 transition-all ease-linear
        dark:bg-navbardarkbg">
            <FaMoon id="moonicon" className="text-2xl text-white absolute
            hover:animate-bounce" />
            <MdSunny id="sunicon" className="text-2xl  text-black absolute
            hover:animate-bounce" />
        </div>
    )
};

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

/*initial themecheck*/
const themeCheck = () => {
    const logolight = document.getElementById('logo-light');
    const logodark = document.getElementById('logo-dark');

    const moonicon = document.getElementById('moonicon');
    const sunicon = document.getElementById('sunicon');

    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add('dark');
        moonicon.style.display = "block";
        sunicon.style.display = "none";
        logolight.style.display = "block";
        logodark.style.display = "none";
        return;
    } else {
        document.documentElement.classList.remove('dark');
        sunicon.style.display = "block";
        moonicon.style.display = "none";
        logodark.style.display = "block";
        logolight.style.display = "none";
    }
};

/*manual theme toggle*/

const themeSwtich = () => {
    const logolight = document.getElementById('logo-light');
    const logodark = document.getElementById('logo-dark');
    const moonicon = document.getElementById('moonicon');
    const sunicon = document.getElementById('sunicon');

    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        sunicon.style.display = "block";
        moonicon.style.display = "none";
        logodark.style.display = "block";
        logolight.style.display = "none";
        localStorage.setItem("theme", "light");
        return;
    }
        document.documentElement.classList.add('dark');
        moonicon.style.display = "block";
        sunicon.style.display = "none";
        logolight.style.display = "block";
        logodark.style.display = "none";
        localStorage.setItem("theme", "dark");
};

window.onload = function(event) {
    themeCheck();
};
/*themecheck call*/

export default Themetoggle
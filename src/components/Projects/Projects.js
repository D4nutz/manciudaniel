import { ReactComponent as CircularLogo } from '../IMG/logo-navbar-MD.svg';
import { ReactComponent as Movieapp } from '../IMG/github-movie-logo.svg';
import { IoIosWifi, IoIosBatteryFull, IoIosSearch } from "react-icons/io";
import { useEffect } from 'react';
import PeugeotNeo from './CodeSnip/PeugeotNeo/PeugeotNeo'

const Projects = () => {
    useEffect(() => {
        const intervalId = setInterval(showTime, 1000);
        // Clear the interval when the component is unmounted
        openapps();
        return () => clearInterval(intervalId);
    }, []);

    // Defining showTime function
    function showTime() {
        // Getting current time and date
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();

        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;

        let currentTime = hour + ":" + min;

        // Displaying the time
        const clockElement = document.getElementById("clock");
        if (clockElement) {
            clockElement.innerHTML = currentTime;
        }
    }

    function openapps(){
    var peugeot = document.querySelector('.open-peugeot');
    var peugeotsite = document.querySelector('.peugeot-site');
    var evobat = document.querySelector('.open-evo');
    var everymovie = document.querySelector('.open-every');
    var containerhidden = document.querySelector('.container-main-screen');
    var containerpadding = document.querySelector('.container-padding');
    var iframepeugeot = document.getElementById('inlineFrameExample');
    peugeot.addEventListener('click', () => {
        peugeotsite.classList.add('flex');
        peugeotsite.classList.remove('hidden');
        containerhidden.classList.add('hidden');
        containerpadding.classList.remove('px-2');
        iframepeugeot.classList.remove('hidden');
    });



    }

    

    return(
        <div className="w-full h-full flex flex-col items-center justify-evenly">
            <h1 className="w-full text-3xl text-black text-center
                max-lg:text-xl
                dark:text-white">&lt;Projects/&gt;</h1>
            <div className="w-1/6 h-4/6 rounded-3xl border-2 border-inactive relative overflow-hidden
            max-sm:w-full max-sm:h-3/4">
                <CircularLogo className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                <div className='container-padding w-full h-full px-2 py-2 backdrop-blur-sm flex flex-col'>
                    <div className='w-full h-auto flex flex-row justify-between items-center'>
                        <div id='clock' className='w-auto h-4 text-xs text-white text-nowrap'>
                        </div>
                        <div className='w-1/2 h-8 rounded-3xl bg-black flex items-center px-2'>
                            <div className='w-4 h-4 bg-phonecamera flex ml-auto rounded-full p-0.5'>
                                <div className='w-full h-full rounded-full bg-phonecamera-inner flex justify-center items-center overflow-hidden'>
                                    <span className='w-3/5 h-3/5 rounded-full flex bg-gradient-radial from-phonecamera-inner-blue to-white opacity-50'></span>
                                </div>
                            </div>
                        </div>
                        <div className='w-auto gap-1 flex flex-row text-white justify-center items-center'>
                            <IoIosWifi />
                            <IoIosBatteryFull />
                        </div>
                    </div>
                    <div className='container-main-screen block'>
                        <div className='w-full h-auto p-2 rounded-xl bg-white bg-opacity-50 gap-2 bg-transparent my-4 text-xs text-white flex flex-row justify-center items-center'>
                            <IoIosSearch />
                            <p className=''>Pick a project</p>
                        </div>
                        <div className='w-full h-auto grid grid-cols-3 gap-2 relative'>
                            <div className='open-peugeot w-full rounded-xl p-1 gap-1 flex flex-col items-start justify-start cursor-pointer'>
                                <div className='w-full bg-denied rounded-lg p-1 shadow-[0px_0px_10px_0px_#2d3748]'>
                                        <Movieapp />
                                </div>
                                <p className='w-full text-xs text-white text-center'>Peugeot</p>
                            </div>
                            <div className='open-evo w-full rounded-xl p-1 gap-1 flex flex-col items-start justify-start cursor-pointer'>
                                <div className='w-full bg-denied rounded-lg p-1 shadow-[0px_0px_10px_0px_#2d3748]'>
                                    <Movieapp />
                                </div>
                                <p className='text-xs text-white text-center'>Evobat</p>
                            </div>
                            <div className='open-every w-full rounded-xl p-1 gap-1 flex flex-col items-start justify-start cursor-pointer'>
                                <div className='w-full bg-denied rounded-lg p-1 shadow-[0px_0px_10px_0px_#2d3748]'>
                                    <Movieapp />
                                </div>
                                <p className='text-xs text-white text-center'>Every Movie</p>
                            </div>
                        </div>
                    </div>
                    <div className='peugeot-site hidden w-full h-full overflow-auto'>
                        <PeugeotNeo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
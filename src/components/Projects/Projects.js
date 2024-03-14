import { ReactComponent as CircularLogo } from '../IMG/logo-navbar-MD.svg';
import { ReactComponent as Movieapp } from '../IMG/github-movie-logo.svg';
import { ReactComponent as EvobatLogo } from '../IMG/evobat.svg';
import { IoIosWifi, IoIosBatteryFull, IoIosSearch, IoIosVolumeHigh, IoLogoWindows, IoLogoChrome, IoMdClose } from "react-icons/io";
import { FaRegWindowRestore, FaRegWindowMinimize  } from "react-icons/fa6";
import { SiVisualstudio } from "react-icons/si";
import { useEffect } from 'react';
import PeugeotNeo from './CodeSnip/PeugeotNeo/PeugeotNeo';
import Evobat from './CodeSnip/PeugeotNeo/Evobat';
import ReactDOM from 'react-dom'; // Import ReactDOM


const Projects = () => {
    useEffect(() => {
        const intervalId = setInterval(showTime, 1000);
        // Clear the interval when the component is unmounted
        
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
        const clockElement = document.querySelectorAll("#clock");
        if (clockElement) {
        clockElement.forEach((clock) => {
            clock.innerHTML = currentTime;
        });
    }
    }

    function openapps(target, company) {
        // Assuming you want to log the string "desktop"\
        var appned_container = document.getElementById("append-" + target);
        var iframe = '';

        var picked = (company === 'peugeot') ? (iframe = <PeugeotNeo />) : (company === 'evobat') ? (iframe = <Evobat />) : 'error';

        if(appned_container){
            var hidemenu = document.querySelector('#hideappsdesktop');
            var topbar = document.querySelector('#topbar');
            var closeiframe = document.querySelectorAll('.closeiframe');

            topbar.style.display = 'flex';
            hidemenu.style.display = 'none';
            ReactDOM.render(iframe, appned_container);

            closeiframe.forEach((e) => {
                e.addEventListener('click', () => {
                    ReactDOM.render('', appned_container);
                    topbar.style.display = 'none';
                    hidemenu.style.display = 'flex';
                });
            });
        }
    }

    

    return(
        <div className="w-full h-full flex flex-col items-center justify-evenly">
            <div className="hidden w-1/6 h-4/6 rounded-3xl border-2 border-inactive relative overflow-hidden
            max-sm:w-3/4 max-sm:h-3/4 max-sm:flex">
                <CircularLogo className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                <div className='container-padding w-full h-full px-2 py-2 backdrop-blur-sm flex-col'>
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
            <div className="w-full h-screen relative overflow-hidden flex flex-col justify-center items-center p-10 top-6">
                <div className='w-11/12 h-full rounded-3xl bg-black border-2 border-inactive -mb-2 p-8 overflow-hidden'>
                    <div className='w-full h-full bg-navbardarkbg relative flex flex-col'>
                        <CircularLogo className='w-1/3 h-1/3 absolute blur-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'/>
                        <div id='hideappsdesktop' className='w-full h-full p-4 flex flex-col gap-6'>
                            <div className='w-14 h-14 rounded-xl p-1 gap-1 flex flex-col items-start justify-start cursor-pointer'>
                                    <div onClick={() => openapps('desktop', 'peugeot')} className='w-full bg-denied rounded-lg p-1 shadow-[0px_0px_10px_0px_#2d3748]'>
                                            <Movieapp />
                                    </div>
                                    <p className='w-full text-xs text-white text-center'>Peugeot</p>
                            </div>
                            <div className='w-14 h-14 rounded-xl p-1 gap-1 flex flex-col items-start justify-start cursor-pointer'>
                                    <div onClick={() => openapps('desktop', 'evobat')} className='w-full bg-navbardarkbg rounded-lg p-1 shadow-[0px_0px_10px_0px_#2d3748]'>
                                            <EvobatLogo />
                                    </div>
                                    <p className='w-full text-xs text-white text-center'>Evobat</p>
                            </div>
                        </div>
                        <div id='topbar' className='hidden w-full bg-gray mb-auto flex-row justify-between text-white'>
                            <div className='w-auto flex flex-row items-center justify-center ml-auto text-md'>
                                <div className='hover:bg-inactive p-3'>
                                    <FaRegWindowMinimize/>
                                </div>
                                <div className='hover:bg-inactive p-3'>
                                    <FaRegWindowRestore />
                                </div>
                                <div className='closeiframe hover:bg-denied p-3 cursor-pointer'>
                                    <IoMdClose />
                                </div>
                            </div>
                        </div>
                        <div id='append-desktop' className='w-full h-full z-10'></div>
                        <div className='w-full h-8 bg-gray mt-auto flex flex-row justify-between p-2 text-white'>
                            <div className='w-auto flex flex-row justify-center items-center gap-5 text-md'>
                                <IoLogoWindows />
                                <IoLogoChrome />
                                <SiVisualstudio />
                            </div>
                            <div className='w-auto flex flex-row justify-center items-center gap-1 text-md'>
                                <IoIosWifi />
                                <IoIosVolumeHigh />
                                <div id='clock' className='w-auto mt-auto mb-auto ml-auto text-xs text-white text-nowrap'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full rounded-b-xl h-8 overflow-hidden bg-inactive'></div>
            </div>
        </div>
    );
}

export default Projects;
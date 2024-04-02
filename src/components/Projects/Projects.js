import { ReactComponent as CircularLogo } from '../IMG/logo-navbar-MD.svg';
import { ReactComponent as EvobatLogo } from '../IMG/evobat.svg';
import { ReactComponent as PeugeotLogo } from '../IMG/peugeot-neo.svg';
import { IoIosWifi, IoIosBatteryFull, IoIosSearch, IoIosVolumeHigh, IoLogoWindows, IoLogoChrome, IoMdClose } from "react-icons/io";
import { FaRegWindowRestore, FaRegWindowMinimize  } from "react-icons/fa6";
import { SiVisualstudio } from "react-icons/si";
import { useEffect } from 'react';
import PeugeotNeo from './CodeSnip/PeugeotNeo/PeugeotNeo';
import Evobat from './CodeSnip/PeugeotNeo/Evobat';
import ReactDOM from 'react-dom/client'; // Import ReactDOM


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
            var hidemenu = document.querySelector('#hideapps-' + target);
            var topbar = document.querySelector('#topbar-' + target);
            var closeiframe = document.querySelectorAll('.closeiframe');

            setTimeout(() => {
                topbar.style.display = 'flex';
                hidemenu.style.display = 'none';
            }, 500);

            const root = ReactDOM.createRoot(appned_container);
            root.render(
                iframe
              );
              
            const sidebar = document.getElementById('slidebar')

            let touchstartY = 0
            let touchendY = 0
                
            function checkDirection() {
              if (touchendY < touchstartY){
                root.unmount(); 
                topbar.style.display = 'none';
                hidemenu.style.display = 'block';
              }
            }
            
            sidebar.addEventListener('touchstart', e => {
              touchstartY = e.changedTouches[0].screenY
            })
            
            sidebar.addEventListener('touchend', e => {
              touchendY= e.changedTouches[0].screenY
              checkDirection()
            })

            closeiframe.forEach((e) => {
                e.addEventListener('click', () => {
                    root.unmount(); 
                    topbar.style.display = 'none';
                    hidemenu.style.display = 'flex';
                });
            });
        }
    }

    return(
        <div className="w-full h-full flex flex-col items-center justify-evenly">
            <div className="w-full h-screen relative overflow-hidden flex flex-col justify-center items-center p-10 top-6
            max-sm:hidden">
                <div className='w-11/12 h-full rounded-3xl bg-black border-2 border-inactive -mb-2 p-8 overflow-hidden'>
                    <div className='w-full h-full bg-navbarbg relative flex flex-col
                    dark:bg-navbardarkbg'>
                        <CircularLogo className='w-1/3 h-1/3 absolute blur-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'/>
                        <div id='hideapps-desktop' className='w-full h-full p-4 flex flex-col gap-6'>
                            <div className='w-14 h-14 rounded-xl p-1 gap-1 flex flex-col items-start justify-start cursor-pointer'>
                                    <div onClick={() => openapps('desktop', 'peugeot')} className='w-full bg-black rounded-lg p-1 shadow-[0px_0px_10px_0px_#2d3748]'>
                                            <PeugeotLogo />
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
                        <div id='topbar-desktop' className='hidden w-full bg-navbarbg mb-auto flex-row justify-between text-black
                        dark:bg-navbardarkbg dark:text-white'>
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
                        <div className='w-full h-8 bg-navbarbg mt-auto flex flex-row justify-between p-2 text-black
                        dark:bg-navbardarkbg dark:text-white'>
                            <div className='w-auto flex flex-row justify-center items-center gap-5 text-md'>
                                <IoLogoWindows />
                                <IoLogoChrome />
                                <SiVisualstudio />
                            </div>
                            <div className='w-auto flex flex-row justify-center items-center gap-1 text-md'>
                                <IoIosWifi />
                                <IoIosVolumeHigh />
                                <div id='clock' className='w-auto mt-auto mb-auto ml-auto text-xs text-nowrap'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full rounded-b-xl h-8 overflow-hidden bg-gray
                dark:bg-white
                max-lg:hidden'></div>
            </div>
            <div className="hidden w-full h-4/5 rounded-3xl border-2 border-black relative overflow-hidden
            max-sm:flex
            dark:border-white">
                <CircularLogo className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                <div className='w-full h-full backdrop-blur-sm flex flex-col relative'>
                    <div className='w-full h-auto flex flex-row justify-between items-center px-4 py-2 text-black
                    dark:text-white'>
                        <div id='clock' className='w-auto h-4 text-xs text-nowrap'>
                        </div>
                        <div className='w-1/2 h-8 rounded-3xl bg-black flex items-center px-2'>
                            <div className='w-4 h-4 bg-phonecamera flex ml-auto rounded-full p-0.5'>
                                <div className='w-full h-full rounded-full bg-phonecamera-inner flex justify-center items-center overflow-hidden'>
                                    <span className='w-3/5 h-3/5 rounded-full flex bg-gradient-radial from-phonecamera-inner-blue to-white opacity-50'></span>
                                </div>
                            </div>
                        </div>
                        <div className='w-auto gap-1 flex flex-row justify-center items-center'>
                            <IoIosWifi />
                            <IoIosBatteryFull />
                        </div>
                    </div>
                    <div id='hideapps-mobile' className='container-main-screen block px-4 py-2 text-black
                    dark:text-white'>
                        <div className='w-full h-auto p-2 rounded-xl bg-white bg-opacity-50 gap-2 bg-transparent my-4 text-xs flex flex-row justify-center items-center'>
                            <IoIosSearch />
                            <p className=''>Pick a project</p>
                        </div>
                        <div className='w-full h-auto grid grid-cols-4 gap-4 relative'>
                            <div onClick={() => openapps('mobile', 'peugeot')} className='w-full rounded-xl p-1 gap-1 flex flex-col items-start justify-start cursor-pointer'>
                                <div className='w-full bg-black rounded-lg p-1 shadow-[0px_0px_10px_0px_#2d3748]'>
                                    <PeugeotLogo />
                                </div>
                                <p className='w-full text-xs text-center'>Peugeot</p>
                            </div>
                            <div onClick={() => openapps('mobile', 'evobat')} className='w-full rounded-xl p-1 gap-1 flex flex-col items-start justify-start cursor-pointer'>
                                <div className='w-full bg-navbardarkbg rounded-lg p-1 shadow-[0px_0px_10px_0px_#2d3748]'>
                                    <EvobatLogo />
                                </div>
                                <p className='w-full text-xs text-center'>Evobat</p>
                            </div>
                        </div>
                    </div>
                    <div id='append-mobile' className='w-full h-full z-10'></div>
                    <div id='topbar-mobile' className='hidden w-full bg-white h-auto p-4 bg-transparent mt-auto'>
                        <div id='slidebar' className='w-2/4 h-4 rounded-full bg-black m-auto'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
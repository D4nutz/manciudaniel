import ProfilePicturenobg from '../IMG/nobackground-profile-pic.webp';

const Contact = () => {
    function trigger_input(){
        var connect_input = document.getElementById('connect-input');
        connect_input.select();
        connect_input.focus();
    }

    function handleKeyDown(e) {
        var connect_input = document.getElementById('connect-input');
        if (e.key === 'Enter') {
            if(connect_input.value === "npm-init-connect"){
                var progressbar_countent = document.getElementById('progress-bar-content');
                var progressbar_counter = document.getElementById('progress-bar-counter');
                let i = 0;
                var id = setInterval(frame, 500);
                progressbar_counter.innerHTML = 0;
                progressbar_countent.innerHTML = '';
                function frame() {
                    if (i >= 100) {
                        clearInterval(id);
                        i = 0;
                        window.open("https://www.linkedin.com/in/daniel-manciu-b113581b1/");
                      } else {
                        i = i+10;
                        progressbar_counter.innerHTML = i;
                        progressbar_countent.append("#");             
                    }
                }
            }
        }
    }
        
    return (
        <div onClick={trigger_input} className='w-full h-full relative flex'>
            <div className="w-2/4 h-1/2 translate-x-0 translate-y-1/2 backdrop-blur-md border-2 border-black absolute rounded-xl
            max-sm:h-auto max-sm:w-full
            dark:border-white">
                    <div className='flex h-8 border-black border-b-2 p-2
                    dark:border-white'>
                        <p className='text-black text-sm m-auto uppercase
                        dark:text-white'>Terminal</p>
                    </div>
                    <div className='w-full h-full p-4'>
                        <p className=''><span className='text-darkvalid
                        dark:text-valid'>User@DESKTOP-A33HQ3A </span><span className='text-idle'> ~/manciudaniel/Let's connect </span><span className='text-navbardarkbg
                        dark:text-holo'> (main)</span></p>
                        <p className='text-black
                        dark:text-white'>$ Type "npm-init-connect" & enter key to connect with me</p>
                        <label className='text-black
                        dark:text-white'>$ <input autoComplete='off' autoCorrect="off" autoCapitalize="off" spellCheck="false" id='connect-input' onKeyDown={handleKeyDown} className='bg-transparent'></input></label>
                        <p className='text-black
                        dark:text-white'>$ [<span id="progress-bar-content"></span>]<span id='progress-bar-counter'></span><span>%</span></p>
                    </div>
            </div>
            <div className='z-10 w-auto h-4/5 mt-auto mx-auto relative
                max-sm:h-auto max-sm:w-screen'>
                <img alt='profile-pic' src={ProfilePicturenobg} className='w-full h-full'/>
            </div>

        </div>
    );
}

export default Contact
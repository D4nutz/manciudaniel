import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Career from './components/Career/Career';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App bg-navbarbg
     dark:bg-navbardarkbg">
      <header className="App-header h-14 px-20 max-lg:h-12
      max-sm:px-10">
          <Navbar />
      </header>
      <div id='Home' className='w-full h-dvh overflow-hidden px-20 py-2
      max-sm:px-10' >
        <Home />
      </div>
      <div id='Career' className='w-full h-dvh overflow-hidden px-20
      max-sm:px-10' >
        <Career />
      </div>
      <div id='Projects' className='w-full h-dvh overflow-hidden px-20
      max-sm:px-10' >
        <div className='w-full h-dvh hidden max-sm:block'>
          <Projects />
        </div>
      </div>
    </div>
  );
  
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App bg-navbarbg
     dark:bg-navbardarkbg">
      <header className="App-header h-14 max-lg:h-12">
        <Navbar />
      </header>
      <div className='w-full h-dvh overflow-hidden px-10 py-2' >
        <Home />
      </div>
    </div>
  );
  
}

export default App;

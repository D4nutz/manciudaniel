import './App.css';
import Navbar from './components/Navbar/Navbar';
import Themetoggle from './components/Themetoggle/Themetoggle';

function App() {
  return (
    <div className="App">
      <header className="App-header h-16 max-lg:h-12">
        <Navbar />
      </header>
      <div className='w-auto h-auto sticky px-10'>
        <Themetoggle />
      </div>
    </div>
  );
  
}

export default App;

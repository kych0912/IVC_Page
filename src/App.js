import logo from './logo.svg';
import './App.css';
import ivcbg from './IVC_BG.gif'
import Navbar from '../src/component/navbar'

function App() {
  return (
    <div className='bgd'>
      <Navbar/>
      <div className="app">
        <header className="App-header">
          <p className='mainslogun'>
            In your Venture, 
          </p>
          <p className='mainslogun1'>
            With our IVC.
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;

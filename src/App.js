
import './App.css';
import CounterFunctional from './components/CounterFunctional';
import CounterClass from './components/CounterClass';


function App() {
  return (

    <div className='Root-header'><h1>Assignment-1 Counter Application</h1>
      <div className='root-container' >


        < CounterFunctional />
        <CounterClass />
      </div>
    </div>
  );
}

export default App;

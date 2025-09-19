
import './App.css';
import CounterFunctional from './components/CounterFunctional';
import CounterClass from './components/CounterClass';


function App() {
  return (
    <div className='root-container' >
     < CounterFunctional />
     <CounterClass />
    </div>
  );
}

export default App;

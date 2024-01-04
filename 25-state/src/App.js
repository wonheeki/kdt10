import './App.css';
import Counter from './Counter';
import CounterFunc from './CounterFunc';
import SayFunction from './SayFunction';
import StateEx1 from './StateEx1';
import StateEx2 from './StateEx2';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <CounterFunc />
      <hr />
      <StateEx1 />
      <hr />
      <StateEx2 />
    </div>
  );
}

export default App;

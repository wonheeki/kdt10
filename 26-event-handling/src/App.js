import './App.css';
import ClassBind from './ClassBind.js';
import Counter from './Counter.js';
import SyntheticEvent from './SyntheticEvent.js';
import Ex from './components/ex/Ex.js';
import ExAll from './components/ex/ExAll.js';
import HandlerEx from './components/ex/HandlerEx.js';
import HandlerEx2 from './components/ex/HandlerEx2.js';
import HandlerEx3 from './components/ex/HandlerEx3.js';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <HandlerEx />
      <hr />
      <HandlerEx2 />
      <hr />
      <HandlerEx3 />
      <hr />

      {/* 전체 실습 */}
      <Ex />
      <hr />
      <ExAll />
    </div>
  );
}

export default App;

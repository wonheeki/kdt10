import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import SassEx1 from './SassEx1';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React styling</h1>
      <h2>CSS Module</h2>
      <CssModuleComponent />
      <hr />
      <h2>SASS</h2>
      <SassComponent />
      <hr />
      <h2>실습 1번</h2>
      <SassEx1 />
    </div>
  );
}

export default App;

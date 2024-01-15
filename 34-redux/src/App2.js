import { useSelector } from 'react-redux';
import Box1 from './component/Box1';
import './styles/Box.css';

function App() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="Box">
      <h1>React Redux Ex2</h1>
      <h2>{number}</h2>
      <Box1 />
    </div>
  );
}

export default App;

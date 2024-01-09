import CssModuleComponent from './CssModuleComponent';
import PostList from './PostList';
import SassComponent from './SassComponent';
import SassEx1 from './SassEx1';
import SassEx2 from './SassEx2';
import StyledComponent from './StyledComponent';
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
      {/* <h2>실습 1번</h2>
      <SassEx1 />
      <hr />
      <h2>실습 2번</h2>
      <SassEx2 />
      <hr />
      <h2>실습 3번</h2>
      <PostList />
      <hr /> */}
      <h2>Styled-Components</h2>
      <StyledComponent />
    </div>
  );
}

export default App;

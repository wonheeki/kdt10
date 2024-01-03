import './App.css';
import FuncComponent from './FuncComponent';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FoodComponent from './FoodComponent';
import Bestseller from './Bestseller';
import ConsoleComponent from './ConsoleComponent';

function App() {
  const myFunc = () => {
    console.log('콘솔 띄우기 성공!');
  };
  return (
    <div className="App">
      <FuncComponent name={3} />
      <FuncComponent />
      <hr />
      <Button link="https://www.google.com">Google</Button>
      <hr />
      <ClassComponent name="코딩온" />
      <ClassComponent />
      <hr />
      <FoodComponent food="불닭" />
      <FoodComponent />
      <hr />
      <Bestseller
        title="달러구트 꿈백화점"
        author="이미예"
        price="10000"
        type="소설"
      ></Bestseller>
      <hr />

      <ConsoleComponent text="hihi" valid={myFunc} />
      <ConsoleComponent />
    </div>
  );
}

export default App;

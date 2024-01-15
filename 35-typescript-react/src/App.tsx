import Student from './component/Student';
import TodoList from './component/TodoList';

function App() {
  const handleClick = (name: string, grade: number): void => {
    alert(`이 학생의 이름은 ${name}이고, ${grade}학년입니다.`);
  };
  return (
    <div className="App">
      <Student
        name="gildong"
        grade={1}
        subject="coding"
        handleClick={handleClick}
      />
      <Student name="hong" grade={2} handleClick={handleClick} />
      <TodoList />
    </div>
  );
}

export default App;

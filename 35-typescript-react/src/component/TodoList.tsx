import { TodoItemProp } from '../types/types';
import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState<TodoItemProp[]>([
    { id: 1, content: 'first memo', completed: false },
    { id: 2, content: 'second memo', completed: true },
  ]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    const updateTodo = [
      ...todos,
      { id: Date.now(), content: newTodo, completed: false },
    ];
    setTodos(updateTodo); // 전체 투두에 새로운 투두 추가
    setNewTodo(''); // input 초기화
  };

  const toggleTodo = (targetId: number) => {
    const updateTodo = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updateTodo);
  };
  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button onClick={addTodo}>add</button>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </>
  );
}

export default TodoList;

import { useState } from 'react';
import Header from './components/Header';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoFilter from './components/TodoFilter';

const initialState = [
  {
    id: 1,
    title: 'Learn React',
    completed: true,
  },
  {
    id: 2,
    title: 'Learn Vue',
    completed: false,
  },
  {
    id: 3,
    title: 'Learn Svelte',
    completed: false,
  },
  {
    id: 4,
    title: 'Learn Query',
    completed: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialState);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const todoLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <Header />
      <main className='container px-4 mx-auto mt-8'>
        <TodoCreate createTodo={createTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        <TodoComputed todoLeft={todoLeft} clearCompleted={clearCompleted} />
        <TodoFilter />
      </main>

      <footer className='mt-8 text-center'>Drag and drop to reorder list</footer>
    </div>
  );
};

export default App;

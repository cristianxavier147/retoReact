import { useState } from 'react';

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle('');
    }
    createTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-4 px-4 overflow-hidden bg-white rounded-md'>
      <span className='inline-block w-5 h-5 border-2 rounded-full'></span>
      <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-full p-4 text-gray-400 outline-none' type='text' placeholder='Create a new todo...' />
    </form>
  );
};

export default TodoCreate;

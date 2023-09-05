import CheckIcon from './icons/CheckIcon';
import CrossIcon from './icons/CrossIcon';
const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className='flex gap-4 border-b border-b-gray-400'>
      <button onClick={(e) => updateTodo(id)} className={`w-5 h-5 border-2 rounded-full ${completed ? 'flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'inline-block'}`}>
        {completed && <CheckIcon />}
      </button>
      <p className={`text-gray-600 grow ${completed && 'line-through'}`}>{title}</p>
      <button className='flex-none' onClick={(e) => deleteTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;

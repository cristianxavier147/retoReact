import CrossIcon from './components/icons/CrossIcon';

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className='container px-4 pt-8 mx-auto'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold tracking-[0.3em] text-white uppercase'>Todo</h1>
          <button>luna</button>
        </div>
        <form className='flex items-center gap-4 px-4 py-4 mt-8 overflow-hidden bg-white rounded-md'>
          <span className='inline-block w-5 h-5 border-2 rounded-full'></span>
          <input className='w-full p-4 text-gray-400 outline-none' type='text' placeholder='Create a new todo...' />
        </form>
      </header>
      <main className='container px-4 mx-auto mt-8'>
        <div className='px-4 bg-white rounded-md'>
          <article className='flex gap-4 px-4 py-4 border-b-gray-400'>
            <button className='inline-block w-5 h-5 border-2 rounded-full'></button>
            <p className='text-gray-600 grow'>Complete online javascript course in bluuwebs</p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className='flex items-center justify-between p-4 border-b-2'>
            <button className='inline-block w-5 h-5 border-2 rounded-full'></button>
            <p className='text-gray-600'>Complete online javascript course in bluuweb</p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className='flex items-center justify-between p-4 border-b-2'>
            <button className='inline-block w-5 h-5 border-2 rounded-full'></button>
            <p className='text-gray-600'>Complete online javascript course in bluuweb</p>
            <button>
              <CrossIcon />
            </button>
          </article>
        </div>

        <section>
          <span>5 items left</span>
          <button>Clear completed</button>
        </section>
      </main>

      <section className='container px-4 mx-auto'>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>

      <p className='text-center'>Drag and drop to reorder list</p>
    </div>
  );
};

export default App;

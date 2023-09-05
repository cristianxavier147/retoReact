import MoonIcon from './icons/MoonIcon';

const Header = () => {
  return (
    <header className='container px-4 pt-8 mx-auto'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold tracking-[0.3em] text-white uppercase'>Todo</h1>
        <button>
          <MoonIcon className='fill-orange-500' />
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const MemoryGame = () => {
  return (
    <div>
      <header className='p-6 mb-8'>
        <div className='flex justify-between'>
          <div className=' p-[2px] rounded-full bg-gradient-to-r from-pink-500  to-purple-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
            <Link
              to='/'
              className='block px-8 py-3 text-sm font-medium rounded-full hover:bg-transparent'
            >
              Home
            </Link>
          </div>
          <div className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Vocab
          </div>
        </div>
      </header>
      <div className='flex'>
        <h1>Memory Game</h1>
        <div className=' p-[2px] rounded-full bg-gradient-to-r from-pink-500  to-purple-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
          <button className='block px-8 py-3 text-sm font-medium rounded-full hover:bg-transparent'>
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;

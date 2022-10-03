import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const gameData = [
  { hiragana: 'あ' },
  { hiragana: 'い' },
  { hiragana: 'う' },
  { hiragana: 'え' },
  { hiragana: 'お' },
];

console.log(gameData);

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...gameData, ...gameData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

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
      <div className=''>
        <h1 className=''>Memory Game</h1>
        <div className=' p-[2px] rounded-full bg-gradient-to-r from-pink-500  to-purple-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
          <button
            onClick={shuffleCards}
            className='block px-2 py-3 text-sm font-medium rounded-full hover:bg-transparent'
          >
            New Game
          </button>
        </div>
        <div className='grid-col-2'>
          {cards.map((card) => (
            <div key={card.id}>
              <div>{card.hiragana}</div>
              <img src='/img/pngegg.png' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;

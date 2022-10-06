import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Singlecard from './Singlecard';

const gameData = [
  { hiragana: 'あ', matched: false },
  { hiragana: 'い', matched: false },
  { hiragana: 'う', matched: false },
  { hiragana: 'え', matched: false },
  { hiragana: 'お', matched: false },
];

console.log(gameData);

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...gameData, ...gameData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.hiragana === choiceTwo.hiragana) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.hiragana === choiceOne.hiragana) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className='bg-slate-300'>
      <header className='p-6 mb-12'>
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
            Memory Game
          </div>
        </div>
      </header>
      <div className=''>
        <div className=' p-[2px] ml-4 w-28 rounded-full bg-gradient-to-r from-pink-500  to-purple-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
          <button
            onClick={shuffleCards}
            className='block px-4 py-3 text-sm font-medium rounded-full hover:bg-transparent'
          >
            New Game
          </button>
        </div>
        <div className='grid grid-cols-5 m-4 '>
          {cards.map((card) => (
            <Singlecard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;

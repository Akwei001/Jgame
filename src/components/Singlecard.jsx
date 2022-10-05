import React from 'react';

const Singlecard = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className={flipped ? 'flipped' : ''}>
      <div className='relative p-2'>
        <div className='absolute border border-blue-500 w-28 text-8xl h-28'>
          {card.hiragana}
        </div>
        <img
          onClick={handleClick}
          className='object-contain border border-red-500 w-28 h-28'
          src='/img/pngegg.png'
          alt='card back'
        />
      </div>
    </div>
  );
};

export default Singlecard;

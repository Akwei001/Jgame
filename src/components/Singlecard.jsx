import React from 'react';

const Singlecard = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className='p-2'>
      <div className='border border-blue-500 w-28 text-8xl h-28'>
        {card.hiragana}
      </div>
      <img
        onClick={handleClick}
        className='object-contain border border-red-500 w-28 h-28'
        src='/img/pngegg.png'
        alt='card back'
      />
    </div>
  );
};

export default Singlecard;

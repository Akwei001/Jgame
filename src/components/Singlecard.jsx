import React from 'react';

const Singlecard = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div>
      <div className='relative p-24'>
        <div className={flipped ? '' : 'invisible'}>
          <div className='absolute bg-white border-4 border-pink-500 rounded-lg w-28 text-8xl h-28'>
            {card.hiragana}
          </div>
        </div>
        <div
          onClick={handleClick}
          className='rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 w-28 h-28'
        ></div>
        {/* <img
          onClick={handleClick}
          className='object-contain border-4 border-pink-500 rounded-lg w-28 h-28'
          src='/img/pngegg.png'
          alt='card back'
        /> */}
      </div>
    </div>
  );
};

export default Singlecard;

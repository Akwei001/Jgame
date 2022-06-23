import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const hiraganaTile = [
  { romaji: 'a', hirigana: 'あ' },
  { romaji: 'i', hirigana: 'い' },
  { romaji: 'u', hirigana: 'う' },
  { romaji: 'e', hirigana: 'え' },
  { romaji: 'o', hirigana: 'お' },
  { romaji: 'ka', hirigana: 'か' },
  { romaji: 'ki', hirigana: 'き' },
  { romaji: 'ku', hirigana: 'く' },
  { romaji: 'ke', hirigana: 'け' },
  { romaji: 'ko', hirigana: 'こ' },
  { romaji: 'sa', hirigana: 'さ' },
  { romaji: 'shi', hirigana: 'し' },
  { romaji: 'su', hirigana: 'す' },
  { romaji: 'se', hirigana: 'せ' },
  { romaji: 'so', hirigana: 'そ' },
  { romaji: 'ta', hirigana: 'た' },
  { romaji: 'chi', hirigana: 'ち' },
  { romaji: 'tsu', hirigana: 'つ' },
  { romaji: 'te', hirigana: 'て' },
  { romaji: 'to', hirigana: 'と' },
  { romaji: 'na', hirigana: 'な' },
  { romaji: 'ni', hirigana: 'に' },
  { romaji: 'nu', hirigana: 'ぬ' },
  { romaji: 'ne', hirigana: 'ね' },
  { romaji: 'no', hirigana: 'の' },
  { romaji: 'ha', hirigana: 'は' },
  { romaji: 'hi', hirigana: 'ひ' },
  { romaji: 'fu', hirigana: 'ふ' },
  { romaji: 'he', hirigana: 'へ' },
  { romaji: 'ho', hirigana: 'ほ' },
  { romaji: 'ma', hirigana: 'ま' },
  { romaji: 'mi', hirigana: 'み' },
  { romaji: 'mu', hirigana: 'む' },
  { romaji: 'me', hirigana: 'め' },
  { romaji: 'mo', hirigana: 'も' },
  { romaji: 'ya', hirigana: 'や' },
  { romaji: 'yu', hirigana: 'ゆ' },
  { romaji: 'yo', hirigana: 'よ' },
  { romaji: 'ra', hirigana: 'ら' },
  { romaji: 'ri', hirigana: 'り' },
  { romaji: 'ru', hirigana: 'る' },
  { romaji: 're', hirigana: 'れ' },
  { romaji: 'ro', hirigana: 'ろ' },
  { romaji: 'wa', hirigana: 'わ' },
  { romaji: 'wo', hirigana: 'を' },
  { romaji: 'n', hirigana: 'ん' },
  { romaji: 'ga', hirigana: 'が' },
  { romaji: 'za', hirigana: 'ざ' },
  { romaji: 'da', hirigana: 'だ' },
  { romaji: 'ba', hirigana: 'ば' },
  { romaji: 'pa', hirigana: 'ぱ' },
  { romaji: 'gi', hirigana: 'ぎ' },
  { romaji: 'ji', hirigana: 'じ' },
  { romaji: 'dji', hirigana: 'ぢ' },
  { romaji: 'bi', hirigana: 'び' },
  { romaji: 'pi', hirigana: 'ぴ' },
  { romaji: 'gu', hirigana: 'ぐ' },
  { romaji: 'zu', hirigana: 'ず' },
  { romaji: 'dzu', hirigana: 'づ' },
  { romaji: 'bu', hirigana: 'ぶ' },
  { romaji: 'pu', hirigana: 'ぷ' },
  { romaji: 'ge', hirigana: 'げ' },
  { romaji: 'ze', hirigana: 'ぜ' },
  { romaji: 'de', hirigana: 'で' },
  { romaji: 'be', hirigana: 'べ' },
  { romaji: 'pe', hirigana: 'ぺ' },
  { romaji: 'go', hirigana: 'ご' },
  { romaji: 'zo', hirigana: 'ぞ' },
  { romaji: 'do', hirigana: 'ど' },
  { romaji: 'bo', hirigana: 'ぼ' },
  { romaji: 'po', hirigana: 'ぽ' },
  { romaji: 'v', hirigana: 'ゔ' },
];

const katakanaTile = [
  { romaji: 'a', katakana: 'ア' },
  { romaji: 'i', katakana: 'イ' },
  { romaji: 'u', katakana: 'ウ' },
  { romaji: 'e', katakana: 'エ' },
  { romaji: 'o', katakana: 'オ' },
  { romaji: 'ka', katakana: 'カ' },
  { romaji: 'ki', katakana: 'キ' },
  { romaji: 'ku', katakana: 'ク' },
  { romaji: 'ke', katakana: 'ケ' },
  { romaji: 'ko', katakana: 'コ' },
  { romaji: 'sa', katakana: 'サ' },
  { romaji: 'shi', katakana: 'シ' },
  { romaji: 'su', katakana: 'ス' },
  { romaji: 'se', katakana: 'セ' },
  { romaji: 'so', katakana: 'ソ' },
  { romaji: 'ta', katakana: 'タ' },
  { romaji: 'chi', katakana: 'チ' },
  { romaji: 'tsu', katakana: 'ツ' },
  { romaji: 'te', katakana: 'テ' },
  { romaji: 'to', katakana: 'ト' },
  { romaji: 'na', katakana: 'ナ' },
  { romaji: 'ni', katakana: 'ニ' },
  { romaji: 'nu', katakana: 'ヌ' },
  { romaji: 'ne', katakana: 'ネ' },
  { romaji: 'no', katakana: 'ノ' },
  { romaji: 'ha', katakana: 'ハ' },
  { romaji: 'hi', katakana: 'ヒ' },
  { romaji: 'fu', katakana: 'フ' },
  { romaji: 'he', katakana: 'ヘ' },
  { romaji: 'ho', katakana: 'ホ' },
  { romaji: 'ma', katakana: 'マ' },
  { romaji: 'mi', katakana: 'ミ' },
  { romaji: 'mu', katakana: 'ム' },
  { romaji: 'me', katakana: 'メ' },
  { romaji: 'mo', katakana: 'モ' },
  { romaji: 'ya', katakana: 'ヤ' },
  { romaji: 'yu', katakana: 'ユ' },
  { romaji: 'yo', katakana: 'ヨ' },
  { romaji: 'ra', katakana: 'ラ' },
  { romaji: 'ri', katakana: 'リ' },
  { romaji: 'ru', katakana: 'ル' },
  { romaji: 're', katakana: 'レ' },
  { romaji: 'ro', katakana: 'ロ' },
  { romaji: 'wa', katakana: 'ワ' },
  { romaji: 'wo', katakana: 'ヲ' },
  { romaji: 'n', katakana: 'ン' },
  { romaji: 'ga', katakana: 'ガ' },
  { romaji: 'za', katakana: 'ザ' },
  { romaji: 'da', katakana: 'ダ' },
  { romaji: 'ba', katakana: 'バ' },
  { romaji: 'pa', katakana: 'パ' },
  { romaji: 'gi', katakana: 'ギ' },
  { romaji: 'ji', katakana: 'ジ' },
  { romaji: 'dji', katakana: 'ヂ' },
  { romaji: 'bi', katakana: 'ビ' },
  { romaji: 'pi', katakana: 'ピ' },
  { romaji: 'gu', katakana: 'グ' },
  { romaji: 'zu', katakana: 'ズ' },
  { romaji: 'dzu', katakana: 'ヅ' },
  { romaji: 'bu', katakana: 'ブ' },
  { romaji: 'pu', katakana: 'プ' },
  { romaji: 'ge', katakana: 'ゲ' },
  { romaji: 'ze', katakana: 'ゼ' },
  { romaji: 'de', katakana: 'デ' },
  { romaji: 'be', katakana: 'ベ' },
  { romaji: 'pe', katakana: 'ペ' },
  { romaji: 'go', katakana: 'ゴ' },
  { romaji: 'zo', katakana: 'ゾ' },
  { romaji: 'do', katakana: 'ド' },
  { romaji: 'bo', katakana: 'ボ' },
  { romaji: 'po', katakana: 'ポ' },
  { romaji: 'v', katakana: 'ヴ' },
];

const Quiz = () => {
  const [input, setInput] = useState('');

  const [current, setCurrent] = useState(0);

  const [score, setScore] = useState(0);

  const [highscore, setHighscore] = useState(0);

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const allTiles = [...hiraganaTile, ...katakanaTile];

  const shuffleTile = () => {
    const allTiles = [...hiraganaTile, ...katakanaTile];
    const displayTileIndex = Math.floor(Math.random() * allTiles.length);
    setCurrent(displayTileIndex);
  };

  console.log(current);
  console.log(allTiles[current].romaji);
  const handleSubmit = (e) => {
    e.preventDefault(e.target.value);

    if (input.toLowerCase() === allTiles[current].romaji) {
      setScore(score + 1);
      setHighscore(score + 1 > highscore ? score + 1 : highscore);
      localStorage.setItem('score', score + 1);
      localStorage.setItem(
        'highscore',
        score + 1 > highscore ? score + 1 : highscore
      );
      setError(false);
    } else {
      const h = allTiles[current].hirigana;
      const hr = allTiles[current].romaji;
      const k = allTiles[current].katakana;
      const kr = allTiles[current].romaji;

      console.log(k);
      console.log(h);

      setError(
        `Wrong! The correct answer is ${hr}` ||
          `Wrong! The correct answer is ${kr}`
      );
      setScore(0);
      localStorage.setItem('score', 0);
    }
    setInput('');
    shuffleTile();
  };

  useEffect(() => {
    shuffleTile();
    setScore(parseInt(localStorage.getItem('score')) || 0);
    setHighscore(parseInt(localStorage.getItem('score')) || 0);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white text-center'>
      <header className='p-6 mb-8'>
        <h1 className=' flex justify-between text-2xl font-bold'>
          <div className='inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500  to-purple-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
            <Link
              to='/'
              className='block px-8 py-3 text-sm font-medium  rounded-full hover:bg-transparent'
            >
              Home
            </Link>
          </div>
          <div className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Quiz
          </div>
        </h1>

        <div>
          <p>
            {score} / {highscore}
          </p>
        </div>
      </header>

      <div className='flex justify-center'>
        <div className='bg-white text-black text-9xl font-bold mb-8 rounded shadow-md'>
          {allTiles[current].hirigana || allTiles[current].katakana}
        </div>
      </div>

      <div className='mb-8'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={handleChange}
            value={input}
            className='block w-24 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-6xl pb-2'
          />
        </form>
      </div>

      {error && (
        <div className='text-2xl font-bold uppercase'>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const hiraganaTile = [
  { romaji: 'a', hiragana: 'あ' },
  { romaji: 'i', hiragana: 'い' },
  { romaji: 'u', hiragana: 'う' },
  { romaji: 'e', hiragana: 'え' },
  { romaji: 'o', hiragana: 'お' },
  { romaji: 'ka', hiragana: 'か' },
  { romaji: 'ki', hiragana: 'き' },
  { romaji: 'ku', hiragana: 'く' },
  { romaji: 'ke', hiragana: 'け' },
  { romaji: 'ko', hiragana: 'こ' },
  { romaji: 'sa', hiragana: 'さ' },
  { romaji: 'shi', hiragana: 'し' },
  { romaji: 'su', hiragana: 'す' },
  { romaji: 'se', hiragana: 'せ' },
  { romaji: 'so', hiragana: 'そ' },
  { romaji: 'ta', hiragana: 'た' },
  { romaji: 'chi', hiragana: 'ち' },
  { romaji: 'tsu', hiragana: 'つ' },
  { romaji: 'te', hiragana: 'て' },
  { romaji: 'to', hiragana: 'と' },
  { romaji: 'na', hiragana: 'な' },
  { romaji: 'ni', hiragana: 'に' },
  { romaji: 'nu', hiragana: 'ぬ' },
  { romaji: 'ne', hiragana: 'ね' },
  { romaji: 'no', hiragana: 'の' },
  { romaji: 'ha', hiragana: 'は' },
  { romaji: 'hi', hiragana: 'ひ' },
  { romaji: 'fu', hiragana: 'ふ' },
  { romaji: 'he', hiragana: 'へ' },
  { romaji: 'ho', hiragana: 'ほ' },
  { romaji: 'ma', hiragana: 'ま' },
  { romaji: 'mi', hiragana: 'み' },
  { romaji: 'mu', hiragana: 'む' },
  { romaji: 'me', hiragana: 'め' },
  { romaji: 'mo', hiragana: 'も' },
  { romaji: 'ya', hiragana: 'や' },
  { romaji: 'yu', hiragana: 'ゆ' },
  { romaji: 'yo', hiragana: 'よ' },
  { romaji: 'ra', hiragana: 'ら' },
  { romaji: 'ri', hiragana: 'り' },
  { romaji: 'ru', hiragana: 'る' },
  { romaji: 're', hiragana: 'れ' },
  { romaji: 'ro', hiragana: 'ろ' },
  { romaji: 'wa', hiragana: 'わ' },
  { romaji: 'wo', hiragana: 'を' },
  { romaji: 'n', hiragana: 'ん' },
  { romaji: 'ga', hiragana: 'が' },
  { romaji: 'za', hiragana: 'ざ' },
  { romaji: 'da', hiragana: 'だ' },
  { romaji: 'ba', hiragana: 'ば' },
  { romaji: 'pa', hiragana: 'ぱ' },
  { romaji: 'gi', hiragana: 'ぎ' },
  { romaji: 'ji', hiragana: 'じ' },
  { romaji: 'dji', hiragana: 'ぢ' },
  { romaji: 'bi', hiragana: 'び' },
  { romaji: 'pi', hiragana: 'ぴ' },
  { romaji: 'gu', hiragana: 'ぐ' },
  { romaji: 'zu', hiragana: 'ず' },
  { romaji: 'dzu', hiragana: 'づ' },
  { romaji: 'bu', hiragana: 'ぶ' },
  { romaji: 'pu', hiragana: 'ぷ' },
  { romaji: 'ge', hiragana: 'げ' },
  { romaji: 'ze', hiragana: 'ぜ' },
  { romaji: 'de', hiragana: 'で' },
  { romaji: 'be', hiragana: 'べ' },
  { romaji: 'pe', hiragana: 'ぺ' },
  { romaji: 'go', hiragana: 'ご' },
  { romaji: 'zo', hiragana: 'ぞ' },
  { romaji: 'do', hiragana: 'ど' },
  { romaji: 'bo', hiragana: 'ぼ' },
  { romaji: 'po', hiragana: 'ぽ' },
  { romaji: 'v', hiragana: 'ゔ' },
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

  console.log(typeof allTiles);

  const shuffleTile = () => {
    const allTiles = [...hiraganaTile, ...katakanaTile];
    const displayTileIndex = Math.floor(Math.random() * allTiles.length);
    setCurrent(displayTileIndex);
  };
  console.log(typeof current);
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
    <div className='min-h-screen text-center text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>
      <header className='p-6 mb-8'>
        <h1 className='flex justify-between text-2xl font-bold '>
          <div className='inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500  to-purple-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
            <Link
              to='/'
              className='block px-8 py-3 text-sm font-medium rounded-full hover:bg-transparent'
            >
              Home
            </Link>
          </div>
          <div className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
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
        <div className='mb-8 font-bold text-black bg-white rounded shadow-md text-9xl'>
          {allTiles[current].hirigana || allTiles[current].katakana}
        </div>
      </div>

      <div className='mb-8'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={handleChange}
            value={input}
            className='block w-24 pb-2 mx-auto text-6xl text-center bg-transparent border-b-2 outline-none border-b-white'
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

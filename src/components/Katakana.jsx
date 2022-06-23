import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

function Katakana() {
  const [ktile, setKtile] = useState(katakanaTile);
  return (
    <div className='min-h-screen text-center text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>
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
            Katakana
          </div>
        </div>
      </header>

      <div className='grid grid-cols-5 gap-4 m-10'>
        {ktile.map((tile) => (
          <div key={tile.id}>
            <div className='text-6xl font-bold text-black bg-white rounded shadow-md w-18 h-18'>
              <div className='py-20'>{tile.katakana}</div>
              <div className='py-20'>{tile.romaji}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Katakana;

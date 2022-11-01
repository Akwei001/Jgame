import React from 'react';
import { useState } from 'react';
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

function Hiragana() {
  const [htile, setHtile] = useState(hiraganaTile);
  return (
    <div className='min-h-screen text-center text-white bg-slate-50'>
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
            Hiragana
          </div>
        </div>
      </header>

      <div className='grid grid-cols-5 gap-4 m-10 '>
        {htile.map((tile) => (
          <div key={tile.id}>
            <div className='text-6xl font-bold text-transparent shadow-lg bg-slate-200 rounded-xl '>
              <div className=''>
                <div className='py-20 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 w-18 h-18'>
                  {tile.hiragana}
                </div>
                <div className='py-20 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 w-18 h-18'>
                  {tile.romaji}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hiragana;

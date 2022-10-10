import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const newVocab = [
  {
    kanji: '一',
    English: 'one',
    Onyomi: ['ichi,', 'itsu'],
    Kunyomi: ['hito(tsu),', 'hito'],
    kanjiVocab: ['一人 (one person, alone)'],
  },
  {
    kanji: '二',
    English: 'Two',
    Onyomi: ['ni'],
    Kunyomi: ['futa(tsu),', 'futa'],
    kanjiVocab: ['二人 (two people, pair)'],
  },
  {
    kanji: '三',
    English: 'Three',
    Onyomi: ['san'],
    Kunyomi: ['mit(tsu),', 'mi'],
    kanjiVocab: ['	三日 (3rd day of the month)'],
  },
  {
    kanji: '四',
    English: 'Four',
    Onyomi: ['shi'],
    Kunyomi: ['yo(tsu),', 'yo,', 'yon'],
    kanjiVocab: ['四日 (4th day of the month)'],
  },
  {
    kanji: '五',
    English: 'Five',
    Onyomi: ['go'],
    Kunyomi: ['itsu(tsu),', 'itsu'],
    kanjiVocab: ['五日 (5th day of the month)'],
  },
  {
    kanji: '六',
    English: 'Six',
    Onyomi: ['roku'],
    Kunyomi: ['	mut(tsu),', 'mu'],
    kanjiVocab: ['六日 (6th day of the month)'],
  },
  {
    kanji: '七',
    English: 'Seven',
    Onyomi: ['shichi'],
    Kunyomi: ['nana(tsu),', ' nana'],
    kanjiVocab: ['七日 (7th day of the month)'],
  },
  {
    kanji: '八',
    English: 'Eight',
    Onyomi: ['hachi'],
    Kunyomi: ['yat(tsu),', 'ya'],
    kanjiVocab: ['八日 (8th day of the month)'],
  },
  {
    kanji: '九',
    English: 'Nine',
    Onyomi: ['kyuu', 'ku'],
    Kunyomi: ['kokono(tsu),', 'kokono'],
    kanjiVocab: ['九日 (9th day of the month)'],
  },
  {
    kanji: '十',
    English: 'Ten',
    Onyomi: ['juu', 'ji'],
    Kunyomi: ['tou,', 'to'],
    kanjiVocab: ['十日 (10th day of the month)'],
  },
  {
    kanji: '百',
    English: 'Hundred',
    Onyomi: ['hyaku'],
    Kunyomi: ['-'],
    kanjiVocab: ['百万円 (1 million Yen)'],
  },
  {
    kanji: '千',
    English: 'Thousand',
    Onyomi: ['sen'],
    Kunyomi: ['chi'],
    kanjiVocab: ['千万円 (10 million Yen)'],
  },
  {
    kanji: '万',
    English: 'Ten Thousand',
    Onyomi: ['man, ban'],
    Kunyomi: ['-'],
    kanjiVocab: ['	万年筆 (fountain pen)'],
  },
  {
    kanji: '円',
    English: 'Yen',
    Onyomi: ['en'],
    Kunyomi: ['maru(i)'],
    kanjiVocab: ['	円い (round)'],
  },
  // {
  //   kanji: '',
  //   English: '',
  //   Onyomi: [],
  //   Kunyomi: [],
  //   kanjiVocab: [],
  // },
  // {
  //   kanji: '',
  //   English: '',
  //   Onyomi: [],
  //   Kunyomi: [],
  //   kanjiVocab: [],
  // },
];

const newVocab1 = [
  {
    kanji: '日',
    English: ['Day, sun'],
    Onyomi: ['nichi, jitsu'],
    Kunyomi: ['hi, ka'],
    kanjiVocab: ['明日 (tomorrow)'],
  },
  {
    kanji: '週',
    English: ['	Week'],
    Onyomi: ['shuu', ''],
    Kunyomi: ['-'],
    kanjiVocab: ['毎週 (every week)'],
  },
  {
    kanji: '月',
    English: ['Month, moon'],
    Onyomi: ['getsu, gatsu'],
    Kunyomi: ['tsuki'],
    kanjiVocab: ['月曜日 (Monday)'],
  },
  {
    kanji: '年',
    English: ['Year'],
    Onyomi: ['nen'],
    Kunyomi: ['toshi'],
    kanjiVocab: ['今年 (this year), 去年 (last year)'],
  },
  {
    kanji: '時',
    English: ['	Time, hour'],
    Onyomi: ['ji'],
    Kunyomi: ['toki'],
    kanjiVocab: ['時計 (clock, watch)'],
  },
  {
    kanji: '間',
    English: ['Time frame, span of time'],
    Onyomi: ['kan, ken'],
    Kunyomi: ['aida'],
    kanjiVocab: ['	時間 (time, hours)'],
  },
  {
    kanji: '分',
    English: ['Minute, part, to understand, to divide'],
    Onyomi: ['bun, bu, fun'],
    Kunyomi: ['wa(karu)'],
    kanjiVocab: ['	三十分 (thirty minutes), 自分 (oneself)'],
  },
  {
    kanji: '午',
    English: '',
    Onyomi: [],
    Kunyomi: [],
    kanjiVocab: [],
  },
  {
    kanji: '前',
    English: '',
    Onyomi: [],
    Kunyomi: [],
    kanjiVocab: [],
  },
  {
    kanji: '後',
    English: '',
    Onyomi: [],
    Kunyomi: [],
    kanjiVocab: [],
  },
  {
    kanji: '今',
    English: '',
    Onyomi: [],
    Kunyomi: [],
    kanjiVocab: [],
  },
  {
    kanji: '先',
    English: '',
    Onyomi: [],
    Kunyomi: [],
    kanjiVocab: [],
  },
  {
    kanji: '来',
    English: '',
    Onyomi: [],
    Kunyomi: [],
    kanjiVocab: [],
  },
  {
    kanji: '半',
    English: '',
    Onyomi: [],
    Kunyomi: [],
    kanjiVocab: [],
  },
  {
    kanji: '毎',
    English: '',
    Onyomi: [],
    Kunyomi: [],
    kanjiVocab: [],
  },
  {
    kanji: '何',
    English: '',
    Onyomi: [],
    Kunyomi: [],
    kanjiVocab: [],
  },
];

function Vocab() {
  const [vocab, setVocab] = useState(newVocab);
  return (
    <div>
      <header className='p-6 mb-8'>
        <div className='flex justify-between'>
          <div className=' p-[2px] rounded-full bg-gradient-to-r from-pink-500  to-purple-500 text-white active:text-opacity-75 focus:outline-none focus:ring'>
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
      {/* <div className='grid grid-cols-1 gap-4 m-10 bg-gray-500 rounded-lg'> */}
      <table className='m-10 text-lg bg-gray-200 border border-collapse rounded-lg table-auto'>
        <thead>
          <tr className='text-white rounded-lg bg-gradient-to-r from-purple-400 to-pink-600'>
            <th className='p-2 border border-white '>Kanji</th>
            <th className='p-2 border border-white '>English</th>
            <th className='p-2 border border-white '>Onyomi</th>
            <th className='p-2 border border-white '>Kunyomi</th>
            <th className='p-2 border border-white '>Kanji/Vocab</th>
          </tr>
        </thead>
        {newVocab.map((vocab) => (
          <tbody key={vocab.id}>
            <th className='p-2 text-sm border border-white '>{vocab.kanji}</th>
            <th className='p-2 text-sm border border-white '>
              {vocab.English}
            </th>
            <th className='p-2 text-sm border border-white '>{vocab.Onyomi}</th>
            <th className='p-2 text-sm border border-white '>
              {vocab.Kunyomi}
            </th>
            <th className='p-2 text-sm border border-white '>
              {vocab.kanjiVocab}
            </th>
          </tbody>
        ))}
      </table>

      <table className='m-10 text-lg bg-gray-200 border border-collapse rounded-lg table-auto'>
        <thead>
          <tr className='text-white rounded-lg bg-gradient-to-r from-purple-400 to-pink-600'>
            <th className='p-2 border border-white '>Kanji</th>
            <th className='p-2 border border-white '>English</th>
            <th className='p-2 border border-white '>Onyomi</th>
            <th className='p-2 border border-white '>Kunyomi</th>
            <th className='p-2 border border-white '>Kanji/Vocab</th>
          </tr>
        </thead>
        {newVocab1.map((vocab) => (
          <tbody key={vocab.id}>
            <th className='p-2 text-sm border border-white '>{vocab.kanji}</th>
            <th className='p-2 text-sm border border-white '>
              {' '}
              {vocab.English}
            </th>
            <th className='p-2 text-sm border border-white '>{vocab.Onyomi}</th>
            <th className='p-2 text-sm border border-white '>
              {vocab.Kunyomi}
            </th>
            <th className='p-2 text-sm border border-white '>
              {vocab.kanjiVocab}
            </th>
          </tbody>
        ))}
      </table>
      <table className='m-10 text-lg bg-gray-200 border border-collapse rounded-lg table-auto'>
        <thead>
          <tr className='text-white rounded-lg bg-gradient-to-r from-purple-400 to-pink-600'>
            <th className='p-2 border border-white '>Kanji</th>
            <th className='p-2 border border-white '>English</th>
            <th className='p-2 border border-white '>Onyomi</th>
            <th className='p-2 border border-white '>Kunyomi</th>
            <th className='p-2 border border-white '>Kanji/Vocab</th>
          </tr>
        </thead>
        {newVocab.map((vocab) => (
          <tbody key={vocab.id}>
            <th className='p-2 text-sm border border-white '></th>
            <th className='p-2 text-sm border border-white '></th>
            <th className='p-2 text-sm border border-white '></th>
            <th className='p-2 text-sm border border-white '></th>
            <th className='p-2 text-sm border border-white '></th>
          </tbody>
        ))}
      </table>
      {/* {newVocab.map((vocab) => (
        <div key={vocab.id}>
          {vocab.kanji}
          {vocab.English}
          <div className=''>{vocab.Onyomi}</div>
          <div className=''>{vocab.Kunyomi}</div>
          <div className=''>{vocab.kanjiVocab}</div>
        </div>
      ))} */}
    </div>
    // </div>
  );
}

export default Vocab;

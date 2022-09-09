import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const newVocab = [
  {
    kanji: '一',
    English: 'one',
    Onyomi: ['ichi', 'itsu'],
    Kunyomi: ['hito(tsu)', 'hito'],
    kanjiVocab: ['一人 (one person, alone)'],
  },
  {
    kanji: '二',
    English: 'Two',
    Onyomi: ['ni'],
    Kunyomi: ['futa(tsu)', 'futa'],
    kanjiVocab: ['二人 (two people, pair)'],
  },
  {
    kanji: '三',
    English: 'Three',
    Onyomi: ['san'],
    Kunyomi: ['mit(tsu)', 'mi'],
    kanjiVocab: ['	三日 (3rd day of the month)'],
  },
  {
    kanji: '四',
    English: 'Four',
    Onyomi: ['shi'],
    Kunyomi: ['yo(tsu)', 'yo', 'yon'],
    kanjiVocab: ['四日 (4th day of the month)'],
  },
  {
    kanji: '五',
    English: 'Five',
    Onyomi: ['go'],
    Kunyomi: ['itsu(tsu)', 'itsu'],
    kanjiVocab: ['五日 (5th day of the month)'],
  },
  {
    kanji: '六',
    English: 'Six',
    Onyomi: ['roku'],
    Kunyomi: ['	mut(tsu)', 'mu'],
    kanjiVocab: ['六日 (6th day of the month)'],
  },
  {
    kanji: '七',
    English: 'Seven',
    Onyomi: ['shichi'],
    Kunyomi: ['nana(tsu)', ' nana'],
    kanjiVocab: ['七日 (7th day of the month)'],
  },
  {
    kanji: '八',
    English: 'Eight',
    Onyomi: ['hachi'],
    Kunyomi: ['yat(tsu)', 'ya'],
    kanjiVocab: ['八日 (8th day of the month)'],
  },
  {
    kanji: '九',
    English: 'Nine',
    Onyomi: ['kyuu', 'ku'],
    Kunyomi: ['kokono(tsu)', 'kokono'],
    kanjiVocab: ['九日 (9th day of the month)'],
  },
  {
    kanji: '十',
    English: 'Ten',
    Onyomi: ['juu', 'ji'],
    Kunyomi: ['tou', 'to'],
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
    Onyomi: ['man', 'ban'],
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

import React from 'react';

function Vocab() {
  return <div>Vocab</div>;
}

export default Vocab;

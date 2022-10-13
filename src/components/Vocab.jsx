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
    English: ['Noon'],
    Onyomi: ['go'],
    Kunyomi: ['-'],
    kanjiVocab: ['午前 (morning, A.M.)'],
  },
  {
    kanji: '前',
    English: ['Before'],
    Onyomi: ['zen'],
    Kunyomi: ['mae'],
    kanjiVocab: ['名前 (name)'],
  },
  {
    kanji: '後',
    English: ['After, later, behind'],
    Onyomi: ['go, kou'],
    Kunyomi: ['ato'],
    kanjiVocab: ['	午後 (afternoon, P.M.)'],
  },
  {
    kanji: '今',
    English: ['Now'],
    Onyomi: ['	kon, kin'],
    Kunyomi: ['ima'],
    kanjiVocab: ['	今晩 (this evening), 今朝 (this morning)'],
  },
  {
    kanji: '先',
    English: ['	Before, ahead, future'],
    Onyomi: ['sen'],
    Kunyomi: ['saki'],
    kanjiVocab: ['先週 (last week), 先生 (teacher, master)'],
  },
  {
    kanji: '来',
    English: ['To come'],
    Onyomi: ['rai'],
    Kunyomi: ['ku(ru)'],
    kanjiVocab: ['来月 (next month), 来る (to come)'],
  },
  {
    kanji: '半',
    English: ['Half, middle'],
    Onyomi: ['han'],
    Kunyomi: ['naka(ba)'],
    kanjiVocab: [''],
  },
  {
    kanji: '毎',
    English: ['	Every, each'],
    Onyomi: ['mai'],
    Kunyomi: ['-'],
    kanjiVocab: ['毎日(every day)'],
  },
  {
    kanji: '何',
    English: ['	What, which, how many'],
    Onyomi: ['ka'],
    Kunyomi: ['nan, nani'],
    kanjiVocab: ['何曜日 (what day of the week)'],
  },
];

const newVocab2 = [
  {
    kanji: '人',
    English: ['Person'],
    Onyomi: ['jin, nin'],
    Kunyomi: ['hito'],
    kanjiVocab: ['	人々 (people)'],
  },
  {
    kanji: '男',
    English: ['Man, boy, male'],
    Onyomi: ['dan, nan'],
    Kunyomi: ['otoko'],
    kanjiVocab: ['男の子 (boy)'],
  },
  {
    kanji: '女',
    English: ['Woman, girl, female'],
    Onyomi: ['jo, nyo'],
    Kunyomi: ['onna, me'],
    kanjiVocab: ['	女の子 (girl)'],
  },
  {
    kanji: '子',
    English: ['Child'],
    Onyomi: ['shi, su'],
    Kunyomi: ['ko'],
    kanjiVocab: ['子供 (child)'],
  },
  {
    kanji: '母',
    English: ['Mother'],
    Onyomi: ['bo'],
    Kunyomi: ['haha'],
    kanjiVocab: ['母 (mother)'],
  },
  {
    kanji: '父',
    English: ['Father'],
    Onyomi: ['fu'],
    Kunyomi: ['chichi'],
    kanjiVocab: ['父 (father)'],
  },
  {
    kanji: '友',
    English: ['Friend'],
    Onyomi: ['yuu'],
    Kunyomi: ['tomo'],
    kanjiVocab: ['友達 (friend)'],
  },
  {
    kanji: '火',
    English: ['Fire'],
    Onyomi: ['ka'],
    Kunyomi: ['hi'],
    kanjiVocab: ['	火曜日 (Tuesday)'],
  },
  {
    kanji: '水',
    English: ['Water'],
    Onyomi: ['sui'],
    Kunyomi: ['	mizu'],
    kanjiVocab: ['	水曜日 (Wednesday)'],
  },
  {
    kanji: '木',
    English: ['Tree, wood'],
    Onyomi: ['moku, boku'],
    Kunyomi: ['ki, ko'],
    kanjiVocab: ['木曜日 (Thursday)'],
  },
  {
    kanji: '土',
    English: ['Earth, ground'],
    Onyomi: ['do, to'],
    Kunyomi: ['tsuchi'],
    kanjiVocab: ['	土曜日 (Saturday)'],
  },
  {
    kanji: '金',
    English: ['Money, gold'],
    Onyomi: ['kin, kon'],
    Kunyomi: ['	kane'],
    kanjiVocab: ['金曜日 (Friday)'],
  },
  {
    kanji: '本',
    English: ['Book, source'],
    Onyomi: ['	hon'],
    Kunyomi: ['moto'],
    kanjiVocab: ['日本語 (Japanese)'],
  },
  {
    kanji: '川',
    English: ['River'],
    Onyomi: ['sen'],
    Kunyomi: ['kawa'],
    kanjiVocab: ['川 (river)'],
  },
  {
    kanji: '花',
    English: ['Flower'],
    Onyomi: ['ka'],
    Kunyomi: ['hana'],
    kanjiVocab: ['	花火 (fireworks)'],
  },
  {
    kanji: '気',
    English: ['	Spirit'],
    Onyomi: ['ki, ke'],
    Kunyomi: ['-'],
    kanjiVocab: ['	元気 (healthy, spirit, fine)'],
  },
  {
    kanji: '生',
    English: ['Life, to live, to be born, to grow'],
    Onyomi: ['sei, shou'],
    Kunyomi: ['i(kiru), u(mareru), ha(yasu)'],
    kanjiVocab: ['生徒 (pupil)'],
  },
  {
    kanji: '魚',
    English: ['Fish'],
    Onyomi: ['	gyo'],
    Kunyomi: ['	sakana'],
    kanjiVocab: ['魚 (fish)'],
  },
  {
    kanji: '天',
    English: ['	Heaven'],
    Onyomi: ['ten'],
    Kunyomi: ['ame, ama'],
    kanjiVocab: ['	天気 (weather)'],
  },
  {
    kanji: '空',
    English: ['Sky, empty'],
    Onyomi: ['kuu'],
    Kunyomi: ['sora, a(keru)'],
    kanjiVocab: ['	空 (sky)'],
  },
  {
    kanji: '山',
    English: ['Mountain'],
    Onyomi: ['san'],
    Kunyomi: ['	yama'],
    kanjiVocab: ['山 (mountain)'],
  },
  {
    kanji: '雨',
    English: ['	Rain'],
    Onyomi: ['u'],
    Kunyomi: ['ame'],
    kanjiVocab: ['	雨 (rain)'],
  },
  {
    kanji: '電',
    English: ['Electricity	'],
    Onyomi: ['den'],
    Kunyomi: ['-'],
    kanjiVocab: ['	電気 (electricity)'],
  },
  {
    kanji: '車',
    English: ['	Car, vehicle	'],
    Onyomi: ['sha'],
    Kunyomi: ['	kuruma'],
    kanjiVocab: ['	電車 (electric train)'],
  },
  {
    kanji: '語',
    English: ['	Language, word, to chat	'],
    Onyomi: ['go'],
    Kunyomi: ['	kata(ru)'],
    kanjiVocab: ['英語 (English)'],
  },
  {
    kanji: '耳',
    English: ['Ear'],
    Onyomi: ['ji'],
    Kunyomi: ['mimi'],
    kanjiVocab: ['耳 (ear)'],
  },
  {
    kanji: '手',
    English: ['Hand'],
    Onyomi: ['shu'],
    Kunyomi: ['te'],
    kanjiVocab: ['手紙 (letter)'],
  },
  {
    kanji: '足',
    English: ['Foot, to add'],
    Onyomi: ['soku'],
    Kunyomi: ['ashi, ta(su)'],
    kanjiVocab: ['足 (foot)'],
  },
  {
    kanji: '目',
    English: ['Eye'],
    Onyomi: ['moku'],
    Kunyomi: ['me'],
    kanjiVocab: ['目 (eye)'],
  },
  {
    kanji: '口',
    English: ['Mouth'],
    Onyomi: ['kou, ku'],
    Kunyomi: ['kuchi'],
    kanjiVocab: ['出口 (exit)'],
  },
  {
    kanji: '名',
    English: ['Name'],
    Onyomi: ['mei, myou'],
    Kunyomi: ['na'],
    kanjiVocab: ['名前 (name)'],
  },
];

function Vocab() {
  const [vocab, setVocab] = useState(newVocab);
  return (
    <div className='bg-slate-50'>
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
      <div className='grid grid-cols-1'>
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
              <th className='p-2 text-sm border border-white '>
                {vocab.kanji}
              </th>
              <th className='p-2 text-sm border border-white '>
                {vocab.English}
              </th>
              <th className='p-2 text-sm border border-white '>
                {vocab.Onyomi}
              </th>
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
              <th className='p-2 text-sm border border-white '>
                {vocab.kanji}
              </th>
              <th className='p-2 text-sm border border-white '>
                {' '}
                {vocab.English}
              </th>
              <th className='p-2 text-sm border border-white '>
                {vocab.Onyomi}
              </th>
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
          {newVocab2.map((vocab) => (
            <tbody key={vocab.id}>
              <th className='p-2 text-sm border border-white '>
                {vocab.kanji}
              </th>
              <th className='p-2 text-sm border border-white '>
                {vocab.English}
              </th>
              <th className='p-2 text-sm border border-white '>
                {vocab.Onyomi}
              </th>
              <th className='p-2 text-sm border border-white '>
                {vocab.Kunyomi}
              </th>
              <th className='p-2 text-sm border border-white '>
                {vocab.kanjiVocab}
              </th>
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
    </div>
  );
}

export default Vocab;

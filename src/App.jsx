import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Home from './components/Home';
import Hiragana from './components/Hiragana';
import Katakana from './components/Katakana';
import Vocab from './components/Vocab';
import MemoryGame from './components/MemoryGame';

function App() {
  return (
    <div className='text-4xl text'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Quiz' element={<Quiz />} />
        <Route path='/Hiragana' element={<Hiragana />} />
        <Route path='/Katakana' element={<Katakana />} />
        <Route path='/Vocab' element={<Vocab />} />
        <Route path='/MemoryGame' element={<MemoryGame />} />
      </Routes>
    </div>
  );
}

export default App;

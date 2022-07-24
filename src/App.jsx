import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Home from './components/Home';
import Hiragana from './components/Hiragana';
import Katakana from './components/Katakana';

function App() {
  return (
    <div className='text-4xl text'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Quiz' element={<Quiz />} />
        <Route path='/Hiragana' element={<Hiragana />} />
        <Route path='/Katakana' element={<Katakana />} />
      </Routes>
    </div>
  );
}

export default App;

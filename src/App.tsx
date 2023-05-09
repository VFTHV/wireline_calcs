import { Routes, Route } from 'react-router-dom';
import NavPage from '../pages/NavPage';
import WeakPoint from '../pages/WeakPoint';
import WeightBar from '../pages/WeightBar';
import Stretch from '../pages/Stretch';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavPage />} />
        <Route path="/weakpoint" element={<WeakPoint />} />
        <Route path="/weightbar" element={<WeightBar />} />
        <Route path="/stretch" element={<Stretch />} />
      </Routes>
    </div>
  );
}

export default App;

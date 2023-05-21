import { Routes, Route } from 'react-router-dom';
import NavPage from './pages/NavPage';
import WeakPoint from './pages/WeakPoint';
import WeightBar from './pages/WeightBar';
import Stretch from './pages/Stretch';
import UnitsPage from './pages/UnitsPage';
import ReportProblemForm from './pages/ReportProblemForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavPage />} />
        <Route path="/units" element={<UnitsPage />} />
        <Route path="/weakpoint" element={<WeakPoint />} />
        <Route path="/weightbar" element={<WeightBar />} />
        <Route path="/stretch" element={<Stretch />} />
        <Route path="/feedback" element={<ReportProblemForm />} />
      </Routes>
    </>
  );
}

export default App;

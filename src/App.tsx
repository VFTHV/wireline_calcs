import { Routes, Route } from 'react-router-dom';
import NavPage from './pages/NavPage';
import WeakPoint from './pages/WeakPoint';
import WeightBar from './pages/WeightBar';
import Stretch from './pages/Stretch';
import UnitsPage from './pages/UnitsPage';
import ReportProblemForm from './pages/ReportProblemForm';
import PageNotFound from './pages/PageNotFound';
import Disclaimer from './pages/Disclaimer';
import TensionAtDepth from './pages/TensionAtDepth';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavPage />} />
        <Route path="/units" element={<UnitsPage />} />
        <Route path="/weakpoint" element={<WeakPoint />} />
        <Route path="/weightbar" element={<WeightBar />} />
        <Route path="/stretch" element={<Stretch />} />
        <Route path="/tension-at-depth" element={<TensionAtDepth />} />
        <Route path="/feedback" element={<ReportProblemForm />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

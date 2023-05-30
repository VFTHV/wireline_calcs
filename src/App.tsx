import { Routes, Route } from 'react-router-dom';
import {
  NavPage,
  UnitsPage,
  WeakPoint,
  WeightBar,
  Stretch,
  MaxPull,
  Disclaimer,
  PageNotFound,
  ReportProblemForm,
} from './components/AllComponents';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavPage />} />
        <Route path="/units" element={<UnitsPage />} />
        <Route path="/weakpoint" element={<WeakPoint />} />
        <Route path="/weightbar" element={<WeightBar />} />
        <Route path="/stretch" element={<Stretch />} />
        <Route path="/tension-at-depth" element={<MaxPull />} />
        <Route path="/feedback" element={<ReportProblemForm />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

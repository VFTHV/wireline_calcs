import { useLocalStorageSet } from './logics/useLocalStorageSet';
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
  CasingDetails,
  TempCorrLength,
  CBL,
} from './components';

function App() {
  useLocalStorageSet();

  return (
    <>
      <Routes>
        <Route path="/" element={<NavPage />} />
        <Route path="/units" element={<UnitsPage />} />
        <Route path="/weakpoint" element={<WeakPoint />} />
        <Route path="/weightbar" element={<WeightBar />} />
        <Route path="/stretch" element={<Stretch />} />
        <Route path="/tension-at-depth" element={<MaxPull />} />
        <Route path="/csg-specs" element={<CasingDetails />} />
        <Route path="/temp-corr-length" element={<TempCorrLength />} />
        <Route path="/cbl" element={<CBL />} />
        <Route path="/feedback" element={<ReportProblemForm />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

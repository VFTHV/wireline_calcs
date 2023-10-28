import { useLocalStorageSet } from './logics/useLocalStorageSet';
import { Routes, Route } from 'react-router-dom';
import { pathNames } from './database/routes';
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
  KeySeat,
} from './components';
import FluidVelocity from './pages/FluidVelocity';
import { Carousel } from './components/Carousel';

const textArr = ['text 1', 'text 2'];

function App() {
  useLocalStorageSet();

  return (
    <>
      <Carousel textArr={textArr} />
      <Routes>
        <Route path="/" element={<NavPage />} />
        <Route path={pathNames.units} element={<UnitsPage />} />
        <Route path={pathNames.weakpoint} element={<WeakPoint />} />
        <Route path={pathNames.weightbar} element={<WeightBar />} />
        <Route path={pathNames.stretch} element={<Stretch />} />
        <Route path={pathNames.keyseat} element={<KeySeat />} />
        <Route path={pathNames.tensionAtDepth} element={<MaxPull />} />
        <Route path={pathNames.csgSpecs} element={<CasingDetails />} />
        <Route path={pathNames.tempCorrLength} element={<TempCorrLength />} />
        <Route path={pathNames.cbl} element={<CBL />} />
        <Route path={pathNames.feedback} element={<ReportProblemForm />} />
        <Route path={pathNames.disclaimer} element={<Disclaimer />} />
        <Route path={pathNames.disclaimer} element={<Disclaimer />} />
        <Route path={pathNames.fluidVelocity} element={<FluidVelocity />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

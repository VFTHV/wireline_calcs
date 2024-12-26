import { useLocalStorage } from './logics/useLocalStorageSet';
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
import { useState } from 'react';

const compDict = {
  units: <UnitsPage />,
  weakPoint: <WeakPoint />,
  weightBar: <WeightBar />,
  stretch: <Stretch />,
  keyseat: <KeySeat />,
  maxPull: <MaxPull />,
  casginDetails: <CasingDetails />,
  tempCorrLength: <TempCorrLength />,
  cbl: <CBL />,
  feedback: <ReportProblemForm />,
  disclaimer: <Disclaimer />,
  fluidVelocity: <FluidVelocity />,
};

export type CompDictKeysType = keyof typeof compDict;

function App() {
  const { getAllUnits } = useLocalStorage();
  getAllUnits();
  const [dictKey, setDictKey] = useState<CompDictKeysType | null>(null);

  return (
    <>{dictKey ? compDict[dictKey] : <NavPage setDictKey={setDictKey} />}</>
  );

  return (
    <>
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
        <Route path={pathNames.fluidVelocity} element={<FluidVelocity />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

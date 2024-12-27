import { useLocalStorage } from './logics/useLocalStorageSet';
import {
  NavPage,
  CasingDetails,
  CBL,
  Disclaimer,
  KeySeat,
  MaxPull,
  ReportProblemForm,
  Stretch,
  TempCorrLength,
  UnitsPage,
  WeakPoint,
  WeightBar,
} from './components';
import { useSelector } from 'react-redux';
import { StoreState } from './store';
import FluidVelocity from './pages/FluidVelocity';

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
  const { compDictKey } = useSelector((state: StoreState) => state.cbl);
  const { getAllUnits } = useLocalStorage();

  getAllUnits();

  return <>{compDictKey ? compDict[compDictKey] : <NavPage />}</>;
}

export default App;

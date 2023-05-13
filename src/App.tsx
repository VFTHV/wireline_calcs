import { Routes, Route } from 'react-router-dom';
import NavPage from '../pages/NavPage';
import WeakPoint from '../pages/WeakPoint';
import WeightBar from '../pages/WeightBar';
import Stretch from '../pages/Stretch';
import RadioDualInput from './components/RadioDualInput';
import { UnitSystem } from '../store/slices/types';
import { StoreState, changeUnits } from '../store';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const units = useSelector((state: StoreState) => state.weakPoint.UnitSystem);

  return (
    <>
      <RadioDualInput
        values={[UnitSystem.ENGLISH, UnitSystem.METRIC]}
        onChange={(e) => dispatch(changeUnits(e.target.value))}
        currentValue={units}
      />
      <Routes>
        <Route path="/" element={<NavPage />} />
        <Route path="/weakpoint" element={<WeakPoint />} />
        <Route path="/weightbar" element={<WeightBar />} />
        <Route path="/stretch" element={<Stretch />} />
      </Routes>
    </>
  );
}

export default App;

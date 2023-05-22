import { useState } from 'react';
import CableSelector from '../components/CableSelector';
import NavHeader from '../components/NavHeader';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import InputData from '../components/InputData';

const Stretch = () => {
  const [tension, setTension] = useState<number>(0);

  const { currentCable, depth, unitSystem } = useSelector(
    (store: StoreState) => {
      const currentCable = store.weakPoint.currentCable;
      const depth = store.weakPoint.depth;
      const unitSystem = store.unitSystem;
      return { currentCable, depth, unitSystem };
    }
  );

  return (
    <>
      <NavHeader>Stretch</NavHeader>
      <CableSelector />
      <InputData
        typeId={'maxTension'}
        unit={unitSystem.weightUnits}
        value={tension}
        onChange={(e) => setTension(+e.target.value)}
      >
        Current Tension:
      </InputData>
    </>
  );
};

export default Stretch;

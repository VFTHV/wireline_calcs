import { useState } from 'react';
import { InputData, NavHeader } from '../components';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

export const TempCorrLength = () => {
  const [temp, setTemp] = useState(68);
  const { tempUnits } = useSelector((state: StoreState) => state.unitSystem);

  return (
    <>
      <NavHeader>Temp. Corrected Length</NavHeader>
      <InputData
        value={temp}
        onChange={(e) => setTemp(+e.target.value)}
        typeId="temperature"
        unit={tempUnits}
      >
        Ambient Temperature
      </InputData>
    </>
  );
};

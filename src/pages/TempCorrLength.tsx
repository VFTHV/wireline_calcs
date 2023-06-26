import { useState } from 'react';
import {
  CableSelector,
  CurrentCableSpecs,
  InputData,
  NavHeader,
} from '../components';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

export const TempCorrLength = () => {
  const [temp, setTemp] = useState(68);
  const [resistance, setResistance] = useState(0);
  const { tempUnits, resistanceUnits } = useSelector(
    (state: StoreState) => state.unitSystem
  );

  const getDeltaR = (
    length: number,
    R: number,
    Rnom: number,
    Tcurr: number
  ): number => {
    const deltaR = ((1000 * R) / length - Rnom) / (Tcurr - 68);
    return deltaR;
  };

  const getLength = (
    Rnom: number,
    deltaR: number,
    R: number,
    Tcurr: number
  ): number => {
    const length = (R / (Rnom + deltaR * (Tcurr - 68))) * 1000;
    return length;
  };

  console.log(getLength(4.1, 0.008951961773260741, 250, 85));

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
      <InputData
        value={resistance}
        onChange={(e) => setResistance(+e.target.value)}
        typeId="resistance"
        unit={resistanceUnits}
      >
        Measured Cable Resistance
      </InputData>
      <CableSelector />
      <CurrentCableSpecs specs={['conductorResistance']} />
    </>
  );
};

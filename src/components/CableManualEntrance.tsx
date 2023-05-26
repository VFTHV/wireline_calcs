import { FC, ReactNode, Fragment } from 'react';
import {
  changeOuterBS,
  changeWeightInAir,
  changeMaxTension,
  StoreState,
  changeStretchCoef,
} from '../store';
import { useDispatch, useSelector } from 'react-redux';
import InputData from './InputData';
import { CableSpecsKey } from '../database/cables';

interface CableManualEntranceProps {
  specs: CableSpecsKey[];
}

const CableManualEntrance: FC<CableManualEntranceProps> = ({ specs }) => {
  const dispatch = useDispatch();
  const { outerArmorBS, weightInAir, maxTension, stretchCoeff } = useSelector(
    (state: StoreState) => state.weakPoint.currentCable
  );
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);

  const content: { [key in CableSpecsKey]: ReactNode } = {
    type: <>TBD for developer</>,
    diameter: <>TBD for developer</>,
    stretchCoeff: (
      <InputData
        onChange={(e) => dispatch(changeStretchCoef(+e.target.value))}
        typeId={'stretchCoef'}
        value={stretchCoeff}
        unit={unitSystem.depthUnits}
      >
        CABLE STRETCH / (1Kft*1Klbs)
      </InputData>
    ),
    breakingStrength: <>TBD for developer</>,
    maxTension: (
      <InputData
        onChange={(e) => dispatch(changeMaxTension(+e.target.value))}
        typeId={'maxTension'}
        value={maxTension}
        unit={unitSystem.weightUnits}
      >
        MAX. RECOMMENDED TENSION
      </InputData>
    ),
    conductorResistance: <>TBD for developer</>,
    inners: <>TBD for developer</>,
    outers: <>TBD for developer</>,
    innerArmorBS: <>TBD for developer</>,
    outerArmorBS: (
      <InputData
        onChange={(e) => dispatch(changeOuterBS(+e.target.value))}
        typeId={'outerBS'}
        value={outerArmorBS}
        unit={unitSystem.weightUnits}
      >
        OUTER BREAKING STRENGTH
      </InputData>
    ),
    weightInAir: (
      <InputData
        onChange={(e) => dispatch(changeWeightInAir(+e.target.value))}
        typeId={'weightInAir'}
        value={weightInAir}
        unit={unitSystem.weightUnits}
      >
        WEIGHT IN AIR
      </InputData>
    ),
  };

  return (
    <>
      {specs.map((spec) => {
        return <Fragment key={spec}>{content[spec]}</Fragment>;
      })}
    </>
  );
};

export default CableManualEntrance;

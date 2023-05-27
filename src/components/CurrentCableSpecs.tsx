import { FC, ReactNode, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { TableRow } from '../components/AllComponents';
import { CableSpecsKey } from '../database/cables';

interface CurrentCableSpecsProps {
  specs: CableSpecsKey[];
}

const CurrentCableSpecs: FC<CurrentCableSpecsProps> = ({ specs }) => {
  const { weightUnits, depthUnits, diameterUnits, currentCable } = useSelector(
    (state: StoreState) => {
      return {
        weightUnits: state.unitSystem.weightUnits,
        depthUnits: state.unitSystem.depthUnits,
        diameterUnits: state.unitSystem.diameterUnits,
        currentCable: state.weakPoint.currentCable,
      };
    }
  );

  const content: { [key in CableSpecsKey]: ReactNode } = {
    type: (
      <TableRow data={currentCable.breakingStrength} units={''}>
        CABLE TYPE
      </TableRow>
    ),
    diameter: (
      <TableRow data={currentCable.diameter} units={diameterUnits}>
        CABLE OD
      </TableRow>
    ),
    stretchCoeff: (
      <TableRow data={currentCable.stretchCoeff} units={depthUnits}>
        CABLE STRETCH / (1Kft*1Klbs)
      </TableRow>
    ),
    breakingStrength: (
      <TableRow data={currentCable.breakingStrength} units={weightUnits}>
        CABLE BREAKING STRENGTH
      </TableRow>
    ),
    maxTension: (
      <TableRow data={currentCable.maxTension} units={weightUnits}>
        MAX. RECOMMENDED TENSION
      </TableRow>
    ),
    conductorResistance: <>TBD for developer</>,
    inners: (
      <TableRow data={currentCable.inners} units={''}>
        NUMBER OF INNER ARMORS
      </TableRow>
    ),
    outers: (
      <TableRow data={currentCable.outers} units={''}>
        NUMBER OF OUTER ARMORS
      </TableRow>
    ),
    innerArmorBS: (
      <TableRow data={currentCable.innerArmorBS} units={weightUnits}>
        INNTER ARMOR BREAKING STRENGTH
      </TableRow>
    ),
    outerArmorBS: (
      <TableRow data={currentCable.outerArmorBS} units={weightUnits}>
        OUTER ARMOR BREAKING STRENGTH
      </TableRow>
    ),
    weightInAir: (
      <TableRow data={currentCable.weightInAir} units={weightUnits}>
        AVG. CABLE WEIGHT IN AIR
      </TableRow>
    ),
  };

  return (
    <>
      <table className="table">
        <tbody>
          {specs.map((spec) => {
            return <Fragment key={spec}>{content[spec]}</Fragment>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default CurrentCableSpecs;

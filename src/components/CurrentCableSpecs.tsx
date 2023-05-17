import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { Weight } from '../store/slices/types';
import TableRow from './TableRow';

const CurrentCableSpecs = () => {
  const { unitSystem, currentCable } = useSelector((state: StoreState) => {
    return {
      unitSystem: state.unitSystem,
      currentCable: state.weakPoint.currentCable,
    };
  });

  const onWeightConvert = (input: number | undefined) => {
    if (!input) return 0;
    let weight = input;
    if (unitSystem.weightUnits === Weight.KG) weight *= 0.45;
    return Math.round(weight);
  };
  return (
    <>
      <table className="table">
        <tbody>
          <TableRow
            data={onWeightConvert(currentCable?.breakingStrength)}
            units={unitSystem.weightUnits}
          >
            CABLE BREAKING STRENGTH
          </TableRow>
          <TableRow
            data={onWeightConvert(currentCable?.outerArmorBS)}
            units={unitSystem.weightUnits}
          >
            OUTER ARMOR BREAKING STRENGTH
          </TableRow>
          <TableRow
            data={onWeightConvert(currentCable?.weightInAir)}
            units={unitSystem.weightUnits}
          >
            AVG. CABLE WEIGHT IN AIR
          </TableRow>
          <TableRow
            data={onWeightConvert(currentCable?.maxTension)}
            units={unitSystem.weightUnits}
          >
            MAX. RECOMMENDED TENSION
          </TableRow>
        </tbody>
      </table>
    </>
  );
};

export default CurrentCableSpecs;

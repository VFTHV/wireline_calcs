import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import TableRow from './TableRow';

const CurrentCableSpecs = () => {
  const { weightUnits, currentCable } = useSelector((state: StoreState) => {
    return {
      weightUnits: state.unitSystem.weightUnits,
      currentCable: state.weakPoint.currentCable,
    };
  });
  return (
    <>
      <table className="table">
        <tbody>
          <TableRow data={currentCable.breakingStrength} units={weightUnits}>
            CABLE BREAKING STRENGTH
          </TableRow>
          <TableRow data={currentCable.outerArmorBS} units={weightUnits}>
            OUTER ARMOR BREAKING STRENGTH
          </TableRow>
          <TableRow data={currentCable.weightInAir} units={weightUnits}>
            AVG. CABLE WEIGHT IN AIR
          </TableRow>
          <TableRow data={currentCable.maxTension} units={weightUnits}>
            MAX. RECOMMENDED TENSION
          </TableRow>
        </tbody>
      </table>
    </>
  );
};

export default CurrentCableSpecs;

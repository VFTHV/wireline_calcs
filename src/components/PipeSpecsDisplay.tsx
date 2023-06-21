import { FC } from 'react';
import { TableRow } from '.';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

interface PipeSpecsDisplayProps {
  typeId: 'casing' | 'tubing';
}

export const PipeSpecsDisplay: FC<PipeSpecsDisplayProps> = ({ typeId }) => {
  const unitSystem = useSelector((state: StoreState) => state.unitSystem);
  const { casing, tubing } = useSelector((state: StoreState) => state.cbl);

  const selectedPipe = typeId === 'casing' ? casing : tubing;

  if (!selectedPipe) return <></>;

  const odNum = selectedPipe.od
    .split(' ')
    .reduce((acc, curr) => acc + eval(curr), 0);
  const wallThickness =
    selectedPipe && +((odNum - selectedPipe?.id) / 2).toFixed(3);

  const renderSpecs = () => {
    return (
      <table className="table">
        <tbody>
          <TableRow data={selectedPipe?.id} units={unitSystem.diameterUnits}>
            Casing ID
          </TableRow>
          <TableRow data={selectedPipe?.drift} units={unitSystem.diameterUnits}>
            Casing Drift
          </TableRow>
          <TableRow
            data={selectedPipe?.capacity}
            units={unitSystem.capacityUnits}
          >
            Casing Capacity
          </TableRow>
          <TableRow data={wallThickness} units={unitSystem.diameterUnits}>
            Casing Thickness
          </TableRow>
        </tbody>
      </table>
    );
  };

  return <>{renderSpecs()}</>;
};

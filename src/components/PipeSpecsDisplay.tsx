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

  const pipeWord =
    typeId.charAt(0).toUpperCase() + typeId.slice(1).toLowerCase();

  if (!selectedPipe) return <></>;

  const wallThickness =
    selectedPipe && +((selectedPipe.od - selectedPipe?.id) / 2).toFixed(3);

  const renderSpecs = () => {
    return (
      <table className="table">
        <tbody>
          <TableRow data={selectedPipe?.id} units={unitSystem.diameterUnits}>
            {`${pipeWord} ID`}
          </TableRow>
          <TableRow data={selectedPipe?.drift} units={unitSystem.diameterUnits}>
            Casing Drift
          </TableRow>
          <TableRow
            data={selectedPipe?.capacity}
            units={unitSystem.capacityUnits}
          >
            {`${pipeWord} Capacity`}
          </TableRow>
          <TableRow data={wallThickness} units={unitSystem.diameterUnits}>
            {`${pipeWord} Thickness`}
          </TableRow>
        </tbody>
      </table>
    );
  };

  return <>{renderSpecs()}</>;
};

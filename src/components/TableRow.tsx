import { FC } from 'react';
import { useConvertUnits } from '../logics/useConvertUnits';
import { UnitType } from '../store/slices/types';

interface TableRowProps {
  children: string;
  data: number | undefined;
  units: UnitType;
}

const TableRow: FC<TableRowProps> = ({ children, data, units }) => {
  const { convertToMetric } = useConvertUnits();

  const displayData = () => {
    if (!data) return '';
    const convData = convertToMetric(data, units);
    return `${convData} ${units}`;
  };

  return (
    <tr className="t-row">
      <th className="t-head">{children}</th>
      <td className="t-data">{displayData()}</td>
    </tr>
  );
};

export default TableRow;

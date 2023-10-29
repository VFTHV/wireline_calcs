import { FC } from 'react';
import { useConvertUnits } from '../logics/useConvertUnits';
import { UnitType } from '../store/slices/types';

interface TableRowProps {
  children: string;
  data: number | string | undefined;
  units: UnitType;
}

export const TableRow: FC<TableRowProps> = ({ children, data, units }) => {
  const { convertToMetric } = useConvertUnits();

  const displayData = () => {
    if (!data) return '';
    if (typeof data === 'number') {
      let convData = convertToMetric(data, units);
      return convData;
    }
    return data;
  };

  return (
    <tr className="t-row" aria-label={`table group displaying in ${units}`}>
      <th className="t-head">{`${children}, ${units}`}</th>
      <td className="t-data">{displayData()}</td>
    </tr>
  );
};

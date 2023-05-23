import { FC } from 'react';
import { useConvertUnits } from '../logics/useConvertUnits';
import { UnitType } from '../store/slices/types';

interface TableRowProps {
  children: string;
  data: number | string | undefined;
  units: UnitType;
}

const TableRow: FC<TableRowProps> = ({ children, data, units }) => {
  const { convertToMetric } = useConvertUnits();

  const displayData = () => {
    if (!data) return '';
    if (typeof data === 'number') {
      let convData = convertToMetric(data, units);

      if (convData < 10) {
        convData = +convData.toFixed(2);
      } else {
        convData = Math.round(convData);
      }
      return `${convData} ${units}`;
    }
    return data;
  };

  return (
    <tr className="t-row">
      <th className="t-head">{children}</th>
      <td className="t-data">{displayData()}</td>
    </tr>
  );
};

export default TableRow;

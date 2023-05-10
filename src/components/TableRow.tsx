import { FC } from 'react';

interface TableRowProps {
  children: string;
  data: string | number | undefined;
  units: string;
}

const TableRow: FC<TableRowProps> = ({ children, data, units }) => {
  return (
    <tr className="t-row">
      <th className="t-head">{children}</th>
      <td className="t-data">{data ? `${data} ${units}` : ''}</td>
    </tr>
  );
};

export default TableRow;

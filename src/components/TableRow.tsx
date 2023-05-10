import { FC } from 'react';

interface TableRowProps {
  children: string;
  data: string | number | undefined;
}

const TableRow: FC<TableRowProps> = ({ children, data }) => {
  return (
    <tr className="t-row">
      <th className="t-head">{children}</th>
      <td className="t-data">{data ? `${data} lbs` : ''}</td>
    </tr>
  );
};

export default TableRow;

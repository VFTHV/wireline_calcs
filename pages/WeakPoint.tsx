import { useState } from 'react';
import { cablesData } from '../database/cables';
import NavHeader from '../src/components/NavHeader';
import TableRow from '../src/components/TableRow';
const WeakPoint = () => {
  const [cableType, setCableType] = useState<string>('');
  const [depth, setDepth] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const selectedCable = cablesData.find((cable) => cable.type === cableType);

  return (
    <>
      <NavHeader>Weakpoint</NavHeader>
      <div className="input-group">
        <label htmlFor="cable">Cable Type:</label>
        <select
          className="select-item"
          id="cable"
          name="cable"
          value={cableType}
          onChange={(e) => setCableType(e.target.value)}
        >
          <option value={''}>select</option>
          {cablesData.map((cable) => {
            return (
              <option key={cable.type} value={cable.type}>
                {cable.type}
              </option>
            );
          })}
        </select>
      </div>
      <table>
        <tbody className="table">
          <TableRow data={selectedCable?.breakingStrength}>
            CABLE BREAKING STRENGTH
          </TableRow>
          <TableRow data={selectedCable?.outerArmorBS}>
            OUTER ARMOR BREAKING STRENGTH
          </TableRow>
          <TableRow data={selectedCable?.weightInAir}>
            AVG. CABLE WEIGHT IN AIR
          </TableRow>
          <TableRow data={selectedCable?.maxTension}>
            MAX. RECOMMENDED TENSION
          </TableRow>
        </tbody>
      </table>
      <div className="input-group">
        <label htmlFor="depth">Depth:</label>
        <div>
          <input
            className="form-item"
            id="depth"
            name="depth"
            value={depth}
            type="number"
            onChange={(e) => setDepth(+e.target.value)}
          />{' '}
          <span>ft</span>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="depth">Toolstring Weight:</label>
        <div>
          <input
            className="form-item"
            id="depth"
            name="depth"
            value={weight}
            type="number"
            onChange={(e) => setWeight(+e.target.value)}
          />{' '}
          <span>ft</span>
        </div>
      </div>
    </>
  );
};

export default WeakPoint;

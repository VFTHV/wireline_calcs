import { useState } from 'react';
import { cablesData } from '../database/cables';
import NavHeader from '../src/components/NavHeader';
const WeakPoint = () => {
  const [cableType, setCableType] = useState<string>('');
  const [depth, setDepth] = useState<string>('');

  const selectedCable = cablesData.find((cable) => cable.type === cableType);

  return (
    <>
      <NavHeader>Weakpoint</NavHeader>
      <div className="input-group">
        <label htmlFor="cable">Cable Type:</label>

        <select
          className="form-item"
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
        <tbody>
          <tr>
            <th>Cable Breaking Strength</th>
            <td>{selectedCable?.breakingStrength}</td>
          </tr>
          <tr>
            <th>Outer Armor Breaking Strength</th>
            <td>{selectedCable?.outerArmorBS}</td>
          </tr>
          <tr>
            <th>Avg. Cable Weight in Air</th>
            <td>{selectedCable?.weightInAir}</td>
          </tr>
          <tr>
            <th>Max Recommended Tension</th>
            <td>{selectedCable?.maxTension}</td>
          </tr>
        </tbody>
      </table>
      <div className="input-group">
        <label htmlFor="depth">Depth:</label>
        <input
          className="form-item"
          id="depth"
          name="depth"
          value={depth}
          type="number"
          onChange={(e) => setDepth(e.target.value)}
        />
      </div>
    </>
  );
};

export default WeakPoint;

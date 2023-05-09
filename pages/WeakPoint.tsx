import { useState } from 'react';
import { cablesData } from '../database/cables';

const WeakPoint = () => {
  const [cableType, setCableType] = useState<string>('');
  const [depth, setDepth] = useState<string>('');

  const selectedCable = cablesData.find((cable) => cable.type === cableType);

  return (
    <>
      <form>
        <label htmlFor="cable">Cable Type:</label>
        <br />
        <select
          id="cable"
          name="cable"
          value={cableType}
          onChange={(e) => setCableType(e.target.value)}
        >
          {cablesData.map((cable) => {
            return (
              <option key={cable.type} value={cable.type}>
                {cable.type}
              </option>
            );
          })}
        </select>
      </form>
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
      <label>
        Depth:
        <input
          id="depth"
          value={depth}
          type="number"
          onChange={(e) => setDepth(e.target.value)}
        />
      </label>
    </>
  );
};

export default WeakPoint;

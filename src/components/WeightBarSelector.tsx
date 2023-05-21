import { useState } from 'react';
import { weightBarsData } from '../database/weightBars';
import TableRow from './TableRow';

const WeightBarSelector = () => {
  const weightBarODs = [...new Set(weightBarsData.map((bar) => bar.od))];
  const [od, setOd] = useState(weightBarODs[0]);

  const filteredByOD = weightBarsData.filter((bar) => bar.od === od);
  const filteredByType = [...new Set(filteredByOD.map((bar) => bar.type))];

  return (
    <>
      <div className="input-group">
        <label htmlFor="weightBar">Weight Bar OD:</label>
        <select
          className="select-item"
          id="weightBar"
          name="weightBar"
          value={od}
          onChange={(e) => setOd(e.target.value)}
        >
          {weightBarODs.map((od) => {
            return (
              <option key={Math.random()} value={od}>
                {od}
              </option>
            );
          })}
        </select>
      </div>
      {filteredByType.map((type) => {
        const capType =
          type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
        return (
          <table className="table" key={Math.random()}>
            <tbody>
              <TableRow data={capType} units="">
                Material:
              </TableRow>
              {filteredByOD
                .filter((bar) => bar.type === type)
                .map((bar) => {
                  return (
                    <TableRow data={bar.weight} units="lbs" key={Math.random()}>
                      {`Length ${bar.length} ft`}
                    </TableRow>
                  );
                })}
            </tbody>
          </table>
        );
      })}
    </>
  );
};

export default WeightBarSelector;

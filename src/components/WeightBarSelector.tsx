import { useState, FC } from 'react';
import { weightBarsData } from '../database/weightBars';
import { TableRow } from '.';

export const WeightBarSelector: FC = () => {
  const weightBarODs = [...new Set(weightBarsData.map((bar) => bar.od))];
  const [od, setOd] = useState(weightBarODs[0]);

  const filteredByOD = weightBarsData.filter((bar) => bar.od === od);
  const filteredByType = [...new Set(filteredByOD.map((bar) => bar.type))];

  return (
    <>
      <div
        className="input-group"
        aria-label="input group to choose weight bar OD"
      >
        <label htmlFor="weightBar">Weight Bar OD:</label>
        <select
          className="input-item"
          id="weightBar"
          name="weightBar"
          value={od}
          onChange={(e) => setOd(e.target.value)}
        >
          {weightBarODs.map((od) => {
            return (
              <option
                key={od}
                value={od}
                aria-label={`weight bar with ${od} OD chosen`}
              >
                {od}
              </option>
            );
          })}
        </select>
      </div>
      {filteredByType.map((type, i) => {
        const capType =
          type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
        return (
          <table className="table" key={i}>
            <tbody>
              <TableRow data={capType} units="">
                Material:
              </TableRow>
              {filteredByOD
                .filter((bar) => bar.type === type)
                .map((bar) => {
                  return (
                    <TableRow
                      data={bar.weight}
                      units="lbs"
                      key={bar.weight}
                      aria-label={`${bar.weight} lbs ${bar.length} ft weight bar chosen`}
                    >
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

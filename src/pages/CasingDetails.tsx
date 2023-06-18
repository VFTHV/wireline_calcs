import { FC, useState, useEffect } from 'react';
import { casingData } from '../database/casings';
import { NavHeader } from '../components/NavHeader';
import { TableRow } from '../components/TableRow';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

export const CasingDetails: FC = () => {
  const casingODs = [...new Set(casingData.map((csg) => csg.diameter))];
  const [od, setOd] = useState<number>(casingODs[0]);

  const casingWeights = casingData
    .filter((csg) => csg.diameter === od)
    .map((csg) => csg.weight);

  const [weight, setWeight] = useState<number>(casingWeights[0]);

  useEffect(() => {
    setWeight(casingWeights[0]);
  }, [od]);

  const selectedCsg = casingData.find(
    (csg) => csg.diameter === od && csg.weight === weight
  );

  const { unitSystem } = useSelector((state: StoreState) => state);

  return (
    <>
      <NavHeader>Casing Specs</NavHeader>
      <div className="input-group">
        <label htmlFor="casing-od">Casing OD:</label>
        <select
          className="input-item"
          id="casing-od"
          name="casing-od"
          value={od}
          onChange={(e) => setOd(+e.target.value)}
        >
          {casingODs.map((od) => {
            return (
              <option key={Math.random()} value={od}>
                {od}
              </option>
            );
          })}
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="casing-od">Casing Weight:</label>
        <select
          className="input-item"
          id="casing-weight"
          name="casing-weight"
          value={weight}
          onChange={(e) => setWeight(+e.target.value)}
        >
          {casingWeights.map((weight) => {
            return (
              <option key={Math.random()} value={weight}>
                {weight}
              </option>
            );
          })}
        </select>
      </div>
      <table className="table">
        <tbody>
          <TableRow data={selectedCsg?.id} units={unitSystem.diameterUnits}>
            Casing ID
          </TableRow>
          <TableRow data={selectedCsg?.drift} units={unitSystem.diameterUnits}>
            Casing Drift
          </TableRow>
          <TableRow
            data={selectedCsg?.capacity}
            units={unitSystem.capacityUnits}
          >
            Casing Capacity
          </TableRow>
        </tbody>
      </table>
    </>
  );
};

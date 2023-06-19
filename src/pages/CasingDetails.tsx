import { FC, useState, useEffect } from 'react';
import { casingData } from '../database/casingsTubings';
import { NavHeader, TableRow } from '../components';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

export const CasingDetails: FC = () => {
  const casingODs = [...new Set(casingData.map((csg) => csg.od))];
  const [od, setOd] = useState<string>('');

  const casingWeights = casingData
    .filter((csg) => csg.od === od)
    .map((csg) => csg.weight);

  const [weight, setWeight] = useState<number>();

  useEffect(() => {
    setWeight(casingWeights[0]);
  }, [od]);

  const selectedCsg = casingData.find(
    (csg) => csg.od === od && csg.weight === weight
  );

  const { unitSystem } = useSelector((state: StoreState) => state);

  const odNum = od.split(' ').reduce((acc, curr) => acc + eval(curr), 0);
  const wallThickness =
    selectedCsg && +((odNum - selectedCsg?.id) / 2).toFixed(3);

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
          onChange={(e) => setOd(e.target.value)}
        >
          <option value={''}>Choose Casing OD</option>
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
      {selectedCsg && (
        <table className="table">
          <tbody>
            <TableRow data={selectedCsg?.id} units={unitSystem.diameterUnits}>
              Casing ID
            </TableRow>
            <TableRow
              data={selectedCsg?.drift}
              units={unitSystem.diameterUnits}
            >
              Casing Drift
            </TableRow>
            <TableRow
              data={selectedCsg?.capacity}
              units={unitSystem.capacityUnits}
            >
              Casing Capacity
            </TableRow>
            <TableRow data={wallThickness} units={unitSystem.diameterUnits}>
              Casing Thickness
            </TableRow>
          </tbody>
        </table>
      )}
    </>
  );
};

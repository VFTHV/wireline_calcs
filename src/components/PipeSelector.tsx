import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { changeCasing, changeTubing } from '../store';
import { PipeSpecs } from '../database/casingsTubings';

interface PipeSelectorProps {
  pipeData: PipeSpecs[];
  typeId: 'casing' | 'tubing';
}

export const PipeSelector: FC<PipeSelectorProps> = ({ pipeData, typeId }) => {
  const ODs = [...new Set(pipeData.map((pipe) => pipe.nom))];
  const [nom, setNom] = useState<string>('');

  const pipeWeights = pipeData
    .filter((pipe) => pipe.nom === nom)
    .map((pipe) => pipe.weight);

  const [weight, setWeight] = useState<number>(pipeWeights[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    const selectedPipe = pipeData.find(
      (csg) => csg.nom === nom && csg.weight === weight
    );
    dispatch(action(selectedPipe));
  }, [nom, weight]);

  const action: ActionCreatorWithPayload<PipeSpecs | undefined> =
    typeId === 'casing' ? changeCasing : changeTubing;

  const pipeWord = typeId.charAt(0).toUpperCase() + typeId.slice(1);

  return (
    <>
      <div
        className="input-group"
        aria-label={`${pipeWord} OD selection group`}
      >
        <label htmlFor={`${typeId}-od`}>{pipeWord} OD:</label>
        <select
          className="input-item"
          id={`${typeId}-od`}
          name={`${typeId}-od`}
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        >
          <option value={''}>Choose {pipeWord} OD</option>
          {ODs.map((od) => {
            return (
              <option
                key={od}
                value={od}
                aria-label={`${pipeWord} ${od} OD chosen`}
              >
                {od}
              </option>
            );
          })}
        </select>
      </div>
      <div
        className="input-group"
        aria-label={`${pipeWord} weight selection group`}
      >
        <label htmlFor="casing-od">{pipeWord} Weight:</label>
        <select
          className="input-item"
          id="casing-weight"
          name="casing-weight"
          value={weight}
          onChange={(e) => setWeight(+e.target.value)}
        >
          <option value={''}>Choose {pipeWord} Weight PPF</option>
          {pipeWeights.map((weight) => {
            return (
              <option
                key={weight}
                value={weight}
                aria-label={`${pipeWord} ${weight} OD chosen`}
              >
                {weight}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

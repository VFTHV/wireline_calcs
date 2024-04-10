import { FC } from 'react';
import { fluidsData } from '../database/cbl';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState, changeFluid } from '../store';

export const FluidSelector: FC = () => {
  const types = [...new Set(fluidsData.map((fluid) => fluid.type))];
  const { fluid } = useSelector((store: StoreState) => store.cbl);
  const dispatch = useDispatch();

  return (
    <div className="input-group">
      <label htmlFor="fluid" id="fluid-type" aria-label="choose fluid type">
        Fluid Type:
      </label>
      <select
        className="input-item"
        id="fluid"
        name="fluid"
        value={fluid.type}
        onChange={(e) => dispatch(changeFluid(e.target.value))}
      >
        {types.map((type, i) => {
          return (
            <option key={i} aria-labelledby="fluid-type">
              {type}
            </option>
          );
        })}
      </select>
    </div>
  );
};

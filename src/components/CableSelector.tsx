import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store';
import { cablesData } from '../../database/cables';
import { changeCableType } from '../../store';

const CableSelector = () => {
  const dispatch = useDispatch();
  const { currentCable } = useSelector((state: StoreState) => state.weakPoint);

  return (
    <div className="input-group">
      <label htmlFor="cable">Cable Type:</label>
      <select
        className="select-item"
        id="cable"
        name="cable"
        value={currentCable?.type}
        onChange={(e) => dispatch(changeCableType(e.target.value))}
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
  );
};

export default CableSelector;

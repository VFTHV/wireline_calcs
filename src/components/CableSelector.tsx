import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../store';
import { cablesData } from '../database/cables';
import { changeCable } from '../store';

const CableSelector = () => {
  const dispatch = useDispatch();
  const { currentCable } = useSelector((state: StoreState) => state.weakPoint);

  const handleCableChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCable = cablesData.find(
      (cable) => cable.type === e.target.value
    );
    if (selectedCable) {
      dispatch(changeCable(selectedCable));
    }
  };

  return (
    <div className="input-group">
      <label htmlFor="cable">Cable Type:</label>
      <select
        className="select-item"
        id="cable"
        name="cable"
        value={currentCable?.type}
        onChange={handleCableChange}
      >
        <option value={''}>select</option>
        {/* <option value={'Manual'}>Manual</option> */}
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

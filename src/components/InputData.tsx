import { FC, ChangeEvent } from 'react';
import { UnitSystem } from '../../store/slices/types';

interface InputDataProps {
  children: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  nameId: string;
  value: number;
  unit: string;
}

const InputData: FC<InputDataProps> = ({
  children,
  onChange,
  nameId,
  value,
  unit,
}) => {
  let units = unit;
  if (units === UnitSystem.ENGLISH) {
    units = 'ft';
  } else if (units === UnitSystem.METRIC) {
    units = 'm';
  }

  return (
    <div className="input-group">
      <label htmlFor={nameId}>{children}</label>
      <div>
        <input
          className="form-item"
          id={nameId}
          name={nameId}
          value={value ? value : ''}
          type="number"
          onChange={onChange}
        />
        <span>{units}</span>
      </div>
    </div>
  );
};

export default InputData;

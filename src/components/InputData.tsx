import { FC, ChangeEvent } from 'react';
import { maxInputValues } from '../database/maxInputValues';
import { MeasurementType, UnitType } from '../store/slices/types';

interface InputDataProps {
  children: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  typeId: MeasurementType;
  value: number;
  unit: UnitType;
}

export const InputData: FC<InputDataProps> = ({
  children,
  onChange,
  typeId,
  value,
  unit,
}) => {
  const renderError = () => {
    const maxInput = maxInputValues[typeId][unit];
    if (!maxInput) return;
    if (value > maxInput) {
      return (
        <div className="error-message">
          value may be outside of normal operating range
        </div>
      );
    }
  };

  return (
    <div className="input-group">
      <label htmlFor={typeId}>{children}</label>
      <div>
        <input
          className="input-item input-with-units"
          id={typeId}
          name={typeId}
          value={value ? Math.abs(value) : ''}
          type="number"
          onChange={onChange}
        />
        <span>{unit}</span>
      </div>
      {renderError()}
    </div>
  );
};

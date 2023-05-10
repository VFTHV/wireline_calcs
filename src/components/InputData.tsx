import { FC, ChangeEvent } from 'react';

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
        />{' '}
        <span>{unit}</span>
      </div>
    </div>
  );
};

export default InputData;

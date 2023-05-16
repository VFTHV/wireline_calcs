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
  // const renderError = () => {
  //   const sortedRange = range.sort((a, b) => a - b);
  //   if (value < sortedRange[0] || value > sortedRange[1]) {
  //     return (
  //       <div className="error-message">
  //         value may be outside of normal operating range
  //       </div>
  //     );
  //   }
  // };

  return (
    <div className="input-group">
      <label htmlFor={nameId}>{children}</label>
      <div>
        <input
          className="form-item"
          id={nameId}
          name={nameId}
          value={value ? Math.abs(value) : ''}
          type="number"
          onChange={onChange}
        />
        <span>{unit}</span>
      </div>
      {/* {renderError()} */}
    </div>
  );
};

export default InputData;

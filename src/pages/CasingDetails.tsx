import { FC } from 'react';
import { casingData, tubingData } from '../database/casingsTubings';
import { NavHeader, PipeSelector, PipeSpecsDisplay } from '../components';

export const CasingDetails: FC = () => {
  return (
    <>
      <NavHeader>Casing/Tubing Specs</NavHeader>
      <PipeSelector pipeData={casingData} typeId="casing" />
      <PipeSpecsDisplay typeId="casing" />
      <PipeSelector pipeData={tubingData} typeId="tubing" />
      <PipeSpecsDisplay typeId="tubing" />
    </>
  );
};

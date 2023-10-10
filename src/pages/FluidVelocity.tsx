import { NavHeader, InputData, PipeSelector } from '../components';
import { casingData } from '../database/casingsTubings';

const FluidVelocity = () => {
  return (
    <>
      <NavHeader>Fluid Velocity</NavHeader>
      <PipeSelector pipeData={casingData} typeId="casing" />
    </>
  );
};

export default FluidVelocity;

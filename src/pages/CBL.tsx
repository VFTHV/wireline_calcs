import { NavHeader, PipeSelector, PipeSpecsDisplay } from '../components';
import { casingData } from '../database/casingsTubings';

export const CBL = () => {
  return (
    <>
      <NavHeader>Cement Bond Log Calcs</NavHeader>
      <PipeSelector pipeData={casingData} typeId="casing" />
      <PipeSpecsDisplay typeId="casing" specs={['od', 'id']} />
    </>
  );
};

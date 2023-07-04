import { NavHeader, PipeSelector, PipeSpecsDisplay } from '../components';
import { casingData } from '../database/casingsTubings';
import { useCblCalcs } from '../logics/useCblCalcs';

export const CBL = () => {
  useCblCalcs(casingData[0], 1.69);

  return (
    <>
      <NavHeader>Cement Bond Log Calcs</NavHeader>
      <PipeSelector pipeData={casingData} typeId="casing" />
      <PipeSpecsDisplay typeId="casing" specs={['od', 'id']} />
    </>
  );
};

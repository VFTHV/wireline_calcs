import { NavHeader, PipeSelector, PipeSpecsDisplay } from '../components';
import { casingData } from '../database/casingsTubings';
import { useCblCalcs } from '../logics/useCblCalcs';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

export const CBL = () => {
  const { casing } = useSelector((store: StoreState) => store.cbl);
  console.clear();
  if (casing) {
    useCblCalcs(casing, 1.69);
  }

  return (
    <>
      <NavHeader>Cement Bond Log Calcs</NavHeader>
      <PipeSelector pipeData={casingData} typeId="casing" />
      {/* add tool selector */}
      {/* add fluid  selector */}
      <PipeSpecsDisplay typeId="casing" specs={['od', 'id']} pipeThck />
    </>
  );
};

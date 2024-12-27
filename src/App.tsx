import { useLocalStorage } from './logics/useLocalStorageSet';
import { NavPage } from './components';
import { compDict } from './store/slices/types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from './store';

function App() {
  const { compDictKey } = useSelector((state: StoreState) => state.cbl);
  const { getAllUnits } = useLocalStorage();

  useEffect(() => {
    getAllUnits();
  }, []);

  return <>{compDictKey ? compDict[compDictKey] : <NavPage />}</>;
}

export default App;

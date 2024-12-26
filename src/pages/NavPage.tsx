import { NavItem } from '../components';
import { AiOutlineMail } from 'react-icons/ai';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { CompDictKeysType } from '../App';

type Props = {
  setDictKey: React.Dispatch<React.SetStateAction<CompDictKeysType | null>>;
};

export const NavPage: React.FC<Props> = ({ setDictKey }) => {
  return (
    <nav className="navigation">
      <ul>
        {/* <WarriorLink
          to={'https://wireline-logging.thinkific.com/courses/wireline-logging'}
        /> */}
        <NavItem
          setDictKey={setDictKey}
          componentDictKey="units"
          icon={<FiSettings />}
        >
          Change Measurement Units
        </NavItem>
        <NavItem setDictKey={setDictKey} componentDictKey="weakPoint">
          Weak Point Calculator
        </NavItem>
        <NavItem setDictKey={setDictKey} componentDictKey="weightBar">
          Sinker Bar Weight Calculator
        </NavItem>
        <NavItem setDictKey={setDictKey} componentDictKey="stretch">
          Cable Stretch Calculator
        </NavItem>
        <NavItem setDictKey={setDictKey} componentDictKey="keyseat">
          Cable Stuck Depth {`(Keyseat)`}
        </NavItem>
        <NavItem setDictKey={setDictKey} componentDictKey="maxPull">
          Max. Tension at Depth
        </NavItem>
        <NavItem setDictKey={setDictKey} componentDictKey="casginDetails">
          Casing/Tubing Specs
        </NavItem>
        <NavItem setDictKey={setDictKey} componentDictKey="tempCorrLength">
          Temp. Corrected Length
        </NavItem>
        <NavItem setDictKey={setDictKey} componentDictKey="cbl">
          Cement Bond Log Calcs
        </NavItem>
        <NavItem setDictKey={setDictKey} componentDictKey="fluidVelocity">
          Fluid Velocity
        </NavItem>
        <NavItem
          setDictKey={setDictKey}
          componentDictKey="feedback"
          icon={<AiOutlineMail />}
        >
          Report a Problem
        </NavItem>
        <NavItem
          setDictKey={setDictKey}
          componentDictKey="disclaimer"
          icon={<BsExclamationTriangle />}
        >
          Disclaimer
        </NavItem>
      </ul>
    </nav>
  );
};

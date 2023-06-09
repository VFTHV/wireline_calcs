import { NavItem } from '../components';
import { AiOutlineMail } from 'react-icons/ai';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

export const NavPage = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavItem to="/units" icon={<FiSettings />}>
          Change Measurement Units
        </NavItem>
        <NavItem to="/weakpoint">Weak Point Calculator</NavItem>
        <NavItem to="/weightbar">Sinker Bar Weight Calculator</NavItem>
        <NavItem to="/stretch">Cable Stretch Calculator</NavItem>
        <NavItem to="/tension-at-depth">Max. Tension at Depth</NavItem>
        <NavItem to="/csg-specs">Casing/Tubing Specs</NavItem>
        <NavItem to="/temp-corr-length">Temp. Corrected Length</NavItem>
        <NavItem to="/cbl">Cement Bond Log Calcs</NavItem>
        <NavItem to="/feedback" icon={<AiOutlineMail />}>
          Report a Problem
        </NavItem>
        <NavItem to="/disclaimer" icon={<BsExclamationTriangle />}>
          Disclaimer
        </NavItem>
      </ul>
    </nav>
  );
};

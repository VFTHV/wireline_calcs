import { NavItem } from '../components';
import { AiOutlineMail } from 'react-icons/ai';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

export const NavPage = () => {
  console.log('nav page');
  return (
    <nav className="navigation">
      <ul>
        {/* <WarriorLink
          to={'https://wireline-logging.thinkific.com/courses/wireline-logging'}
        /> */}
        <NavItem componentDictKey="units" icon={<FiSettings />}>
          Change Measurement Units
        </NavItem>
        <NavItem componentDictKey="weakPoint">Weak Point Calculator</NavItem>
        <NavItem componentDictKey="weightBar">
          Sinker Bar Weight Calculator
        </NavItem>
        <NavItem componentDictKey="stretch">Cable Stretch Calculator</NavItem>
        <NavItem componentDictKey="keyseat">
          Cable Stuck Depth {`(Keyseat)`}
        </NavItem>
        <NavItem componentDictKey="maxPull">Max. Tension at Depth</NavItem>
        <NavItem componentDictKey="casginDetails">Casing/Tubing Specs</NavItem>
        <NavItem componentDictKey="tempCorrLength">
          Temp. Corrected Length
        </NavItem>
        <NavItem componentDictKey="cbl">Cement Bond Log Calcs</NavItem>
        <NavItem componentDictKey="fluidVelocity">Fluid Velocity</NavItem>
        <NavItem componentDictKey="feedback" icon={<AiOutlineMail />}>
          Report a Problem
        </NavItem>
        <NavItem componentDictKey="disclaimer" icon={<BsExclamationTriangle />}>
          Disclaimer
        </NavItem>
      </ul>
    </nav>
  );
};

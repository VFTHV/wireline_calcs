import { NavItem } from '../components/AllComponents';
import { AiOutlineMail } from 'react-icons/ai';
import { BsExclamationTriangle } from 'react-icons/bs';

const NavPage = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavItem to="/units">Change Measurement Units</NavItem>
        <NavItem to="/weakpoint">Weak Point Calculator</NavItem>
        <NavItem to="/weightbar">Sinker Bar Weight Calculator</NavItem>
        <NavItem to="/stretch">Cable Stretch Calculator</NavItem>
        <NavItem to="/tension-at-depth">Max. Pullout at Depth</NavItem>
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

export default NavPage;
